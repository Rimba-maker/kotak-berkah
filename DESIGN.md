---
name: Kotak Berkah — Rumah Terbuka
description: Warm catering hospitality expressed through daylight, continuous sections, and honest food photography.
colors:
  limewash: "#f2efea"
  charcoal: "#1c1f22"
  sunbeam: "#d6a43a"
  shadow-blue: "#5b6b7c"
  stone: "#d9dcd9"
  paper: "#fbfaf6"
  muted: "#52615e"
  line: "#b9bfba"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial, sans-serif"
    fontSize: "clamp(64px, 6.6vw, 96px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Condensed, Arial, sans-serif"
    fontSize: "clamp(48px, 5.2vw, 76px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.25
  body:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
rounded:
  control: "2px"
  photo: "0px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "100px"
components:
  button-primary:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "13px 24px"
  button-primary-hover:
    backgroundColor: "{colors.shadow-blue}"
    textColor: "{colors.paper}"
  button-sun:
    backgroundColor: "{colors.sunbeam}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.control}"
    padding: "13px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.control}"
    padding: "13px 24px"
  button-outline-hover:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.paper}"
  filter-selected:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
  package:
    textColor: "{colors.charcoal}"
    rounded: "{rounded.photo}"
    padding: "24px"
---

# Design System: Kotak Berkah

## Overview

**Creative North Star: "Rumah Terbuka"**

A welcoming, daylight-filled room becomes the visual metaphor for catering with the familiarity of home. Continuous material sections, tall italic headings, and photographs at different scales create an open architectural rhythm rather than a collection of floating cards.

The built system is warm, direct, and professional. Food, package information, and consultation controls remain legible within the spatial composition. Photographs are explicitly illustrative; visual richness never stands in for evidence about clients, production, or certification. The selected replacement world is not the former green-and-cream identity.

**Key Characteristics:**
- Continuous limewashed and paper surfaces.
- Charcoal structural cuts with a sunbeam light plane.
- Self-hosted condensed italic display paired with calm Barlow text.
- Square photography and near-square controls.
- Honest captions and visible keyboard focus.

## Colors

The frontmatter is the primitive authority; names below describe application, not a second palette.

### Primary
- **Sunbeam:** warm light-plane accent, selected stage, key entry action, and price emphasis; not a text color for long passages.
- **Charcoal:** primary text, structural baseline, primary buttons, and selected filters.

### Secondary
- **Shadow blue:** emphasized heading phrases, restrained hover feedback, and connective lines on dark surfaces.

### Neutral
- **Limewash:** the ambient page material and photographic caption ground.
- **Paper:** package, service, ordering, and field surfaces.
- **Stone:** tonal changes for ingredients and inquiry.
- **Muted:** supporting explanations and captions on light surfaces.
- **Line:** dividers, grids, and resting filter outlines.

**The Light Plane Rule.** Sunbeam connects space and marks action; it is not a decorative gradient or a blanket card background.

## Typography

**Display Font:** self-hosted Barlow Condensed, weight 600 italic, with Arial/sans-serif fallback. The italic face is the real local font asset, not synthetic slant.

**Body Font:** self-hosted Barlow at normal weights 400, 500, and 600, with Arial/sans-serif fallback.

The pairing feels tall and hospitable without making operational information theatrical. Display and headline values live in frontmatter; package names use the same italic family at 36px, with 32px on mobile. Prices use normal Barlow with tabular numbers; the estimate uses condensed italic at 52px, then 48px on mobile. Body paragraphs are bounded to 68ch by default. Labels remain sentence case.

The hero display resolves to 76px below 1150px, 64px below 900px, and finally 60px below 600px. Mobile section headlines are 54px; the gathering statement is a local 47px exception. These are responsive overrides, not a replacement type scale.

**The Two Voices Rule.** Condensed italic carries invitations and major headings; normal Barlow carries decisions, labels, prices, and explanations.

## Layout

The desktop gutter is 5.5vw, with section gutters at least 24px. At 1600px and above, the gutter becomes the larger of 5.5vw and half the excess over 1440px. Default section spacing follows the frontmatter section token; it changes to 76px at 900px and 62px at 600px. Mobile gutters are 20px.

The opening composition uses a 42/58 split and a three-photo arrangement. Package information is a shared four-column divided surface, reducing to two columns at 900px. Menu photography moves from four to three to two columns. Service content becomes a single column at 600px; FAQ and inquiry already stack at 900px. Unequal photo sizes are intentional, with captions outside the image area.

