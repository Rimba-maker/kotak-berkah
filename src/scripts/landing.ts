const navigationToggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const mobileNavigation = document.querySelector<HTMLElement>('#mobile-navigation');

if (navigationToggle && mobileNavigation) {
  const setNavigationOpen = (open: boolean) => {
    mobileNavigation.hidden = !open;
    navigationToggle.setAttribute('aria-expanded', String(open));
  };

  setNavigationOpen(false);
  navigationToggle.addEventListener('click', () => {
    setNavigationOpen(mobileNavigation.hidden);
  });
  mobileNavigation.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a[href]')) {
      setNavigationOpen(false);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !mobileNavigation.hidden) {
      setNavigationOpen(false);
      navigationToggle.focus();
    }
  });
}

function initializeFilter(buttonAttribute: string, itemSelector: string) {
  const buttons = document.querySelectorAll<HTMLButtonElement>(`[${buttonAttribute}]`);
  const items = document.querySelectorAll<HTMLElement>(itemSelector);
  const applyFilter = (category: string) => {
    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.getAttribute(buttonAttribute) === category));
    });
    items.forEach((item) => {
      item.hidden = category !== 'all' && item.dataset.category !== category;
    });
  };

  applyFilter('all');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.getAttribute(buttonAttribute);
      if (category) applyFilter(category);
    });
  });
}

initializeFilter('data-menu-filter', '[data-dish]');
initializeFilter('data-gallery-filter', '[data-gallery-item]');

const daylightSection = document.querySelector<HTMLElement>('.daylight-section');
const lightStages = document.querySelectorAll<HTMLElement>('[data-light-stage]');
const stagePhoto = document.querySelector<HTMLImageElement>('#stage-photo');
const stageCaption = document.querySelector<HTMLElement>('#stage-caption');

if (daylightSection) {
  const selectStage = (stage: string) => {
    daylightSection.dataset.stage = stage;
    lightStages.forEach((control) => {
      const active = control.dataset.stage === stage;
      control.setAttribute('aria-pressed', String(active));
      if (active && stagePhoto && control.dataset.photoSrc && control.dataset.photoAlt) {
        stagePhoto.src = control.dataset.photoSrc;
        stagePhoto.alt = control.dataset.photoAlt;
        if (stageCaption) stageCaption.textContent = control.dataset.photoCaption ?? '';
      }
    });
  };

  selectStage(daylightSection.dataset.stage || 'menu');
  lightStages.forEach((control) => {
    control.addEventListener('click', () => {
      const stage = control.dataset.stage;
      if (stage) selectStage(stage);
    });
  });
}

const inquiry = document.querySelector<HTMLFormElement>('form#inquiry');
const nameInput = inquiry?.querySelector<HTMLInputElement>('[name="nama"]');
const whatsappInput = inquiry?.querySelector<HTMLInputElement>('[name="whatsapp"]');
const dateInput = inquiry?.querySelector<HTMLInputElement>('[name="tanggal"]');
const quantityInput = inquiry?.querySelector<HTMLInputElement>('[name="jumlah"]');
const packageSelect = inquiry?.querySelector<HTMLSelectElement>('[name="paket"]');
const locationInput = inquiry?.querySelector<HTMLInputElement>('[name="lokasi"]');
const notesInput = inquiry?.querySelector<HTMLTextAreaElement>('[name="catatan"]');
const estimateOutput = document.querySelector<HTMLElement>('[data-estimate]');
const minimumOutput = document.querySelector<HTMLElement>('[data-minimum]');
const formStatus = document.querySelector<HTMLElement>('[data-form-status]');

const packages: Record<string, { price: number; minimum: number }> = {
  Bronze: { price: 25000, minimum: 50 },
  Silver: { price: 35000, minimum: 50 },
  Gold: { price: 50000, minimum: 50 },
  Platinum: { price: 75000, minimum: 100 },
};
const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

