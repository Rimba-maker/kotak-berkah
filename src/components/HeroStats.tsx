import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
  { target: 1200, suffix: '+', label: 'Event dilayani' },
  { target: 3000, suffix: '+', label: 'Box per order' },
  { target: 5,    suffix: '+', label: 'Tahun pengalaman' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null!);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) =>
    Math.round(v).toLocaleString('id-ID') + suffix
  );

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, { duration: 2, ease: 'easeOut' });
    return controls.stop;
  }, [isInView]);

  return (
    <div ref={ref} style={{ fontSize: '2.8rem', fontWeight: 700, color: 'var(--green)', lineHeight: 1 }}>
      <motion.span>{display}</motion.span>
    </div>
  );
}

export default function HeroStats() {
  return (
    <motion.div
      style={{ display: 'flex', gap: 0, marginBottom: '36px' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          style={{
            paddingLeft:   i > 0 ? '28px' : 0,
            paddingRight:  i < stats.length - 1 ? '28px' : 0,
            borderRight:   i < stats.length - 1 ? '1.5px solid var(--green-light)' : 'none',
          }}
        >
          <Counter target={stat.target} suffix={stat.suffix} />
          <div style={{ fontSize: '1.3rem', color: 'var(--text-soft)', marginTop: '6px', letterSpacing: '0.01em' }}>
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
