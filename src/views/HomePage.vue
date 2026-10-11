<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'
import ContactForm from '../components/ContactForm.vue'

useSeoMeta({
  title: 'Pomkatsu — Products designed and built by Brandon Ore',
  description: 'Pomkatsu is the one-person studio of Brandon Ore, a product engineer in Texas. Seven products for iOS, Android and the web, designed, built and shipped by one person.',
  ogTitle: 'Pomkatsu — Products designed and built by Brandon Ore',
  ogDescription: 'Seven products for iOS, Android and the web, designed, built and shipped by one person.',
  ogImage: '/og-image.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Pomkatsu',
      url: 'https://pomkatsu.com',
      logo: 'https://pomkatsu.com/pomkatsu-logo.webp',
      description: 'The one-person product studio of Brandon Ore. Apps for iOS, Android and the web.',
      founder: {
        '@type': 'Person',
        name: 'Brandon Ore',
        jobTitle: 'Product engineer',
        url: 'https://github.com/brandonore',
      },
    }),
  }, {
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Pomkatsu',
      url: 'https://pomkatsu.com',
    }),
  }],
})

const githubUrl = 'https://github.com/brandonore'
const emailUrl = 'mailto:support@pomkatsu.com'
const year = new Date().getFullYear()

// Same marks as AppStoreButtons.vue
const appleMark = 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'
const playMark = 'M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z'

// Every product, in the order they sit on the shelf under the hero
const shelf = [
  { name: 'MySeedStory', icon: '/app-logos/myseedstory/myseedstory-icon.webp', href: '#myseedstory' },
  { name: 'EasyTranslate AI', icon: '/app-logos/easytranslate/easytranslateai.webp', href: '#easytranslate' },
  { name: 'CertMatrix', icon: '/app-logos/certmatrix/certmatrix-logo.png', href: '#certmatrix' },
  { name: 'BentoBook', icon: '/app-logos/bentobook-logo.webp', href: '#bentobook', padded: true },
  { name: 'BCP Flow', icon: '/app-logos/bcpflow/bcpflow-logo.svg', href: '#more' },
  { name: 'Destina', icon: '/app-logos/astral/astral-icon-square.webp', href: '#more' },
  { name: 'FoodTally', icon: '/app-logos/foodtally/logo-tally.webp', href: '#more' },
]

// The products without a room of their own. `to` is a page on this site, `href` leaves it.
const more = [
  {
    name: 'BCP Flow',
    icon: '/app-logos/bcpflow/bcpflow-logo.svg',
    href: 'https://bcpflow.com',
    blurb: 'Business continuity plans for MSPs, with client intake by magic link.',
    stack: 'React, Supabase, Tailwind',
    live: true,
  },
  {
    name: 'Destina',
    icon: '/app-logos/astral/astral-icon-square.webp',
    href: 'https://destina.love',
    blurb: 'AI soulmate portraits, personality insights and love compatibility.',
    stack: 'Flutter, Firebase, RevenueCat',
    live: false,
  },
  {
    name: 'FoodTally',
    icon: '/app-logos/foodtally/logo-tally.webp',
    to: '/apps/foodtally',
    blurb: 'Calorie tracking by voice, text or photo.',
    stack: 'Expo, Supabase, RevenueCat',
    live: false,
  },
]

const showContactForm = ref(false)

const openContactForm = () => {
  showContactForm.value = true
}

const closeContactForm = () => {
  showContactForm.value = false
}

// The scroll-world clip plays only while it is on screen, and not at all for
// visitors who ask for reduced motion (they keep the poster frame).
const clip = ref(null)
let clipObserver = null

onMounted(() => {
  if (!clip.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  clipObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) clip.value.play().catch(() => {})
    else clip.value.pause()
  }, { threshold: 0.25 })
  clipObserver.observe(clip.value)
})

onUnmounted(() => {
  clipObserver?.disconnect()
})
</script>

