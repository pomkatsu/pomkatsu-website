<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'
import ContactForm from '../components/ContactForm.vue'

useSeoMeta({
  title: 'Pomkatsu: apps for iPhone, Android and the web',
  description: 'Pomkatsu is a small software company in Texas. It makes seven apps for iPhone, Android and the web, including MySeedStory, CertMatrix and EasyTranslate AI.',
  ogTitle: 'Pomkatsu: apps for iPhone, Android and the web',
  ogDescription: 'A small software company in Texas with seven apps for iPhone, Android and the web.',
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
      legalName: 'Pomkatsu LLC',
      url: 'https://pomkatsu.com',
      logo: 'https://pomkatsu.com/pomkatsu-logo.webp',
      description: 'A small software company in Texas that makes apps for iPhone, Android and the web.',
      email: 'support@pomkatsu.com',
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

const supportEmail = 'support@pomkatsu.com'
const year = new Date().getFullYear()

// Every app, live ones first. `to` is a page on this site, `href` is the app's own site.
const apps = [
  {
    name: 'MySeedStory',
    icon: '/app-logos/myseedstory/myseedstory-icon.webp',
    href: 'https://myseedstory.co',
    blurb: 'A field guide for the seeds you save.',
    platform: 'iPhone and Android',
    live: true,
  },
  {
    name: 'CertMatrix',
    icon: '/app-logos/certmatrix/certmatrix-logo.png',
    href: 'https://certmatrix.io',
    blurb: 'Certification tracking for small crews.',
    platform: 'Web',
    live: true,
  },
  {
    name: 'EasyTranslate AI',
    icon: '/app-logos/easytranslate/easytranslateai.webp',
    href: 'https://easytranslate.io',
    blurb: 'Translate a whole document from your phone.',
    platform: 'iPhone',
    live: true,
  },
  {
    name: 'BCP Flow',
    icon: '/app-logos/bcpflow/bcpflow-logo.svg',
    href: 'https://bcpflow.com',
    blurb: 'Business continuity plans for IT providers and their clients.',
    platform: 'Web',
    live: true,
  },
  {
    name: 'BentoBook',
    icon: '/app-logos/bentobook-logo.webp',
    padded: true,
    href: 'https://bentobook.io',
    blurb: 'A trading journal with trade import and analytics.',
    platform: 'Web',
    live: true,
  },
  {
    name: 'Destina',
    icon: '/app-logos/astral/astral-icon-square.webp',
    href: 'https://destina.love',
    blurb: 'Personality insights and love compatibility.',
    platform: 'iPhone and Android',
    live: false,
  },
  {
    name: 'FoodTally',
    icon: '/app-logos/foodtally/logo-tally.webp',
    to: '/apps/foodtally',
    blurb: 'Calorie tracking by voice, text or photo.',
    platform: 'iPhone and Android',
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
</script>

<template>
  <div class="home min-h-screen bg-secondary text-primary font-sans antialiased">
    <header class="mx-auto max-w-[1080px] px-5 sm:px-8">
      <nav class="flex items-center justify-between h-20" aria-label="Main">
        <router-link to="/" class="flex items-center gap-3">
          <span class="grid place-items-center w-10 h-10 rounded-xl bg-cream"><img src="/pomkatsu-mascot.webp" alt="" class="w-8 h-8 object-contain" /></span>
          <span class="text-[1.3rem] font-bold tracking-tight">Pomkatsu</span>
        </router-link>
        <div class="flex items-center gap-1 text-[15px]">
          <a href="#apps" class="px-3 py-2 rounded-full hover:bg-secondary-light">Apps</a>
          <a href="#support" class="px-3 py-2 rounded-full hover:bg-secondary-light">Support</a>
        </div>
      </nav>
    </header>

    <main>
      <!-- The mascot is the brand, so it gets the space. One sentence says what the company is. -->
      <section class="mx-auto max-w-[1080px] px-5 sm:px-8 pt-6 sm:pt-10">
        <div class="rounded-[32px] bg-cream grid md:grid-cols-[1.1fr_1fr] items-center gap-x-10 px-7 sm:px-12 lg:px-16 pt-12 md:pt-0">
          <div class="md:py-20">
            <h1 class="text-balance text-[clamp(2.4rem,5.4vw,4rem)] font-extrabold tracking-[-0.035em] leading-[1.02]">Pomkatsu makes apps.</h1>
            <p class="mt-6 max-w-[27rem] text-lg leading-relaxed text-primary/80">Seven so far, for iPhone, Android and the web. Pomkatsu is a small software company in Texas.</p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="#apps" class="px-6 py-3 rounded-full bg-katsu text-primary-dark font-semibold hover:bg-katsu-dark">See the apps</a>
              <a href="#support" class="px-6 py-3 rounded-full border border-primary/70 font-semibold hover:bg-primary/5">Get support</a>
            </div>
          </div>
          <img src="/pomkatsu-mascot.webp" alt="The Pomkatsu mascot, a husky puppy holding a katsu cutlet" class="justify-self-center self-center w-[72%] md:w-full max-w-[380px] h-auto my-10 md:my-14" />
        </div>
      </section>

      <section id="apps" class="mx-auto max-w-[1080px] px-5 sm:px-8 pt-20 sm:pt-24 scroll-mt-6">
        <h2 class="text-3xl sm:text-[2.3rem] font-extrabold tracking-[-0.03em] leading-none">The apps</h2>
        <ul class="mt-8 border-t border-secondary-dark">
          <li v-for="app in apps" :key="app.name" class="border-b border-secondary-dark">
            <component
              :is="app.to ? RouterLink : 'a'"
              v-bind="app.to ? { to: app.to } : { href: app.href, target: '_blank', rel: 'noopener noreferrer' }"
              class="group grid grid-cols-[auto_1fr] md:grid-cols-[auto_minmax(0,1.6fr)_minmax(0,1fr)_9.5rem] gap-x-5 gap-y-1 items-center py-5"
            >
              <span class="app-icon w-14 h-14 row-span-3 md:row-span-1 self-start md:self-center" :class="app.padded ? 'bg-secondary-light p-2' : ''"><img :src="app.icon" alt="" :class="app.padded ? 'object-contain' : 'object-cover'" loading="lazy" decoding="async" /></span>
              <span>
                <span class="block text-xl font-bold tracking-tight group-hover:underline underline-offset-4">{{ app.name }}</span>
                <span class="block text-[15px] text-primary-light">{{ app.blurb }}</span>
              </span>
              <span class="col-start-2 md:col-start-auto text-[15px] text-primary-light">{{ app.platform }}</span>
              <span v-if="app.live" class="col-start-2 md:col-start-auto flex items-center gap-2.5 text-[15px]"><span class="live-dot"></span>Live</span>
              <span v-else class="col-start-2 md:col-start-auto flex items-center gap-2.5 text-[15px] text-primary-light"><span class="w-2.5 h-2.5 rounded-full border-2 border-primary-light"></span>Coming soon</span>
            </component>
          </li>
        </ul>
      </section>

      <section id="support" class="mx-auto max-w-[1080px] px-5 sm:px-8 pt-20 sm:pt-24 scroll-mt-6">
        <div class="rounded-[32px] bg-primary text-secondary px-7 sm:px-12 lg:px-16 py-12 lg:py-14 grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <h2 class="text-3xl sm:text-[2.3rem] font-extrabold tracking-[-0.03em] leading-none">Need help with an app?</h2>
            <p class="mt-5 max-w-[30rem] text-lg leading-relaxed text-secondary/70">Write to {{ supportEmail }} and say which app it is about. To remove your account and its data, use the delete request.</p>
          </div>
          <div class="flex flex-wrap gap-3">
            <a :href="`mailto:${supportEmail}`" class="px-6 py-3 rounded-full bg-katsu text-primary-dark font-semibold hover:bg-katsu-dark">Email support</a>
            <router-link to="/delete-account" class="px-6 py-3 rounded-full border border-secondary/40 font-semibold hover:bg-secondary/10">Delete my account</router-link>
          </div>
        </div>
      </section>
    </main>

    <footer class="mx-auto max-w-[1080px] px-5 sm:px-8 py-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 text-sm text-primary-light">
      <p>© {{ year }} Pomkatsu LLC, Texas</p>
      <nav class="flex flex-wrap gap-x-6 -my-2" aria-label="Legal and support">
        <router-link to="/privacy" class="py-2 hover:text-primary hover:underline underline-offset-4">Privacy Policy</router-link>
        <router-link to="/terms" class="py-2 hover:text-primary hover:underline underline-offset-4">Terms of Service</router-link>
        <router-link to="/cookies" class="py-2 hover:text-primary hover:underline underline-offset-4">Cookie Policy</router-link>
        <router-link to="/eula" class="py-2 hover:text-primary hover:underline underline-offset-4">EULA</router-link>
        <router-link to="/dmca" class="py-2 hover:text-primary hover:underline underline-offset-4">DMCA</router-link>
        <router-link to="/aup" class="py-2 hover:text-primary hover:underline underline-offset-4">Acceptable Use</router-link>
        <button type="button" class="py-2 hover:text-primary hover:underline underline-offset-4" @click="openContactForm">Contact support</button>
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

/* A shipped product: bright green with a soft halo */
.live-dot {
  @apply flex-none w-2.5 h-2.5 rounded-full bg-live ring-4 ring-live/25;
}
</style>
