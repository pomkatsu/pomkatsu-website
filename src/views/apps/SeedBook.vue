<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import AppLayout from '../../components/apps/AppLayout.vue'
import AppStoreButtons from '../../components/apps/AppStoreButtons.vue'

// Screenshots — placeholders until we capture real app screenshots via Maestro.
// To update: drop real screenshots at /public/app-logos/seedbook/screenshot-*.webp
const screenshots = [
  { src: '/app-logos/seedbook/screenshot-home.webp', alt: 'Home screen', label: 'Home · at a glance' },
  { src: '/app-logos/seedbook/screenshot-catalog.webp', alt: 'Seed catalog', label: 'Catalog · every variety you grow' },
  { src: '/app-logos/seedbook/screenshot-harvest.webp', alt: 'Harvest journal', label: 'Harvest · log and weigh' },
  { src: '/app-logos/seedbook/screenshot-garden.webp', alt: 'Garden planner', label: 'Planner · beds and plots' },
]

// Lightbox state
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

function openLightbox(index) {
  lightboxIndex.value = index
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}

function lightboxPrev() {
  lightboxIndex.value = (lightboxIndex.value - 1 + screenshots.length) % screenshots.length
}

function lightboxNext() {
  lightboxIndex.value = (lightboxIndex.value + 1) % screenshots.length
}

function onLightboxKeydown(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  else if (e.key === 'ArrowLeft') lightboxPrev()
  else if (e.key === 'ArrowRight') lightboxNext()
}

onMounted(() => {
  window.addEventListener('keydown', onLightboxKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onLightboxKeydown)
})

useSeoMeta({
  title: 'SeedBook — A field guide for the seeds you save',
  description:
    'Track your seeds, harvests, and garden plans in one place. Scan packets, log yields, and plan your growing season. Built for home gardeners who keep notebooks.',
  ogTitle: 'SeedBook — A field guide for the seeds you save',
  ogDescription:
    'Scan seed packets, log harvests, and plan beds by frost date. A botanical journal for home gardeners.',
  ogImage: '/app-logos/seedbook/og-image.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/app-logos/seedbook/favicon.png' },
  ],
  meta: [
    { name: 'theme-color', content: '#1B4332' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'SeedBook',
        operatingSystem: 'iOS, Android',
        applicationCategory: 'LifestyleApplication',
        genre: 'Gardening',
        description:
          'Digital garden journal for home gardeners. Track seeds, harvests, plant health, and frost-aware planting schedules.',
        offers: {
          '@type': 'Offer',
          price: '19.99',
          priceCurrency: 'USD',
        },
        author: {
          '@type': 'Organization',
          name: 'Pomkatsu',
          url: 'https://pomkatsu.com',
        },
      }),
    },
  ],
})

// Feature list — edit text here, not in template
const features = [
  {
    title: 'Seed Catalog',
    latin: 'Semina · your archive',
    body: 'Scan a packet or add by hand. Heirloom, hybrid, open-pollinated — every variety logged with germination rates, sow dates, and source.',
    icon: 'catalog',
  },
  {
    title: 'Harvest Journal',
    latin: 'Messis · every pick',
    body: 'Log every harvest with weight, date, and photo. See total yield by variety, bed, and season. Your best years become data, not memories.',
    icon: 'harvest',
  },
  {
    title: 'Garden Planner',
    latin: 'Hortus · your plots',
    body: 'Map raised beds, containers, and in-ground plots. Track what is where, when it went in, and what comes next in the rotation.',
    icon: 'garden',
  },
  {
    title: 'Growing Zone',
    latin: 'Regio · your climate',
    body: 'Enter your zip code once. Frost dates, sow windows, and regional advice follow from there. Reschedule when the weather turns.',
    icon: 'zone',
  },
  {
    title: 'Plant Health',
    latin: 'Salus · diagnosis',
    body: 'Snap a photo of a struggling plant. Get a likely cause and a plan to get it healthy again. For hobbyist use — not a substitute for real horticultural advice.',
    icon: 'health',
  },
  {
    title: 'Private by Default',
    latin: 'Privatum · your data',
    body: 'Your journal stays yours. Export everything as CSV whenever you want. Delete your account in two taps.',
    icon: 'private',
  },
]
</script>

