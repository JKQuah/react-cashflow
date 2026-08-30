# CashFlow — Landing Page Design Reference

> Everything you need to reproduce the app's visual identity on the web. Dark-first, clean, financial-grade.

---

## Brand Identity

**Product name:** CashFlow  
**Tagline:** Not a tracking app. A cash flow improvement system.  
**Personality:** Premium, precise, trustworthy. Dark-default with a signature lime accent.  
**Primary audience:** Individuals who want to understand and improve their monthly cash flow.

---

## Fonts

### Primary — Space Grotesk
Used for all headings, numbers, labels, and UI text.

```
font-family: 'Space Grotesk', sans-serif;
Import: https://fonts.google.com/specimen/Space+Grotesk
```

### Fallback (CJK) — Noto Sans SC
Used as a fallback for Chinese characters alongside Space Grotesk.

```
font-family: 'Space Grotesk', 'Noto Sans SC', sans-serif;
```

### Type Scale

| Role           | Size  | Weight | Letter-spacing | Usage                          |
|----------------|-------|--------|----------------|--------------------------------|
| Display Large  | 48px  | 700    | −1.5px         | Hero headline                  |
| Display Medium | 34px  | 700    | −1px           | Section titles                 |
| Title Large    | 20px  | 700    | —              | Card headings, modal titles    |
| Title Medium   | 16px  | 600    | —              | Sub-section headings           |
| Title Small    | 14px  | 600    | —              | List item titles               |
| Body Large     | 16px  | 400    | —              | Paragraphs, descriptions       |
| Body Medium    | 14px  | 400    | —              | Secondary text, captions       |
| Label Medium   | 12px  | 500    | —              | Input labels, small metadata   |
| Label Small    | 10px  | 700    | +1px           | Chips, badges, micro-labels    |

---

## Color Palette

### Brand Colors

| Token        | Hex       | Preview | Usage                                     |
|--------------|-----------|---------|-------------------------------------------|
| `--lime`     | `#C0F158` | 🟢      | Signature accent — CTAs, highlights, selected states |
| `--lime-dim` | `#D4F77A` | 🟡      | Lighter accent for hover states           |
| `--ink-black`| `#202020` | ⬛      | Near-black — headings, primary buttons    |

### Semantic Colors

| Token            | Hex       | Dark mode use                | Light mode use           |
|------------------|-----------|------------------------------|--------------------------|
| `--color-success`| `#4ADE80` | Positive values, income      | `#15803D` (darker green) |
| `--color-warning`| `#FF6B2B` | Expense warnings             | `#C2410C` (darker orange)|
| `--color-danger` | `#F87171` | Over-budget, errors          | `#B91C1C` (darker red)   |

### Dark Theme (default)

| Token                  | Hex       | Role                                  |
|------------------------|-----------|---------------------------------------|
| `--bg`                 | `#111111` | Page / scaffold background            |
| `--surface`            | `#1C1C1C` | Cards, sheets, modals                 |
| `--surface-alt`        | `#252525` | Inner card rows, input fills          |
| `--border`             | `#2C2C2C` | Dividers, input borders, tile borders |
| `--text-primary`       | `#FFFFFF` | Headings, primary values              |
| `--text-secondary`     | `#B8B8B8` | Supporting text (8.6:1 contrast ✅)   |
| `--text-muted`         | `#909090` | Captions, placeholders (4.8:1 ✅)     |

### Light Theme

| Token                  | Hex       | Role                                  |
|------------------------|-----------|---------------------------------------|
| `--bg`                 | `#F2F3F5` | Page / scaffold background            |
| `--surface`            | `#FFFFFF` | Cards, sheets, modals                 |
| `--surface-alt`        | `#F2F3F5` | Inner card rows, input fills          |
| `--border`             | `#E8E9ED` | Dividers, input borders               |
| `--text-primary`       | `#202020` | Headings (14.7:1 contrast ✅)         |
| `--text-secondary`     | `#4B5563` | Supporting text (6.8:1 ✅)            |
| `--text-muted`         | `#696969` | Captions, placeholders (4.9:1 ✅)     |

