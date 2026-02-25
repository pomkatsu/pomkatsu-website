# Multi-Domain & SEO Playbook

How pomkatsu-website serves multiple app domains from a single repo, single Netlify deploy, with per-domain branding and SEO.

## Architecture Overview

```
                    pomkatsu-website (single repo)
                              |
                    Netlify (single site)
                    /         |          \
          pomkatsu.com   astralapp.love   [future-app.domain]
              |              |                  |
          HomePage       Astral.vue         AppPage.vue
          (default)    (domain config)     (domain config)
```

**How it works:**

1. **Domain config** (`src/config/domains.js`) maps hostnames to app configurations
2. **Vue Router** checks `window.location.hostname` at startup and builds routes accordingly
   - App domains: `/` shows the app landing page, legal routes available, catch-all → `/`
   - pomkatsu.com: all routes available (homepage, all app pages, legal pages)
3. **Pre-rendering** (`vite-plugin-prerender`) bakes correct meta tags into static HTML at build time (for pomkatsu.com routes)
4. **Netlify Edge Functions** override meta tags for custom domains (since pre-rendered HTML has pomkatsu.com defaults)
5. **Legal pages** are shared across all domains — they're company-level policies with domain-aware theming

**Why this approach:**
- One repo, one deploy, one build
- No framework migration needed (stays Vue 3 SPA)
- Pre-rendering gives SEO benefits of SSG without leaving the SPA architecture
- Edge functions handle the domain-specific layer at the CDN level (free on Netlify)
- Scales to N apps by adding config entries

---

## Adding a New App Domain

### Prerequisites

- App landing page already exists at `/apps/{app-name}` in the pomkatsu-website repo
- Domain purchased and DNS accessible
- OG image created (1200x630px recommended)

### Step 1: Register and Configure Domain

1. Purchase domain from registrar (Namecheap, Cloudflare, etc.)
2. In **Netlify dashboard** → your site → **Domain management** → **Add custom domain**
3. Configure DNS:
   - **Option A (recommended):** Point nameservers to Netlify
   - **Option B:** Add CNAME record pointing to your Netlify site URL
4. SSL auto-provisions via Let's Encrypt (wait a few minutes)

### Step 2: Add Domain Config Entry

**File:** `src/config/domains.js`

Add a new entry to the `domainConfigs` map:

```js
'yourdomain.com': {
  appId: 'your-app',           // Unique identifier, matches route path
  name: 'Your App',            // Display name for nav logo
  homeComponent: () => import('../views/apps/YourApp.vue'),
  navLogo: 'Your App',         // Text shown in nav when on this domain
  themeColor: '#HEX_COLOR',    // Theme color for meta tags
},
```

### Step 3: Add SEO Meta to App Page

**File:** `src/views/apps/YourApp.vue`

Add these imports and calls to the `<script setup>` block:

```js
import { useHead, useSeoMeta } from '@unhead/vue'

// Per-route meta tags
useSeoMeta({
  title: 'Your App — Tagline Here',
  description: 'One-sentence description for search results (150-160 chars).',
  ogTitle: 'Your App — Tagline Here',
  ogDescription: 'Shorter description for social shares (70-100 chars).',
  ogImage: '/app-logos/your-app/og-image.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

// JSON-LD structured data
useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Your App',
      operatingSystem: 'iOS, Android',
      applicationCategory: 'LifestyleApplication',  // See schema.org for categories
      description: 'Description for search engines.',
      offers: {
        '@type': 'Offer',
        price: '0',              // Free to download
        priceCurrency: 'USD',
      },
      author: {
        '@type': 'Organization',
        name: 'Pomkatsu',
        url: 'https://pomkatsu.com',
      },
    }),
  }],
})

// Apple Smart App Banner (add once you have the App Store ID)
useHead({
  meta: [
    { name: 'apple-itunes-app', content: 'app-id=YOUR_APP_STORE_ID' },
  ],
})
```

### Step 4: Add Domain Meta to Edge Function

**File:** `netlify/edge-functions/inject-meta.js`

Add a new entry to the `domainMeta` map:

```js
'yourdomain.com': {
  title: 'Your App — Tagline Here',
  description: 'Description for social previews.',
  ogImage: 'https://yourdomain.com/app-logos/your-app/og-image.png',
  themeColor: '#HEX_COLOR',
  canonical: 'https://yourdomain.com/',
},
```

### Step 5: Add to Sitemap

**File:** `public/sitemap.xml`

The main sitemap covers pomkatsu.com routes. For custom domains, the edge function at `/robots.txt` serves a domain-specific sitemap reference. Add the domain to the robots edge function:

**File:** `netlify/edge-functions/robots.js`

Add your domain to the hostname switch/map that generates the domain-specific robots.txt + sitemap reference.

### Step 6: Add to Pre-render Routes

**File:** `vite.config.js`

The app page route should already be in the pre-render list (e.g., `/apps/your-app`). If not, add it:

```js
prerender({
  routes: [
    '/', '/apps/astral', '/apps/easytranslate', '/apps/foodtally',
    '/apps/your-app',  // <-- add here
    '/privacy', '/terms', '/cookies', '/dmca', '/aup', '/eula',
    '/delete-account',
  ],
}),
```

### Step 7: Create OG Image

Place your OG image at `public/app-logos/your-app/og-image.png`:
- **Size:** 1200x630px (optimal for Twitter/Facebook/LinkedIn)
- **Content:** App logo/icon + app name + short tagline on branded background
- **Format:** PNG or JPG, under 1MB
- **Test:** Use https://www.opengraph.xyz/ after deploying