if (inquiry && nameInput && whatsappInput && dateInput && quantityInput && packageSelect && locationInput && notesInput && formStatus) {
  // JavaScript handles the validation cycle so native failures also reach the status region.
  inquiry.noValidate = true;
  nameInput.required = true;
  whatsappInput.required = true;
  dateInput.required = true;
  quantityInput.required = true;
  packageSelect.required = true;
  locationInput.required = true;
  quantityInput.step = '1';
  if (!packageSelect.value) packageSelect.value = 'Silver';

  const updateValidityAndEstimate = () => {
    const today = new Date();
    dateInput.min = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const selectedPackage = Object.hasOwn(packages, packageSelect.value) ? packages[packageSelect.value] : undefined;
    const minimum = selectedPackage?.minimum ?? 50;
    const quantity = quantityInput.valueAsNumber;
    quantityInput.min = String(minimum);
    if (minimumOutput) minimumOutput.textContent = `Minimum ${minimum} kotak`;

    nameInput.setCustomValidity(nameInput.value.trim() ? '' : 'Isi nama Anda terlebih dahulu.');
    locationInput.setCustomValidity(locationInput.value.trim() ? '' : 'Isi kota atau lokasi acara Anda.');
    const phone = whatsappInput.value.trim();
    const phoneDigits = phone.replace(/\D/g, '');
    whatsappInput.setCustomValidity(/^[+\d\s().-]+$/.test(phone) && phoneDigits.length >= 8 && phoneDigits.length <= 15
      ? '' : 'Isi nomor WhatsApp yang dapat dihubungi, dengan 8–15 digit.');
    packageSelect.setCustomValidity(selectedPackage || packageSelect.value === 'unknown'
      ? '' : 'Pilih Bronze, Silver, Gold, Platinum, atau Belum tahu.');
    dateInput.setCustomValidity('');
    if (!dateInput.value || dateInput.validity.badInput) {
      dateInput.setCustomValidity('Pilih tanggal acara yang valid.');
    } else if (dateInput.validity.rangeUnderflow) {
      dateInput.setCustomValidity('Tanggal acara tidak boleh sebelum hari ini. Pilih hari ini atau tanggal berikutnya.');
    }
    quantityInput.setCustomValidity('');
    if (!Number.isSafeInteger(quantity)) {
      quantityInput.setCustomValidity('Isi jumlah kotak dengan bilangan bulat yang valid.');
    } else if (quantity < minimum) {
      quantityInput.setCustomValidity(`Minimum ${minimum} kotak untuk ${selectedPackage ? `paket ${packageSelect.value}` : 'konsultasi'}. Ubah jumlah atau pilih paket lain.`);
    } else if (selectedPackage && !Number.isSafeInteger(selectedPackage.price * quantity)) {
      quantityInput.setCustomValidity('Jumlah terlalu besar untuk dihitung. Masukkan jumlah kotak yang lebih kecil.');
    }

    if (estimateOutput) {
      estimateOutput.textContent = packageSelect.value === 'unknown'
        ? 'Perlu konsultasi'
        : selectedPackage && quantityInput.validity.valid
          ? rupiah.format(selectedPackage.price * quantity)
          : 'Isi jumlah kotak yang valid';
    }
  };

  updateValidityAndEstimate();
  inquiry.addEventListener('input', () => {
    formStatus.replaceChildren();
    updateValidityAndEstimate();
  });
  inquiry.addEventListener('change', () => {
    formStatus.replaceChildren();
    updateValidityAndEstimate();
  });

  document.querySelectorAll<HTMLButtonElement>('[data-select-package]').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedPackage = button.dataset.selectPackage;
      if (!selectedPackage || !Object.hasOwn(packages, selectedPackage)) return;
      packageSelect.value = selectedPackage;
      updateValidityAndEstimate();
      formStatus.textContent = quantityInput.validationMessage || `Paket ${selectedPackage} dipilih. Lengkapi kebutuhan acara Anda untuk konsultasi.`;
      document.querySelector<HTMLElement>('#form')?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start',
      });
      packageSelect.focus({ preventScroll: true });
    });
  });

  inquiry.addEventListener('submit', (event) => {
    event.preventDefault();
    updateValidityAndEstimate();
    if (!inquiry.checkValidity()) {
      const invalidField = inquiry.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(':invalid');
      formStatus.textContent = invalidField?.validationMessage || 'Periksa kembali isian formulir sebelum membuka WhatsApp.';
      inquiry.reportValidity();
      return;
    }

    const packageLabel = packageSelect.value === 'unknown' ? 'Belum tahu' : packageSelect.value;
    const message = [
      'Halo Kotak Berkah, saya ingin konsultasi catering.',
      '',
      `Nama: ${nameInput.value.trim()}`,
      `No. WhatsApp: ${whatsappInput.value.trim()}`,
      `Tanggal acara: ${dateInput.value}`,
      `Jumlah: ${quantityInput.valueAsNumber} kotak`,
      `Paket: ${packageLabel}`,
      `Lokasi acara: ${locationInput.value.trim()}`,
      `Catatan: ${notesInput.value.trim() || 'Tidak ada'}`,
      '',
      'Mohon informasi ketersediaan dan penawaran. Ini adalah permintaan konsultasi, bukan konfirmasi pesanan.',
    ].join('\n');
    const url = `https://wa.me/6282268116531?${new URLSearchParams({ text: message })}`;
    const fallbackLink = document.createElement('a');
    fallbackLink.href = url;
    fallbackLink.target = '_blank';
    fallbackLink.rel = 'noopener noreferrer';
    fallbackLink.textContent = 'Buka WhatsApp untuk mengirim kebutuhan acara';

    let popup: Window | null = null;
    try {
      // Opening a same-origin blank tab first lets us detect blocking and sever the opener before navigation.
      popup = window.open('about:blank', '_blank');
      if (!popup) {
        formStatus.replaceChildren('Browser memblokir tab baru. ', fallbackLink, '. Pesan belum dikirim.');
        return;
      }
      popup.opener = null;
      popup.location.replace(url);
      formStatus.replaceChildren('WhatsApp dibuka. Kirim pesan di WhatsApp untuk memulai konsultasi. Jika tab tidak terbuka, ', fallbackLink, '. Belum ada pesanan yang dikonfirmasi.');
    } catch (error) {
      popup?.close();
      console.error('Tidak dapat membuka WhatsApp:', error);
      formStatus.replaceChildren('WhatsApp tidak dapat dibuka secara otomatis. ', fallbackLink, '. Pesan belum dikirim.');
    }
  });
}