---

## CSS Custom Properties (ready to paste)

```css
/* ── Fonts ─────────────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');

:root {
  --font-primary: 'Space Grotesk', 'Noto Sans SC', sans-serif;

  /* Brand */
  --lime:          #C0F158;
  --lime-dim:      #D4F77A;
  --lime-muted:    rgba(192, 241, 88, 0.12);
  --ink-black:     #202020;

  /* Semantic */
  --color-success: #4ADE80;
  --color-warning: #FF6B2B;
  --color-danger:  #F87171;
}

/* ── Dark theme (default) ───────────────────────────── */
[data-theme="dark"], :root {
  --bg:             #111111;
  --surface:        #1C1C1C;
  --surface-alt:    #252525;
  --border:         #2C2C2C;
  --text-primary:   #FFFFFF;
  --text-secondary: #B8B8B8;
  --text-muted:     #909090;

  --cta-bg:         var(--lime);
  --cta-fg:         var(--ink-black);
}

/* ── Light theme ────────────────────────────────────── */
[data-theme="light"] {
  --bg:             #F2F3F5;
  --surface:        #FFFFFF;
  --surface-alt:    #F2F3F5;
  --border:         #E8E9ED;
  --text-primary:   #202020;
  --text-secondary: #4B5563;
  --text-muted:     #696969;

  --cta-bg:         var(--ink-black);
  --cta-fg:         #FFFFFF;

  /* Accessible semantic colors for light mode */
  --color-success: #15803D;
  --color-warning: #C2410C;
  --color-danger:  #B91C1C;
}
```

---

## Spacing & Shape Tokens

### Spacing Scale (4pt base)

| Token    | Value | Usage                              |
|----------|-------|------------------------------------|
| `--sp-1` | 4px   | Icon gaps, micro padding           |
| `--sp-2` | 8px   | Tight row gaps, badge padding      |
| `--sp-3` | 12px  | Inner card padding (small)         |
| `--sp-4` | 16px  | Standard section padding           |
| `--sp-5` | 20px  | Card padding                       |
| `--sp-6` | 24px  | Section horizontal margin          |
| `--sp-8` | 32px  | Between sections                   |
| `--sp-12`| 48px  | Large section gaps                 |

### Border Radius

| Token         | Value | Usage                                     |
|---------------|-------|-------------------------------------------|
| `--radius-sm` | 8px   | Buttons (small), chips, badges            |
| `--radius-md` | 12px  | Text buttons, pills, small cards          |
| `--radius-lg` | 14px  | Primary buttons, input fields             |
| `--radius-xl` | 16px  | Standard cards, tiles                     |
| `--radius-2xl`| 20px  | Large cards, dashboard widgets            |
| `--radius-3xl`| 24px  | Bottom sheets (top corners)               |

```css
:root {
  --sp-1:  4px;  --sp-2:  8px;  --sp-3:  12px;
  --sp-4:  16px; --sp-5:  20px; --sp-6:  24px;
  --sp-8:  32px; --sp-12: 48px;

  --radius-sm:  8px;  --radius-md:  12px; --radius-lg:  14px;
  --radius-xl:  16px; --radius-2xl: 20px; --radius-3xl: 24px;
}
```

---

## Component Tokens

### Primary Button (CTA)

```css
.btn-primary {
  background: var(--cta-bg);        /* lime (dark) / ink-black (light) */
  color:      var(--cta-fg);        /* ink-black (dark) / white (light) */
  font-family: var(--font-primary);
  font-size:   16px;
  font-weight: 700;
  height:      52px;
  padding:     0 24px;
  border:      none;
  border-radius: var(--radius-lg);  /* 14px */
  cursor:      pointer;
  transition:  opacity 120ms ease;
}
.btn-primary:hover { opacity: 0.88; }
```

### Card