---

## SEO Checklist Per App

Use this checklist when adding or auditing SEO for any app page:

### Meta Tags (via `useSeoMeta()`)
- [ ] `title` — 50-60 characters, includes app name and primary keyword
- [ ] `description` — 150-160 characters, includes CTA and differentiator
- [ ] `ogTitle` — can match title or be shorter for social
- [ ] `ogDescription` — 70-100 characters, compelling for social feeds
- [ ] `ogImage` — 1200x630px, absolute URL for custom domains
- [ ] `ogType` — `website` for landing pages
- [ ] `twitterCard` — `summary_large_image`

### Structured Data (via `useHead()`)
- [ ] `SoftwareApplication` JSON-LD with name, OS, category, description, offers, author
- [ ] Validate at https://validator.schema.org/ after deploying

### Apple Smart App Banner
- [ ] `apple-itunes-app` meta tag with correct app-id
- [ ] Only added after app is live on App Store

### Edge Function Meta
- [ ] Domain entry in `inject-meta.js` with title, description, ogImage, themeColor, canonical
- [ ] All URLs in edge function use `https://yourdomain.com/` (absolute)

### Sitemap & Robots
- [ ] Route appears in `public/sitemap.xml` (for pomkatsu.com)
- [ ] Domain has entry in `robots.js` edge function

### Pre-rendering
- [ ] Route appears in `vite.config.js` pre-render list
- [ ] After build, check `dist/apps/your-app/index.html` has correct meta tags baked in

---

## Testing Checklist

### Local Testing

1. **Hostname simulation** — Add to `/etc/hosts`:
   ```
   127.0.0.1 yourdomain.local
   ```
   Then visit `http://yourdomain.local:5173`

2. **Alternatively** — Temporarily add `'localhost'` to `domainConfigs` pointing to your app config

3. **Verify routing:**
   - `yourdomain.local:5173/` → shows app landing page
   - `yourdomain.local:5173/privacy` → shows legal page with app theming
   - `localhost:5173/` → still shows pomkatsu homepage (unchanged)

### Post-Deploy Testing

1. **Landing page** — Visit `yourdomain.com` → app landing page loads at root
2. **Legal pages** — Visit `yourdomain.com/privacy` → correct theming
3. **OG preview** — Paste `yourdomain.com` into:
   - https://www.opengraph.xyz/ (general preview)
   - https://cards-dev.twitter.com/validator (Twitter cards)
   - Facebook Sharing Debugger
4. **Lighthouse** — Run Lighthouse on `yourdomain.com`, check LCP/FCP scores
5. **Robots** — Visit `yourdomain.com/robots.txt` → domain-specific content
6. **Structured data** — Google Rich Results Test: https://search.google.com/test/rich-results
7. **Smart Banner** — Open `yourdomain.com` in iOS Safari → banner should appear

---

## OG Image Requirements

| Property | Value |
|----------|-------|
| Size | 1200x630px |
| Format | PNG or JPG |
| Max file size | 1MB |
| Location | `public/app-logos/{app-id}/og-image.png` |
| Content | App icon + name + tagline on branded background |

For custom domains, the edge function rewrites the `og:image` meta tag to use the absolute URL (`https://yourdomain.com/app-logos/...`).

---

## File Reference

| File | Purpose |
|------|---------|
| `src/config/domains.js` | Hostname → app config map |
| `src/router/index.js` | Domain-aware route building |
| `src/main.js` | `@unhead/vue` initialization |
| `src/views/apps/*.vue` | App pages with `useSeoMeta()` + JSON-LD |
| `src/components/LegalLayout.vue` | Domain-aware legal page theming |
| `vite.config.js` | Pre-render route list |
| `public/sitemap.xml` | Sitemap for pomkatsu.com routes |
| `netlify.toml` | Edge function registration |
| `netlify/edge-functions/inject-meta.js` | Per-domain meta tag injection |
| `netlify/edge-functions/robots.js` | Per-domain robots.txt |

---

## Appendix: Domain-Aware Legal Page Theming

`LegalLayout.vue` detects the hostname via `getDomainConfig()` and applies different visual themes:

- **pomkatsu.com** — Cream/brown theme (default)
- **astralapp.love** — Cosmic dark purple theme
- **Future domains** — Each domain config can specify a `theme` property that maps to Tailwind color classes

The legal content itself is identical across domains (company-level policies). Only the nav, footer, and background colors change.

## Appendix: Pre-rendering vs Edge Functions

These are **complementary, not competing**:

| Concern | Pre-rendering handles | Edge function handles |
|---------|----------------------|---------------------|
| pomkatsu.com meta tags | Yes (baked into HTML) | No (passes through) |
| Custom domain meta tags | No (pre-renders as pomkatsu.com) | Yes (rewrites at CDN) |
| Social sharing previews | pomkatsu.com routes | Custom domain routes |
| Googlebot indexing | Both (pre-rendered HTML for all routes) | Custom domain canonicals |
| Page load speed (LCP) | Yes (HTML has content, no JS wait) | No effect |

**Note:** Pre-rendering is not yet configured. `vite-plugin-prerender` (the most common option) depends on Puppeteer v1.20 (2019) which has many deprecated/insecure dependencies. When a modern pre-rendering solution is available, add it to `vite.config.js`. In the meantime:
- Googlebot renders JavaScript and will see `@unhead/vue` meta tags
- Edge functions handle social media crawlers for custom domains
- The sitemap tells Google about all pages