<template>
  <div class="home min-h-screen bg-secondary text-primary font-sans antialiased">
    <header class="mx-auto max-w-[1200px] px-5 sm:px-8">
      <nav class="flex items-center justify-between h-20" aria-label="Main">
        <router-link to="/" class="flex items-center gap-3">
          <span class="grid place-items-center w-10 h-10 rounded-xl bg-cream"><img src="/pomkatsu-mascot.webp" alt="" class="w-8 h-8 object-contain" /></span>
          <span class="font-brand text-[1.35rem] font-bold tracking-tight">Pomkatsu</span>
        </router-link>
        <div class="flex items-center gap-1 text-[15px]">
          <a href="#work" class="hidden sm:block px-3 py-2 rounded-full hover:bg-secondary-light">Work</a>
          <a href="#about" class="hidden sm:block px-3 py-2 rounded-full hover:bg-secondary-light">About</a>
          <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="hidden min-[420px]:block px-3 py-2 rounded-full hover:bg-secondary-light">GitHub</a>
          <a :href="emailUrl" class="ml-2 px-4 py-2 rounded-full bg-primary text-secondary font-medium whitespace-nowrap hover:bg-primary-dark">Email Brandon</a>
        </div>
      </nav>
    </header>

    <main>
      <!-- Hero: the claim, the mascot, then all seven icons as proof -->
      <section class="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div class="grid lg:grid-cols-12 gap-x-8 gap-y-10 items-center pt-8 sm:pt-14 pb-12 sm:pb-16">
          <div class="lg:col-span-8">
            <h1 class="text-balance font-brand font-bold tracking-[-0.02em] leading-[1] text-[clamp(2.25rem,6.2vw,5.1rem)] max-w-[16ch]">Seven products, designed and built by one person.</h1>
            <p class="mt-7 max-w-[35rem] text-lg leading-relaxed text-primary-light">Pomkatsu is the studio of Brandon Ore, a product engineer in Texas. I take each product from an empty repo to a live release: interface, backend, billing and store review. Five are live today and two are in development.</p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="#work" class="px-6 py-3 rounded-full bg-katsu text-primary-dark font-semibold hover:bg-katsu-dark">See the work</a>
              <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-full border border-primary font-semibold hover:bg-secondary-light">View GitHub</a>
            </div>
          </div>
          <div class="lg:col-span-4 flex justify-center lg:justify-end">
            <div class="grid place-items-center w-[230px] sm:w-[290px] lg:w-[340px] aspect-square rounded-full bg-cream">
              <img src="/pomkatsu-mascot.webp" alt="The Pomkatsu mascot, a husky puppy carrying a katsu cutlet" width="680" height="700" class="w-[74%] h-auto" fetchpriority="high" />
            </div>
          </div>
        </div>

        <ul class="grid grid-cols-4 sm:grid-cols-7 gap-x-2 gap-y-6 rounded-[28px] bg-secondary-light px-3 sm:px-6 py-7 text-center text-[12px] leading-tight sm:text-sm">
          <li v-for="app in shelf" :key="app.name">
            <a :href="app.href" class="group flex flex-col items-center gap-2">
              <span class="app-icon w-14 h-14 sm:w-16 sm:h-16" :class="app.padded ? 'bg-secondary p-2' : ''"><img :src="app.icon" alt="" :class="app.padded ? 'object-contain' : 'object-cover'" /></span>
              <span class="group-hover:underline underline-offset-4">{{ app.name }}</span>
            </a>
          </li>
        </ul>
      </section>

      <!-- Featured work: each product is a room in its own colours -->
      <section id="work" class="mx-auto max-w-[1200px] px-5 sm:px-8 pt-14 sm:pt-20 scroll-mt-6">
        <h2 class="mb-8 font-brand text-3xl sm:text-[2.6rem] font-bold tracking-[-0.025em] leading-none">Start with these four</h2>

        <!-- MySeedStory -->
        <article id="myseedstory" class="rounded-[28px] bg-myseedstory-parch-warm text-myseedstory-parch-text overflow-hidden scroll-mt-6">
          <div class="grid lg:grid-cols-12 gap-x-8 px-6 sm:px-10 lg:px-14 pt-10 lg:pt-14">
            <div class="lg:col-span-6 pb-10 lg:pb-14">
              <div class="flex items-center gap-4">
                <span class="app-icon w-14 h-14"><img src="/app-logos/myseedstory/myseedstory-icon.webp" alt="" class="object-cover" /></span>
                <h3 class="font-brand text-[2.1rem] font-bold tracking-[-0.02em] text-myseedstory-forest">MySeedStory</h3>
              </div>
              <p class="mt-6 text-xl leading-snug font-medium">A field guide for the seeds you save.</p>
              <p class="mt-3 max-w-[30rem] leading-relaxed opacity-80">Scan a seed packet, plan your beds by frost date, and log every harvest. One Expo codebase for iOS and Android, a Fastify API on Postgres, an admin dashboard, and subscriptions through RevenueCat.</p>
              <dl class="mt-7 grid grid-cols-[5.5rem_1fr] gap-y-2 text-[15px]">
                <dt class="opacity-70">Role</dt><dd>Design, engineering and release</dd>
                <dt class="opacity-70">Platform</dt><dd>iOS and Android</dd>
                <dt class="opacity-70">Stack</dt><dd>Expo, TypeScript, Fastify, Drizzle, Postgres</dd>
                <dt class="opacity-70">Status</dt><dd class="flex items-center gap-2.5"><span class="live-dot"></span>Live on both stores</dd>
              </dl>
              <div class="mt-8 flex flex-wrap gap-2.5 text-[15px] font-medium">
                <a href="https://apps.apple.com/us/app/myseedstory-ai-garden-planner/id6761077153" target="_blank" rel="noopener noreferrer" class="store-link bg-myseedstory-forest text-myseedstory-parch-warm hover:bg-myseedstory-forest-light">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path :d="appleMark" /></svg>App Store
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.pomkatsu.seedbook" target="_blank" rel="noopener noreferrer" class="store-link bg-myseedstory-forest text-myseedstory-parch-warm hover:bg-myseedstory-forest-light">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path :d="playMark" /></svg>Google Play
                </a>
                <a href="https://myseedstory.co" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full border border-myseedstory-forest/40 hover:bg-myseedstory-forest/5">myseedstory.co</a>
              </div>
            </div>
            <!-- The phones run off the bottom edge, except at lg where the column is too narrow for that and they sit whole -->
            <div class="lg:col-span-6 flex justify-center lg:justify-end items-end lg:items-center xl:items-end gap-4 lg:pb-14 xl:pb-0 overflow-hidden" aria-hidden="true">
              <div class="phone w-[190px] sm:w-[240px] lg:w-[196px] xl:w-[240px] -mb-12 lg:mb-0 xl:-mb-12"><img src="/app-logos/myseedstory/screenshot-seeds.webp" alt="" loading="lazy" decoding="async" /></div>
              <div class="phone w-[190px] sm:w-[240px] lg:w-[196px] xl:w-[240px] mt-14 -mb-28 lg:mb-0 xl:-mb-28"><img src="/app-logos/myseedstory/screenshot-calendar.webp" alt="" loading="lazy" decoding="async" /></div>
            </div>
          </div>
          <div class="border-t border-myseedstory-forest/15 grid lg:grid-cols-12 gap-8 items-center px-6 sm:px-10 lg:px-14 py-10">
            <div class="lg:col-span-4">
              <h4 class="font-brand text-2xl font-bold tracking-tight text-myseedstory-forest">The landing page flies</h4>
              <p class="mt-3 leading-relaxed opacity-80">Scrolling moves a camera through a clay garden: six scenes joined by eleven clips, scrubbed frame by frame. I built the scroll engine and directed the footage.</p>
              <a href="https://myseedstory.co/mascot" target="_blank" rel="noopener noreferrer" class="inline-block mt-5 font-medium underline underline-offset-4 decoration-myseedstory-clay decoration-2 hover:text-myseedstory-clay">Fly through it</a>
            </div>
            <div class="lg:col-span-8">
              <video
                ref="clip"
                class="w-full aspect-[16/9] object-cover rounded-2xl bg-[#F3EDE2]"
                src="/scrollworld/mascot/vid/dive_1-m.mp4"
                poster="/scrollworld/mascot/scene_1.webp"
                preload="none"
                muted
                loop
                playsinline
                aria-label="A clay model of a seed library, the camera flying into it"
              ></video>
            </div>
          </div>
        </article>

        <!-- EasyTranslate AI -->
        <article id="easytranslate" class="mt-5 rounded-[28px] bg-et-navy text-white overflow-hidden scroll-mt-6">
          <div class="grid lg:grid-cols-12 gap-x-8 lg:gap-x-16 px-6 sm:px-10 lg:px-14">
            <div class="lg:col-span-6 order-2 lg:order-1 relative h-[360px] sm:h-[440px] lg:h-auto" aria-hidden="true">
              <img src="/app-logos/easytranslate/phone-dark.webp" alt="" loading="lazy" decoding="async" class="absolute left-[6%] sm:left-[14%] lg:left-auto lg:right-[38%] top-8 h-[125%] lg:h-[106%] w-auto max-w-none" />
              <img src="/app-logos/easytranslate/phone-light.webp" alt="" loading="lazy" decoding="async" class="absolute left-[44%] sm:left-[46%] lg:left-auto lg:right-[2%] top-24 h-[125%] lg:h-[106%] w-auto max-w-none" />
            </div>
            <div class="lg:col-span-6 order-1 lg:order-2 py-10 lg:py-14">
              <div class="flex items-center gap-4">
                <span class="app-icon w-14 h-14"><img src="/app-logos/easytranslate/easytranslateai.webp" alt="" class="object-cover" /></span>
                <h3 class="font-brand text-[2.1rem] font-bold tracking-[-0.02em]">EasyTranslate AI</h3>
              </div>
              <p class="mt-6 text-xl leading-snug font-medium">Translate a whole document from your phone.</p>
              <p class="mt-3 leading-relaxed text-white/75">Upload a PDF, Word, Excel or PowerPoint file, or point the camera at a page, and get it back in any of 100+ languages with the formatting kept. Vue and Quasar wrapped in Capacitor, Firebase behind it, credits and subscriptions through RevenueCat.</p>
              <dl class="mt-7 grid grid-cols-[5.5rem_1fr] gap-y-2 text-[15px]">
                <dt class="text-white/55">Role</dt><dd>Design, engineering and release</dd>
                <dt class="text-white/55">Platform</dt><dd>iOS</dd>
                <dt class="text-white/55">Stack</dt><dd>Vue, Quasar, Capacitor, TypeScript, Firebase</dd>
                <dt class="text-white/55">Status</dt><dd class="flex items-center gap-2.5"><span class="live-dot"></span>Live on the App Store</dd>
              </dl>
              <div class="mt-8 flex flex-wrap gap-2.5 text-[15px] font-medium">
                <a href="https://apps.apple.com/us/app/easytranslate-ai-pdf-docs/id6751864455" target="_blank" rel="noopener noreferrer" class="store-link bg-et-purple-dark text-white hover:bg-et-purple">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path :d="appleMark" /></svg>App Store
                </a>
                <a href="https://easytranslate.io" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full border border-white/35 hover:bg-white/10">easytranslate.io</a>
              </div>
            </div>
          </div>
        </article>

        <!-- CertMatrix -->
        <article id="certmatrix" class="mt-5 rounded-[28px] bg-certmatrix-wall text-certmatrix-ink overflow-hidden scroll-mt-6">
          <div class="grid lg:grid-cols-12 gap-x-8 gap-y-8 px-6 sm:px-10 lg:px-14 pt-10 lg:pt-14 pb-10">
            <div class="lg:col-span-7">
              <div class="flex items-center gap-4">
                <span class="app-icon w-14 h-14"><img src="/app-logos/certmatrix/certmatrix-logo.png" alt="" class="object-cover" /></span>
                <h3 class="font-brand text-[2.1rem] font-bold tracking-[-0.02em]">CertMatrix</h3>
              </div>
              <p class="mt-6 text-xl leading-snug font-medium">Know who is certified today, not who was last spring.</p>
              <p class="mt-3 max-w-[36rem] leading-relaxed text-certmatrix-mut">Certification tracking for small crews: every person and every card on one grid, a reminder before anything runs out, and audit exports on demand. A React app, a Fastify API on Postgres, an Astro marketing site and Playwright tests across all of it.</p>
              <div class="mt-7 flex flex-wrap gap-2.5 text-[15px] font-medium">
                <a href="https://certmatrix.io" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full bg-certmatrix-acc text-white hover:bg-certmatrix-acc-dark">certmatrix.io</a>
              </div>
            </div>
            <dl class="lg:col-span-5 lg:pt-[4.6rem] grid grid-cols-[5.5rem_1fr] gap-y-2 text-[15px] content-start">
              <dt class="text-certmatrix-mut">Role</dt><dd>Design, engineering and release</dd>
              <dt class="text-certmatrix-mut">Platform</dt><dd>Web, for teams</dd>
              <dt class="text-certmatrix-mut">Stack</dt><dd>React, TanStack Router, Fastify, Drizzle, Postgres, Astro</dd>
              <dt class="text-certmatrix-mut">Status</dt><dd class="flex items-center gap-2.5"><span class="live-dot"></span>Live</dd>
            </dl>
          </div>
          <!-- The app's dark theme, so the screenshot stands off its own wall colour -->
          <div class="mx-6 sm:mx-10 lg:mx-14 overflow-hidden rounded-t-xl border-[6px] border-b-0 border-certmatrix-ink bg-certmatrix-ink">
            <img src="/app-logos/certmatrix/matrix-dark.webp" alt="The CertMatrix grid: employees down the side, required certifications across the top, each cell showing an expiry date" loading="lazy" decoding="async" class="block w-[210%] max-w-none sm:w-full aspect-[16/8] object-cover object-left-top" />
          </div>
        </article>

        <!-- BentoBook -->
        <article id="bentobook" class="mt-5 rounded-[28px] bg-bentobook-indigo text-white overflow-hidden scroll-mt-6">
          <div class="grid lg:grid-cols-12 gap-x-8 lg:gap-x-14 px-6 sm:px-10 lg:pl-14 lg:pr-0">
            <div class="lg:col-span-5 py-10 lg:py-14">
              <div class="flex items-center gap-4">
                <span class="app-icon w-14 h-14 bg-white p-2"><img src="/app-logos/bentobook-logo.webp" alt="" class="object-contain" /></span>
                <h3 class="font-brand text-[2.1rem] font-bold tracking-[-0.02em]">BentoBook</h3>
              </div>
              <p class="mt-6 text-xl leading-snug font-medium text-balance">A trading journal that shows what is working.</p>
              <p class="mt-3 leading-relaxed text-white/85">Import trades from MetaTrader, NinjaTrader, Tradovate or OKX, then read them as win rate, account growth and a daily profit calendar. It also has a backtester and position-size tools. Vue and Quasar on Firebase, charts in ECharts, subscriptions through Stripe.</p>
              <dl class="mt-7 grid grid-cols-[5.5rem_1fr] gap-y-2 text-[15px]">
                <dt class="text-white/80">Role</dt><dd>Design, engineering and release</dd>
                <dt class="text-white/80">Platform</dt><dd>Web</dd>
                <dt class="text-white/80">Stack</dt><dd>Vue, Quasar, Pinia, ECharts, Firebase</dd>
                <dt class="text-white/80">Status</dt><dd class="flex items-center gap-2.5"><span class="live-dot"></span>Live</dd>
              </dl>
              <div class="mt-8 flex flex-wrap gap-2.5 text-[15px] font-medium">
                <a href="https://bentobook.io" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full bg-white text-bentobook-indigo-dark hover:bg-white/90">bentobook.io</a>
              </div>
            </div>
            <div class="lg:col-span-7 relative h-[250px] sm:h-[380px] lg:h-auto" aria-hidden="true">
              <img src="/app-logos/bentobook/dashboard.webp" alt="" loading="lazy" decoding="async" class="absolute left-0 top-0 lg:top-14 w-[180%] sm:w-[125%] lg:w-[150%] max-w-none rounded-tl-xl border-[6px] border-r-0 border-b-0 border-bentobook-night" />
            </div>
          </div>
        </article>
      </section>

      <!-- The other three -->
      <section id="more" class="mx-auto max-w-[1200px] px-5 sm:px-8 pt-20 sm:pt-28 scroll-mt-6">
        <h2 class="font-brand text-3xl sm:text-[2.6rem] font-bold tracking-[-0.025em] leading-none">Also from the studio</h2>
        <ul class="mt-8 border-t border-secondary-dark">
          <li v-for="app in more" :key="app.name" class="border-b border-secondary-dark">
            <component
              :is="app.to ? RouterLink : 'a'"
              v-bind="app.to ? { to: app.to } : { href: app.href, target: '_blank', rel: 'noopener noreferrer' }"
              class="group grid grid-cols-[auto_1fr] md:grid-cols-[auto_minmax(0,1.5fr)_minmax(0,1fr)_8.5rem] gap-x-5 gap-y-1 items-center py-5"
            >
              <span class="app-icon w-12 h-12 row-span-2 md:row-span-1"><img :src="app.icon" alt="" class="object-cover" /></span>
              <span>
                <span class="block font-brand text-xl font-semibold tracking-tight group-hover:underline underline-offset-4">{{ app.name }}</span>
                <span class="block text-[15px] text-primary-light">{{ app.blurb }}</span>
              </span>
              <span class="col-start-2 md:col-start-auto text-[15px] text-primary-light">{{ app.stack }}</span>
              <span v-if="app.live" class="col-start-2 md:col-start-auto flex items-center gap-2.5 text-[15px]"><span class="live-dot"></span>Live</span>
              <span v-else class="col-start-2 md:col-start-auto flex items-center gap-2.5 text-[15px] text-primary-light"><span class="w-2.5 h-2.5 rounded-full border-2 border-primary-light"></span>In development</span>
            </component>
          </li>
        </ul>
      </section>

      <!-- About -->
      <section id="about" class="mx-auto max-w-[1200px] px-5 sm:px-8 pt-20 sm:pt-28 scroll-mt-6">
        <div class="grid lg:grid-cols-12 gap-x-12 gap-y-12">
          <div class="lg:col-span-6">
            <h2 class="font-brand text-3xl sm:text-[2.6rem] font-bold tracking-[-0.025em] leading-none">About</h2>
            <p class="mt-7 text-xl leading-relaxed">I'm Brandon Ore. Pomkatsu LLC is my company, and every product on this page is mine from the first sketch to the support inbox.</p>
            <p class="mt-4 leading-relaxed text-primary-light max-w-[34rem]">I design the screens and build everything behind them: the app, the API, the database and the billing. Because I do both, the interface and the data model get worked out together instead of being handed off.</p>
          </div>
          <div class="lg:col-span-6 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            <div>
              <h3 class="font-brand text-xl font-semibold tracking-tight">The parts that never make the screenshots</h3>
              <ul class="mt-4 space-y-2.5 text-[15px] leading-snug text-primary-light">
                <li>App Store and Google Play submissions</li>
                <li>Subscriptions and purchases with RevenueCat and Stripe</li>
                <li>Privacy policies, terms, a DPA and account deletion</li>
                <li>Postgres schemas and migrations with Drizzle</li>
                <li>End-to-end tests in Playwright, unit tests in Vitest</li>
              </ul>
            </div>
            <div>
              <h3 class="font-brand text-xl font-semibold tracking-tight">What I build with</h3>
              <dl class="mt-4 space-y-2.5 text-[15px] leading-snug">
                <div><dt class="font-medium">Mobile</dt><dd class="text-primary-light">React Native with Expo, Flutter, Capacitor</dd></div>
                <div><dt class="font-medium">Web</dt><dd class="text-primary-light">React, Vue, Astro, Tailwind</dd></div>
                <div><dt class="font-medium">Backend</dt><dd class="text-primary-light">Fastify, Postgres on Supabase, Firebase</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section class="mx-auto max-w-[1200px] px-5 sm:px-8 pt-20 sm:pt-28">
        <div class="rounded-[28px] bg-primary text-secondary px-6 sm:px-10 lg:px-14 py-12 lg:py-16 grid lg:grid-cols-12 gap-8 items-end">
          <div class="lg:col-span-8">
            <h2 class="text-balance font-brand text-4xl sm:text-[3.4rem] font-bold tracking-[-0.03em] leading-[1.02]">Hiring a product engineer?</h2>
            <p class="mt-5 max-w-[32rem] text-lg leading-relaxed text-secondary/70">I'm open to full-stack, design engineering and founding roles. Email is the fastest way to reach me.</p>
          </div>
          <div class="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
            <a :href="emailUrl" class="px-6 py-3 rounded-full bg-katsu text-primary-dark font-semibold hover:bg-katsu-dark">Email Brandon</a>
            <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-full border border-secondary/40 font-semibold hover:bg-secondary/10">View GitHub</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="mx-auto max-w-[1200px] px-5 sm:px-8 py-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 text-sm text-primary-light">
      <p>© {{ year }} Pomkatsu LLC, Texas</p>
      <nav class="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal and support">
        <router-link to="/privacy" class="hover:text-primary hover:underline underline-offset-4">Privacy Policy</router-link>
        <router-link to="/terms" class="hover:text-primary hover:underline underline-offset-4">Terms of Service</router-link>
        <router-link to="/cookies" class="hover:text-primary hover:underline underline-offset-4">Cookie Policy</router-link>
        <router-link to="/dmca" class="hover:text-primary hover:underline underline-offset-4">DMCA</router-link>
        <router-link to="/aup" class="hover:text-primary hover:underline underline-offset-4">Acceptable Use</router-link>
        <button type="button" class="hover:text-primary hover:underline underline-offset-4" @click="openContactForm">Contact support</button>
      </nav>
    </footer>

    <!-- Contact Form Modal -->
    <ContactForm
      v-if="showContactForm"
      @close="closeContactForm"
    />
  </div>
</template>

<style scoped>
.home :focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}

.app-icon {
  flex: none;
  overflow: hidden;
  border-radius: 22%;
}

.app-icon img {
  display: block;
  width: 100%;
  height: 100%;
}

.phone {
  overflow: hidden;
  border: 8px solid #131313;
  border-radius: 2.1rem;
  background: #131313;
}

.phone img {
  display: block;
  width: 100%;
}

/* A shipped product: bright green with a soft halo */
.live-dot {
  @apply flex-none w-2.5 h-2.5 rounded-full bg-live ring-4 ring-live/25;
}

/* A store button: the store's mark, then its name */
.store-link {
  @apply inline-flex items-center gap-2 pl-3.5 pr-4 py-2 rounded-full;
}

.store-link svg {
  @apply w-[18px] h-[18px];
}
</style>