```css
.card {
  background:    var(--surface);
  border-radius: var(--radius-2xl);  /* 20px */
  padding:       var(--sp-5);        /* 20px */
  border:        1px solid var(--border);
}

/* Inner stat row / alt card */
.card-alt {
  background:    var(--surface-alt);
  border-radius: var(--radius-xl);   /* 16px */
  padding:       var(--sp-4);
}
```

### Input Field

```css
.input {
  background:    var(--surface);
  border:        1px solid var(--border);
  border-radius: var(--radius-lg);   /* 14px */
  padding:       14px 16px;
  font-family:   var(--font-primary);
  font-size:     14px;
  color:         var(--text-primary);
  outline:       none;
  transition:    border-color 150ms ease;
}
.input:focus {
  border:        2px solid var(--lime);  /* dark / ink-black in light */
}
```

### Icon Container (lime background)

```css
.icon-chip {
  width:         36px;
  height:        36px;
  background:    var(--lime);
  border-radius: var(--radius-md);   /* 12px */
  display:       flex;
  align-items:   center;
  justify-content: center;
  color:         var(--ink-black);
}
```

### Progress Bar

```css
.progress-track {
  background:    var(--border);
  border-radius: 4px;
  height:        6px;
  overflow:      hidden;
}
.progress-fill {
  height:        100%;
  border-radius: 4px;
  background:    var(--lime);           /* green: healthy */
  /* Swap fill color: #FB923C for 80–99%, #F87171 for ≥100% */
}
```

### Badge / Chip (muted "coming soon" style)

```css
.badge {
  background:    rgba(144, 144, 144, 0.12);
  color:         var(--text-muted);
  font-size:     10px;
  font-weight:   700;
  letter-spacing: 0.5px;
  padding:       3px 8px;
  border-radius: 999px;
  text-transform: uppercase;
}

.badge-lime {
  background:    var(--lime-muted);
  color:         var(--lime);
}
```

---

## Elevation & Shadows

The app is **flat-first** — elevation is expressed through background layering (`#111` → `#1C1C` → `#252`) rather than shadows. On the light theme, a subtle shadow is used on cards only.

```css
/* Light theme card shadow only */
[data-theme="light"] .card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06),
              0 1px 2px rgba(0, 0, 0, 0.04);
}
```

---

## Landing Page Section Recommendations

### Hero
- Dark background (`#111111`)
- Headline in **Display Large** (48px / 700) — white
- Sub-headline in **Body Large** (16px / 400) — `#B8B8B8`
- Single lime CTA button
- App screenshot or mockup on right

### Feature Cards
- 3-column grid of `.card` components
- Icon in `.icon-chip` (lime bg, ink-black icon)
- Title in **Title Medium** (16px / 600) — white
- Body in **Body Medium** (14px / 400) — `#B8B8B8`

### Pricing / Tiers
- Free tier: outlined card, border `#2C2C2C`
- Premium tier: `--surface` card with lime border `#C0F158` and lime CTA
- Use **Label Small** (10px / 700 / +1px tracking) for tier badge labels

### Stats / Social Proof
- Numbers in **Display Medium** (34px / 700) — white or lime
- Labels in **Label Small** — `#909090`
- Horizontal row on dark surface card

### Footer
- Background: `#1C1C1C`
- Text: `#909090`
- Links: `#B8B8B8`, hover → `#FFFFFF`

---

## Dos and Don'ts

| ✅ Do                                                    | ❌ Don't                                          |
|----------------------------------------------------------|---------------------------------------------------|
| Use lime (`#C0F158`) only as an accent, not a background | Fill large areas with lime                        |
| Pair lime with ink-black (`#202020`) text always         | Put white text on lime — low contrast             |
| Use Space Grotesk for all text                           | Mix in other typefaces                            |
| Keep cards flat — layered backgrounds, not shadows       | Add heavy drop shadows                            |
| Use `#4ADE80` for positive values (income, surplus)      | Use lime for positive values — it's the CTA color |
| Use `#F87171` for over-budget / danger states            | Use red for primary actions                       |
| Default to dark theme for screenshots and hero           | Use light mode as the hero — dark reads premium   |
