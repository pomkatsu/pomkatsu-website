# Multi-Domain Theming

Pages shared across app domains (pomkatsu.com, astralapp.love, etc.) need domain-aware styling so text is readable on each domain's background.

## How It Works

**CSS custom properties** defined on the `LegalLayout.vue` wrapper cascade to all child components. One source of truth — no conditional logic in individual pages.

### Architecture

```
LegalLayout.vue          <-- defines --legal-* CSS variables via :style binding
  ├── TableOfContents.vue   <-- uses var(--legal-*) in scoped styles
  ├── TermsOfService.vue    <-- uses var(--legal-*) in scoped styles
  ├── PrivacyPolicy.vue     <-- ...
  ├── DMCA.vue
  ├── CookiePolicy.vue
  ├── AcceptableUse.vue
  └── EULA.vue
```

### Theme Switching

In `LegalLayout.vue`, the `themeVars` object checks `isAppDomain` and returns the appropriate color set:

```javascript
const themeVars = isAppDomain ? { /* astral colors */ } : { /* pomkatsu colors */ }
```

Bound to the root div: `<div :style="themeVars">`. All descendants inherit the variables.

## CSS Variable Reference

| Variable | Purpose | Pomkatsu | Astral |
|----------|---------|----------|--------|
| `--legal-text` | Headings, primary text | `#46301C` | `rgba(255,255,255,0.9)` |
| `--legal-text-secondary` | Body, dates, list items | `#5A3E26` | `rgba(255,255,255,0.7)` |
| `--legal-text-strong` | Emphasis, active states | `#2E1F12` | `#ffffff` |
| `--legal-bg-box` | Info/contact boxes | `#FFF8ED` | `rgba(255,255,255,0.06)` |
| `--legal-bg-surface` | Disclaimer boxes, hover | `#FCF1DC` | `rgba(255,255,255,0.04)` |
| `--legal-bg-surface-alpha` | TOC background | `rgba(252,241,220,0.5)` | `rgba(255,255,255,0.06)` |
| `--legal-bg-surface-hover` | TOC hover | `rgba(252,241,220,0.6)` | `rgba(255,255,255,0.08)` |
| `--legal-bg-surface-active` | TOC active bg | `#F5E5C8` | `rgba(255,255,255,0.12)` |
| `--legal-border` | Borders, dividers | `#F5E5C8` | `rgba(255,255,255,0.12)` |
| `--legal-border-accent` | Box left borders | `#5A3E26` | `rgba(155,89,182,0.6)` |
| `--legal-link` | Link text | `#46301C` | `#EFDB5E` |
| `--legal-link-hover` | Link hover | `#2E1F12` | `#f5e88a` |
| `--legal-link-border` | Link underline | `#5A3E26` | `rgba(239,219,94,0.5)` |
| `--legal-shadow` | Card shadows | `rgba(70,48,28,0.05)` | `rgba(0,0,0,0.2)` |
| `--legal-scrollbar` | TOC scrollbar | `#5A3E26` | `rgba(255,255,255,0.3)` |
| `--legal-warning-bg` | Critical warning bg | `#fecdd3` | `rgba(190,18,60,0.15)` |
| `--legal-warning-text` | Warning body text | `#2E1F12` | `#fca5a5` |
| `--legal-warning-heading` | Warning headings | `#881337` | `#fca5a5` |

**Not themed** (hardcoded in all themes): `#be123c` warning borders, `#E5E7EB`/`#9CA3AF` footer colors, all `@media print` values.

## Adding a New App Domain Theme

1. Open `src/components/LegalLayout.vue`
2. In the `themeVars` definition, add a new branch for your domain:

```javascript
const themeVars = domainConfig?.id === 'new-app'
  ? { '--legal-text': '...', /* ... */ }
  : isAppDomain
  ? { /* astral colors */ }
  : { /* pomkatsu colors */ }
```

3. No changes needed in any other file — the CSS variables cascade automatically.

## Other Domain-Aware Pages

### DeleteAccount.vue

Uses **Tailwind conditional classes** with `isAppDomain` (no CSS variables — the page has no `<style>` block). Also dynamically uses `appName` from domain config.

Pattern: `:class="isAppDomain ? 'bg-astral-deep' : 'bg-gradient-to-br from-amber-50 to-orange-50'"`

### ContactForm.vue

Uses a **variant prop** system (`'default'` | `'mono'` | `'astral'`). LegalLayout passes `:variant="isAppDomain ? 'astral' : 'default'"`.

Astral variant uses: `bg-astral-deep`, `border-white/10`, `text-white`, `bg-white/5`, `focus:ring-astral-cosmic`, `bg-astral-cosmic`.

## Files Overview

| File | Role |
|------|------|
| `src/components/LegalLayout.vue` | Theme source — defines all `--legal-*` variables, passes variant to ContactForm |
| `src/components/TableOfContents.vue` | Shared sidebar — uses CSS variables |
| `src/components/ContactForm.vue` | Contact modal — uses variant prop (`default`/`mono`/`astral`) |
| `src/views/TermsOfService.vue` | Legal page — uses CSS variables |
| `src/views/PrivacyPolicy.vue` | Legal page — uses CSS variables |
| `src/views/DMCA.vue` | Legal page — uses CSS variables |
| `src/views/CookiePolicy.vue` | Legal page — uses CSS variables |
| `src/views/AcceptableUse.vue` | Legal page — uses CSS variables |
| `src/views/EULA.vue` | Legal page — uses CSS variables |
| `src/views/DeleteAccount.vue` | Account deletion — uses Tailwind conditionals |