Actual width conditions are max-width 1150px, 900px, and 600px, plus min-width 1600px. At the final mobile override, the hero photo arrangement is 230px high; its main, secondary, and detail figures are 195px, 107px, and 80px respectively. Preserve this final cascade rather than the earlier mobile declarations. The mobile ordering bar reserves body space and footer clearance, including safe-area inset support.

**The Continuous Room Rule.** Separate information through material changes, measured spacing, and shared dividers before introducing isolated containers.

## Elevation & Depth

Depth is primarily tonal and structural: overlapping photographic planes, a moving sunbeam band, dark section cuts, and continuous surfaces. There is no generic card shadow vocabulary. The mobile navigation alone uses a diffuse overlay shadow (`0 12px 24px #1c1f2214`) to distinguish an open menu from the page beneath.

Buttons transition background, color, and transform over 0.2s; filters transition background over 0.2s. The light plane changes top and rotation over 0.8s using the root ease curve. Reduced-motion mode removes transitions and animations, uses automatic scrolling, and holds the light plane at a static -10deg rotation. The signature changes image, alternative text, and caption together; it is not an autoplay carousel.

## Shapes

Controls are near-square and photographs are square, as recorded in frontmatter. Divider-led package columns are not rounded generic cards. The hero's dark top edges (10px and 6px desktop; 7px and 4px mobile) and the packaging baseline (14px desktop; 10px mobile) are architectural section cuts on square imagery. They are native to the selected world, not accent borders attached to rounded cards. Small circular path markers are functional stage points, not the dominant container geometry.

## Components

### Buttons

Solid charcoal is the default commitment; sunbeam introduces the principal discovery action; outline buttons keep package choice restrained. Default buttons have a 48px minimum height, weight 600, and the frontmatter padding. Small header buttons are 42px minimum. Hover changes the solid button to shadow blue, the sunbeam button to its observed warmer highlight, and the outline to charcoal with paper text. Active state moves down 1px. Keyboard focus uses a 2px charcoal outline with 5px offset.

### Chips

Category filters are rectangular outlined controls, not pills. Selection uses charcoal with paper text and `aria-pressed`; hover darkens the outline. Desktop minimum height is 45px; mobile is 44px. Filtering hides nonmatching figures without changing the package selection.

### Cards / Containers

Packages belong to one divided grid with shared top and bottom rules and vertical separators. Each column uses the frontmatter package padding; the featured package adds a local warm neutral fill, not elevation. Photo captions identify illustration status. Menu and occasion figures stay open on their parent surface without enclosing boxes.

### Inputs / Fields

Paper fields use a subdued one-pixel stroke, near-square corners, and 50px minimum height. Textarea minimum height is 112px and resizes vertically. Field focus uses a 2px charcoal outline with 2px offset. Mobile input text is 16px. Validation is native-backed and explained in the status region; no unimplemented red-error or disabled system is prescribed.

### Navigation

Desktop navigation is 14px medium Barlow with underline-on-hover. At 900px it becomes a labeled Menu toggle and paper dropdown. The dropdown reflects expanded state, closes after link selection, and Escape restores focus to its toggle. This pattern is not documented as a focus-trapped modal.

### Daylight Stage Path

Three text buttons sit on a charcoal structural band with line-and-point markers. Sunbeam indicates selection and remains the focus outline color on this dark band. Selecting a stage changes the main photo, its alternative text, its caption, and the light-plane position. This is a product-specific signature, not a requirement that every future surface repeat the landing hero composition.

### FAQ and Estimate

Native disclosure rows use shared divider lines and readable sentence-case summaries. The estimate is a tabular numeric display between horizontal rules, not a raised dashboard tile. The form opens a consultation handoff; feedback never implies a confirmed order.

## Do's and Don'ts

### Do:
- **Do** use material changes and shared dividers to organize continuous sections.
- **Do** use self-hosted condensed italic for major invitations and normal Barlow for operational detail.
- **Do** keep image captions and illustration disclosures visible beside their photographs.
- **Do** preserve visible focus, pressed states, and reduced-motion behavior.
- **Do** follow the final mobile cascade rather than copying superseded declarations.

### Don't:
- **Don't** replace square photo planes with generic rounded, shadowed cards.
- **Don't** remove architectural section cuts merely because an automated detector labels them card accents.
- **Don't** revive the discarded green-and-cream identity or turn the light plane into a decorative gradient.
- **Don't** treat stock imagery as evidence of clients, certification, or actual delivered packages.
- **Don't** make the landing page composition a mandatory template for every future surface.