<template>
  <AppLayout variant="seedbook">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-seedbook-parch">
      <!-- Clean parchment bg; no pattern. Decoration comes from typography and the hero photo. -->
      <!-- Two large corner ornaments (SVG) for a vintage field-guide feel without competing with text -->
      <svg
        class="absolute top-6 right-6 w-20 h-20 text-seedbook-sage/15 pointer-events-none hidden lg:block"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        stroke-width="0.8"
      >
        <circle cx="50" cy="50" r="48" />
        <circle cx="50" cy="50" r="36" />
        <path d="M50 2 L50 98 M2 50 L98 50" stroke-dasharray="2 4" />
      </svg>
      <svg
        class="absolute bottom-10 left-10 w-16 h-16 text-seedbook-clay/15 pointer-events-none hidden lg:block"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        stroke-width="0.8"
      >
        <path d="M50 10 Q20 40 50 90 Q80 40 50 10 Z" />
        <path d="M50 10 L50 90" />
      </svg>

      <div class="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-14 pb-20 md:pt-20 md:pb-28">
        <div class="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-16 items-center">
          <!-- Left: text -->
          <div class="order-2 lg:order-1">
            <!-- Metadata line -->
            <div class="flex items-center gap-3 mb-8">
              <span class="h-px w-10 bg-seedbook-clay"></span>
              <span class="font-mono text-[11px] tracking-[0.18em] uppercase text-seedbook-clay">
                est. 2026 · botanical journal
              </span>
            </div>

            <!-- Logo mark + brand -->
            <div class="flex items-center gap-4 mb-10">
              <img
                src="/app-logos/seedbook/seedbook-icon.png"
                alt="SeedBook"
                class="w-16 h-16 rounded-2xl shadow-sm ring-1 ring-seedbook-parch-border"
              />
              <h2 class="font-display text-3xl font-semibold text-seedbook-forest tracking-tight">
                SeedBook
              </h2>
            </div>

            <h1
              class="font-display text-5xl sm:text-6xl lg:text-[5.25rem] font-semibold text-seedbook-forest leading-[0.98] tracking-tight mb-8"
            >
              A field guide<br />
              for the seeds<br />
              <span class="italic text-seedbook-clay">you save.</span>
            </h1>

            <p
              class="text-lg sm:text-xl text-seedbook-forest/75 leading-relaxed mb-10 max-w-xl font-sans"
            >
              Scan seed packets, log every harvest, and plan your beds by frost date.
              A botanical journal for home gardeners who keep notebooks.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 sm:items-stretch">
              <AppStoreButtons
                app-store-url="https://apps.apple.com/us/app/seedbook/id0000000000"
                play-store-url="#"
                variant="seedbook"
              />
            </div>

            <!-- Fine print -->
            <p class="mt-6 font-mono text-[11px] tracking-wider uppercase text-seedbook-sage">
              Free to try · 3-day trial on annual · no ads, ever
            </p>
          </div>

          <!-- Right: hero composition -->
          <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-md lg:max-w-lg">
              <!-- Decorative parch frame behind image -->
              <div
                class="absolute -inset-4 lg:-inset-6 bg-seedbook-parch-warm rounded-sm rotate-[-1.2deg] border border-seedbook-parch-border shadow-[0_20px_60px_-20px_rgba(27,67,50,0.18)]"
              ></div>
              <img
                src="/app-logos/seedbook/hero-cover.jpg"
                alt="Seedlings in starter trays"
                class="relative w-full h-auto object-cover rounded-sm grayscale-[0.08] contrast-[1.02]"
                style="aspect-ratio: 4/5;"
              />
              <!-- Small metadata card overlay -->
              <div
                class="hidden md:flex absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-seedbook-parch px-5 py-3 shadow-lg border border-seedbook-parch-border rounded-sm"
              >
                <div>
                  <div class="font-mono text-[10px] tracking-[0.18em] uppercase text-seedbook-sage mb-1">
                    Plate No. 01
                  </div>
                  <div class="font-display text-sm italic text-seedbook-forest">
                    Solanum lycopersicum
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Manifesto strip -->
    <section class="border-y border-seedbook-parch-border bg-seedbook-parch-warm">
      <div class="max-w-5xl mx-auto px-6 py-14 sm:py-16 text-center">
        <p
          class="font-display text-2xl sm:text-3xl lg:text-[2.25rem] leading-snug text-seedbook-forest tracking-tight"
        >
          Built for gardeners who keep notebooks.
          <span class="text-seedbook-forest/60">Track what you plant, what you harvest, and what the weather did to it all.</span>
        </p>
      </div>
    </section>

    <!-- Feature grid -->
    <section class="py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <!-- Section label -->
        <div class="flex items-baseline gap-4 mb-14">
          <span class="font-mono text-[11px] tracking-[0.18em] uppercase text-seedbook-clay">
            § 01
          </span>
          <h2 class="font-display text-4xl sm:text-5xl font-semibold text-seedbook-forest tracking-tight">
            Everything you need. Nothing you don't.
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-seedbook-parch-border">
          <div
            v-for="(f, i) in features"
            :key="i"
            class="relative group p-8 sm:p-10 border-r border-b border-seedbook-parch-border"
          >
            <!-- Clay accent bar, slides out from left on hover -->
            <span
              class="absolute left-0 top-8 bottom-8 w-[2px] bg-seedbook-clay scale-y-0 origin-center group-hover:scale-y-100 transition-transform duration-500 ease-out"
            ></span>

            <!-- Latin metadata -->
            <div class="font-mono text-[10px] tracking-[0.18em] uppercase text-seedbook-clay mb-4">
              {{ f.latin }}
            </div>

            <!-- Icon (inline SVG per feature to avoid adding a dep) -->
            <div class="mb-6 text-seedbook-forest">
              <!-- catalog -->
              <svg v-if="f.icon === 'catalog'" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
              </svg>
              <!-- harvest -->
              <svg v-else-if="f.icon === 'harvest'" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5 9 6l3.75 4.5L15.75 6l4.5 7.5M3.75 13.5v6.75h16.5V13.5M3.75 13.5h16.5"/>
              </svg>
              <!-- garden -->
              <svg v-else-if="f.icon === 'garden'" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5M3 6.75v10.5M21 6.75v10.5M8.25 6.75v10.5M15.75 6.75v10.5"/>
              </svg>
              <!-- zone -->
              <svg v-else-if="f.icon === 'zone'" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
              </svg>
              <!-- health -->
              <svg v-else-if="f.icon === 'health'" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/>
              </svg>
              <!-- private -->
              <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
              </svg>
            </div>

            <h3 class="font-display text-2xl font-semibold text-seedbook-forest mb-3 tracking-tight">
              {{ f.title }}
            </h3>
            <p class="text-[15px] leading-relaxed text-seedbook-forest/70">
              {{ f.body }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshots gallery -->
    <section class="relative py-20 md:py-28 bg-seedbook-parch-warm border-y border-seedbook-parch-border overflow-hidden">

      <div class="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div class="flex items-baseline gap-4 mb-14">
          <span class="font-mono text-[11px] tracking-[0.18em] uppercase text-seedbook-clay">
            § 02
          </span>
          <h2 class="font-display text-4xl sm:text-5xl font-semibold text-seedbook-forest tracking-tight">
            Plates from the field.
          </h2>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          <button
            v-for="(shot, i) in screenshots"
            :key="i"
            type="button"
            class="group relative text-left focus:outline-none focus:ring-2 focus:ring-seedbook-clay focus:ring-offset-4 focus:ring-offset-seedbook-parch-warm rounded-sm"
            @click="openLightbox(i)"
          >
            <div
              class="relative aspect-[9/19] overflow-hidden bg-seedbook-parch border border-seedbook-parch-border transition-transform duration-500 group-hover:scale-[1.015] flex items-center justify-center"
            >
              <!-- Placeholder content shown when screenshot image is missing -->
              <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <svg class="w-10 h-10 text-seedbook-sage/30 mb-3" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24">
                  <rect x="6" y="2" width="12" height="20" rx="2" />
                  <path d="M10 18h4" />
                </svg>
                <div class="font-mono text-[9px] tracking-[0.18em] uppercase text-seedbook-sage/60 mb-2">
                  Screenshot
                </div>
                <div class="font-display text-sm italic text-seedbook-forest/60">
                  {{ shot.label.split('·')[0].trim() }}
                </div>
              </div>
              <img
                :src="shot.src"
                :alt="shot.alt"
                class="relative w-full h-full object-cover"
                @error="$event.target.style.visibility='hidden'"
              />
            </div>
            <div class="mt-4 flex items-baseline justify-between gap-3">
              <div class="font-mono text-[10px] tracking-[0.18em] uppercase text-seedbook-clay">
                Plate {{ String(i + 1).padStart(2, '0') }}
              </div>
              <div class="font-display text-sm text-seedbook-forest italic text-right">
                {{ shot.label }}
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="py-20 md:py-28">
      <div class="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <div class="flex items-baseline gap-4 mb-14">
          <span class="font-mono text-[11px] tracking-[0.18em] uppercase text-seedbook-clay">
            § 03
          </span>
          <h2 class="font-display text-4xl sm:text-5xl font-semibold text-seedbook-forest tracking-tight">
            One price. Everything.
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <!-- Monthly -->
          <div class="relative p-10 border border-seedbook-parch-border bg-seedbook-parch">
            <div class="font-mono text-[10px] tracking-[0.18em] uppercase text-seedbook-sage mb-6">
              Monthly
            </div>
            <div class="mb-6">
              <span class="font-display text-6xl font-semibold text-seedbook-forest tracking-tight">$19.99</span>
              <span class="font-mono text-sm text-seedbook-forest/60 ml-2">/ month</span>
            </div>
            <p class="text-[15px] text-seedbook-forest/70 leading-relaxed mb-8">
              Full access, billed monthly. Cancel anytime.
            </p>
            <ul class="space-y-3 text-[14px] text-seedbook-forest/80">
              <li class="flex gap-3">
                <span class="text-seedbook-clay font-mono">·</span>
                Unlimited seed catalog
              </li>
              <li class="flex gap-3">
                <span class="text-seedbook-clay font-mono">·</span>
                Unlimited harvest entries
              </li>
              <li class="flex gap-3">
                <span class="text-seedbook-clay font-mono">·</span>
                AI seed scanning & plant health
              </li>
              <li class="flex gap-3">
                <span class="text-seedbook-clay font-mono">·</span>
                All future features
              </li>
            </ul>
          </div>

          <!-- Annual -->
          <div class="relative p-10 border-2 border-seedbook-clay bg-seedbook-parch">
            <div class="absolute -top-3 left-10 bg-seedbook-parch px-3">
              <span class="font-mono text-[10px] tracking-[0.18em] uppercase text-seedbook-clay">
                Recommended · save 25%
              </span>
            </div>
            <div class="font-mono text-[10px] tracking-[0.18em] uppercase text-seedbook-sage mb-6">
              Annual
            </div>
            <div class="mb-6">
              <span class="font-display text-6xl font-semibold text-seedbook-forest tracking-tight">$179.99</span>
              <span class="font-mono text-sm text-seedbook-forest/60 ml-2">/ year</span>
            </div>
            <p class="text-[15px] text-seedbook-forest/70 leading-relaxed mb-8">
              Works out to about $15 a month. 3-day free trial on first sign-up.
            </p>
            <ul class="space-y-3 text-[14px] text-seedbook-forest/80">
              <li class="flex gap-3">
                <span class="text-seedbook-clay font-mono">·</span>
                Everything in Monthly
              </li>
              <li class="flex gap-3">
                <span class="text-seedbook-clay font-mono">·</span>
                3-day free trial
              </li>
              <li class="flex gap-3">
                <span class="text-seedbook-clay font-mono">·</span>
                Two months free
              </li>
              <li class="flex gap-3">
                <span class="text-seedbook-clay font-mono">·</span>
                Priority support
              </li>
            </ul>
          </div>
        </div>

        <p class="mt-8 font-mono text-[11px] tracking-wider uppercase text-seedbook-sage text-center">
          Restore purchases from within the app · Family Sharing supported
        </p>
      </div>
    </section>

    <!-- Trust strip -->
    <section class="border-t border-seedbook-parch-border">
      <div class="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">
        <div>
          <div class="font-mono text-[10px] tracking-[0.18em] uppercase text-seedbook-clay mb-2">
            Your data
          </div>
          <div class="font-display text-xl text-seedbook-forest italic">Exportable, anytime.</div>
        </div>
        <div class="md:border-x md:border-seedbook-parch-border md:px-6">
          <div class="font-mono text-[10px] tracking-[0.18em] uppercase text-seedbook-clay mb-2">
            Monetization
          </div>
          <div class="font-display text-xl text-seedbook-forest italic">No ads, no resale.</div>
        </div>
        <div>
          <div class="font-mono text-[10px] tracking-[0.18em] uppercase text-seedbook-clay mb-2">
            Built by
          </div>
          <div class="font-display text-xl text-seedbook-forest italic">One independent maker.</div>
        </div>
      </div>
    </section>

    <!-- CTA footer band -->
    <section class="relative bg-seedbook-forest-dark overflow-hidden">
      <div class="relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
        <div class="flex items-center justify-center gap-3 mb-8">
          <span class="h-px w-10 bg-seedbook-clay-light"></span>
          <span class="font-mono text-[11px] tracking-[0.18em] uppercase text-seedbook-clay-light">
            § fin
          </span>
          <span class="h-px w-10 bg-seedbook-clay-light"></span>
        </div>
        <h2
          class="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-seedbook-parch tracking-tight leading-[1.05] mb-10"
        >
          Catalog<br class="sm:hidden" /> your garden.
        </h2>
        <p class="text-lg text-seedbook-parch/70 mb-12 max-w-xl mx-auto">
          The notebook you'll actually keep.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center sm:items-stretch">
          <AppStoreButtons
            app-store-url="https://apps.apple.com/us/app/seedbook/id0000000000"
            play-store-url="#"
            variant="seedbook"
          />
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center"
        @click.self="closeLightbox"
      >
        <div class="absolute inset-0 bg-seedbook-forest-dark/95" @click="closeLightbox"></div>

        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-seedbook-parch/10 hover:bg-seedbook-parch/20 text-seedbook-parch transition-colors"
          aria-label="Close lightbox"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          @click="lightboxPrev"
          class="absolute left-3 sm:left-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-seedbook-parch/10 hover:bg-seedbook-parch/20 text-seedbook-parch transition-colors"
          aria-label="Previous image"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <img
          :src="screenshots[lightboxIndex].src"
          :alt="screenshots[lightboxIndex].alt"
          class="relative z-[1] max-h-[85vh] max-w-[90vw] object-contain rounded-sm"
          @error="$event.target.style.display='none'"
        />

        <button
          @click="lightboxNext"
          class="absolute right-3 sm:right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-seedbook-parch/10 hover:bg-seedbook-parch/20 text-seedbook-parch transition-colors"
          aria-label="Next image"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 font-mono text-[11px] tracking-wider uppercase text-seedbook-parch/70">
          Plate {{ String(lightboxIndex + 1).padStart(2, '0') }} / {{ String(screenshots.length).padStart(2, '0') }}
        </div>
      </div>
    </Teleport>
  </AppLayout>
</template>

<style scoped>
/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Optical kerning on all display serif text */
.font-display {
  font-optical-sizing: auto;
}

/* Section fade-in (gentle, no bounce) */
section > * {
  animation: fadeInUp 0.7s ease-out both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
