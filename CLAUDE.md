# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Landing page website for Pomkatsu LLC, a Texas-based company that develops mobile applications for document translation and language learning. Built with Vue 3, Vite, and Tailwind CSS, deployed on Firebase Hosting.

## Design System

### Color Palette
The main site (homepage and legal pages) is ink on white with one accent. Each app page keeps its own palette (`myseedstory-*`, `et-*`, `certmatrix-*`, `bentobook-*`, `astral-*`).

#### Primary Colors (Ink)
- **primary**: `#1D1E22` - Headings and primary text
- **primary-light**: `#5C6068` - Secondary text
- **primary-dark**: `#0F1012` - Strongest text, hover on ink fills

#### Secondary Colors (Paper)
- **secondary**: `#FFFFFF` - Page background
- **secondary-light**: `#F4F5F7` - Washes, hover fills, highlighted sections
- **secondary-dark**: `#E3E5E9` - Borders

#### Brand Accent (from the mascot)
- **katsu**: `#F5A623` - The one accent. Use it as a fill (primary buttons), never as a text colour
- **katsu-dark**: `#E0920F` - Hover on katsu fills
- **cream**: `#FCF1DE` - The logo's own background. Only behind the mascot
- **live**: `#12D45F` - Status dot for a shipped product

#### Accent Colors (Pomkatsu pink - use sparingly)
- **pomkatsu-200**: `#fecdd3` - Light pink for critical warnings background
- **pomkatsu-700**: `#be123c` - Medium pink for warning borders
- **pomkatsu-900**: `#881337` - Dark pink for warning text

#### Legal/Documentation Colors
- **legal-text**: `#474B53` - Standard text in legal documents
- **legal-heading**: `#1D1E22` - Headings in legal documents
- **legal-border**: `#E3E5E9` - Borders and dividers
- **legal-warning**: `#be123c` - Warning indicators
- **legal-warning-light**: `#fecdd3` - Warning backgrounds
- **legal-warning-dark**: `#881337` - Warning text emphasis

### Design Principles

1. **Flat Design**: No drop shadows on primary UI elements (navigation, headers)
2. **Transparency**: Use semi-transparent backgrounds where appropriate (e.g., table of contents)
3. **Consistency**: All text uses the ink palette, katsu is a fill only, pink is reserved for warnings
4. **Readability**: High contrast between text and backgrounds, especially in legal documents
5. **Minimalism**: Clean, uncluttered layouts with ample whitespace

### Typography
- Font family: Inter (primary), system fonts as fallback
- Homepage headings and the Pomkatsu wordmark: Bricolage Grotesque (`font-brand`), bold
- Headings: Bold weight, primary color
- Body text: Regular weight, primary-light color (legal body text uses the darker `legal-text`)
- Legal text: Enhanced line height (1.75) for readability

### Component Patterns

#### Legal Documents
- Transparent header boxes with subtle borders
- Color-coded information boxes:
  - Info/highlight boxes: Light gray background
  - Warning boxes: Light gray with pink border
  - Critical warnings: Light pink background with dark text
  - Disclaimers: Light gray with dashed border
- Sticky table of contents on desktop (semi-transparent light gray)
- Responsive layout that works on all devices

#### Navigation
- Flat design (no shadows)
- White background
- Ink text with hover states
- Homepage nav carries the mascot on a cream tile (`/pomkatsu-mascot.webp`, the transparent cut-out)

### File Structure
- `/src/views/` - Vue page components
- `/src/components/` - Reusable Vue components
- `/src/legal/` - Markdown files for legal content
- `/public/` - Static assets and favicons

## Essential Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server at http://localhost:5173
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
npm run deploy       # Build and deploy to Firebase Hosting (requires firebase login)
```

## Architecture

### Project Structure
```
src/
├── views/           # Page components (HomePage, TermsOfService, etc.)
├── components/      # Reusable components (LegalLayout, ContactForm)
├── legal/          # Markdown files for legal content
├── router/         # Vue Router configuration
├── style.css       # Global styles and Tailwind imports
└── main.js         # App entry point
```

### Routing Architecture
- Single Page Application using Vue Router with HTML5 history mode
- All routes defined in `src/router/index.js`
- Firebase configured with SPA rewrites (all routes → index.html)
- Legal pages share common layout via `LegalLayout` component wrapper

### Component Architecture

#### LegalLayout Component
Wrapper component for all legal pages providing:
- Fixed navigation header (flat design, no shadows)
- Footer with links to all legal pages
- Contact form modal integration
- Responsive breakpoints (mobile/desktop)
- Print-friendly styles

#### Legal Page Pattern
Each legal page follows this structure:
```vue
<script setup>
import LegalLayout from '../components/LegalLayout.vue'
</script>

<template>
  <LegalLayout title="Page Title">
    <!-- Content here -->
  </LegalLayout>
</template>
```

### Styling Architecture
- Tailwind CSS for utility classes
- Custom color variables in `tailwind.config.js`
- Component-scoped styles for complex layouts
- Design principles: Flat UI, no shadows on primary elements, ink on white with the katsu accent

### Build & Deployment
- Vite handles bundling with automatic code splitting
- Firebase Hosting serves from `dist/` directory
- Cache headers configured: JS/CSS (1 year), images (1 day)
- SPA routing handled via Firebase rewrites

## Legal Content Management

Legal documents exist in two forms:
1. **Markdown source**: `/src/legal/[document-name].md` - Raw content
2. **Vue component**: `/src/views/[DocumentName].vue` - Styled presentation

When updating legal content:
- Edit markdown for content changes
- Edit Vue component for styling/layout changes
- Maintain consistency across all legal pages using established patterns

**CertMatrix is the exception.** It has no app page here: the home card links out to certmatrix.io (like BCP Flow) and `/apps/certmatrix` redirects there. Only its legal documents are served by this site. Its three documents (`/src/legal/certmatrix-*.md`: terms, privacy, DPA) are the single source: `/src/views/apps/certmatrix/CertMatrixLegal.vue` renders the markdown directly (`?raw` + `marked`) at `/apps/certmatrix/terms|privacy|dpa`. Edit the `.md` only. Keep the header lines (Effective Date, Last Updated, Version) in the existing format; the view parses them. The CertMatrix app records agreement to a dated version, so a material change also needs the `TERMS_VERSION` bump in the certvault repo (publish here first).

## Contact Information
- Support email: support@pomkatsu.com
- Company: Pomkatsu LLC (Texas)