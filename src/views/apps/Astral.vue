<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import ContactForm from '../../components/ContactForm.vue'
import { getDomainConfig } from '../../config/domains'

const domainConfig = getDomainConfig()
const isAppDomain = !!domainConfig

useSeoMeta({
  title: 'Astral — AI Soulmate Portraits & Astrology Companion',
  description: 'Discover your cosmic soulmate with AI-generated portraits in 6 unique art styles. Plus tarot readings, zodiac insights, and personalized cosmic guidance.',
  ogTitle: 'Astral — AI Soulmate Portraits & Astrology Companion',
  ogDescription: 'Discover your cosmic soulmate with AI-generated portraits in 6 unique art styles, shaped by your zodiac energy.',
  ogImage: '/app-logos/astral/og-image.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Astral',
      operatingSystem: 'iOS, Android',
      applicationCategory: 'LifestyleApplication',
      description: 'AI-powered astrology and tarot app with soulmate portraits in 6 art styles, 47 tarot spreads, personalized horoscopes, and cosmic AI chat.',
      offers: {
        '@type': 'Offer',
        price: '0',
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

const showContactForm = ref(false)
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onLightboxKeydown)
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onLightboxKeydown)
})

// Soulmate portrait cards for carousel (alternating styles & genders)
const soulmateCards = [
  { src: '/app-logos/astral/soulmate_cards/ethereal_female_1.png', style: 'Ethereal' },
  { src: '/app-logos/astral/soulmate_cards/realistic_male_1.png', style: 'Realistic' },
  { src: '/app-logos/astral/soulmate_cards/anime_female_2.png', style: 'Anime' },
  { src: '/app-logos/astral/soulmate_cards/sketch_male_1.png', style: 'Sketch' },
  { src: '/app-logos/astral/soulmate_cards/vintage_female_1.png', style: 'Vintage' },
  { src: '/app-logos/astral/soulmate_cards/cyberpunk_male_1.png', style: 'Cyberpunk' },
  { src: '/app-logos/astral/soulmate_cards/realistic_female_1.png', style: 'Realistic' },
  { src: '/app-logos/astral/soulmate_cards/ethereal_male_1.png', style: 'Ethereal' },
  { src: '/app-logos/astral/soulmate_cards/cyberpunk_female_1.png', style: 'Cyberpunk' },
  { src: '/app-logos/astral/soulmate_cards/anime_male_1.png', style: 'Anime' },
  { src: '/app-logos/astral/soulmate_cards/vintage_male_1.png', style: 'Vintage' },
  { src: '/app-logos/astral/soulmate_cards/sketch_female_1.png', style: 'Sketch' },
  { src: '/app-logos/astral/soulmate_cards/realistic_male_2.png', style: 'Realistic' },
]

// Art style showcase (one female portrait per style)
const artStyles = [
  { name: 'Ethereal', description: 'Dreamlike & luminous', src: '/app-logos/astral/soulmate_cards/ethereal_female_1.png' },
  { name: 'Realistic', description: 'Lifelike & detailed', src: '/app-logos/astral/soulmate_cards/realistic_female_1.png' },
  { name: 'Anime', description: 'Bold & expressive', src: '/app-logos/astral/soulmate_cards/anime_female_2.png' },
  { name: 'Sketch', description: 'Hand-drawn & intimate', src: '/app-logos/astral/soulmate_cards/sketch_female_1.png' },
  { name: 'Vintage', description: 'Classic & timeless', src: '/app-logos/astral/soulmate_cards/vintage_female_1.png' },
  { name: 'Cyberpunk', description: 'Futuristic & electric', src: '/app-logos/astral/soulmate_cards/cyberpunk_female_1.png' },
]

// Features grid (3 items — soulmate is the hero, not here)
const features = [
  {
    name: 'Tarot Readings',
    description: 'Multiple spread types including Daily, 3-Card, and Celtic Cross. Ask custom questions and receive AI-powered interpretations with the full 78-card Rider-Waite deck.',
    screenshot: '/app-logos/astral/screenshots/tarot_result.webp',
  },
  {
    name: 'Zodiac & Horoscopes',
    description: 'Personal readings based on your birth chart, pet horoscopes, and compatibility analysis to understand your cosmic connections.',
    screenshot: '/app-logos/astral/screenshots/horoscope_main.webp',
  },
  {
    name: 'Cosmic AI Chat',
    description: '8 guided conversation topics covering love, career, dreams, and more — powered by astrology-aware AI for personalized cosmic guidance.',
    screenshot: '/app-logos/astral/screenshots/love_chat.webp',
  },
]

// Soulmate detail spotlight (decorative mock data)
const soulmateSpotlight = {
  screenshot: '/app-logos/astral/screenshots/soulmate_1.webp',
  name: 'Luna Vesper',
  sign: 'Pisces',
  compatibility: 94,
  element: 'Water',
  modality: 'Mutable',
  planet: 'Neptune',
  personality: 'A dreamy artist with deep emotional intelligence and an intuitive understanding of the cosmos. She finds beauty in hidden places and speaks the language of the stars.',
}

const topics = [
  { name: 'Ask Me Anything', description: 'Open-ended cosmic guidance on any topic', image: '/app-logos/astral/ask-me-anything-card-bg.webp' },
  { name: 'Love Match', description: 'Explore romantic compatibility and connections', image: '/app-logos/astral/love-match-card-bg.webp' },
  { name: 'Dream Decoder', description: 'Uncover the meaning behind your dreams', image: '/app-logos/astral/dream-decoder-card-bg.webp' },
  { name: 'Friend Vibes', description: 'Understand your friendships through the stars', image: '/app-logos/astral/friend-vibes-card-bg.webp' },
  { name: 'Cosmic Events', description: 'Stay aligned with planetary movements', image: '/app-logos/astral/cosmic-events-card-bg.webp' },
  { name: 'Astro Travel', description: 'Discover destinations written in your stars', image: '/app-logos/astral/astro-travel-card-bg.webp' },
  { name: 'Career Compass', description: 'Navigate your professional path with cosmic insight', image: '/app-logos/astral/career-compass-card-bg.webp' },
  { name: 'Soul Growth', description: 'Deepen your spiritual journey and self-awareness', image: '/app-logos/astral/soul-growth-card-bg.webp' },
]

// Lightbox state
const lightboxOpen = ref(false)
const lightboxImages = ref([])
const lightboxIndex = ref(0)

function openLightbox(images, index) {
  lightboxImages.value = images
  lightboxIndex.value = index
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}

function lightboxPrev() {
  lightboxIndex.value = (lightboxIndex.value - 1 + lightboxImages.value.length) % lightboxImages.value.length
}

function lightboxNext() {
  lightboxIndex.value = (lightboxIndex.value + 1) % lightboxImages.value.length
}

function onLightboxKeydown(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  else if (e.key === 'ArrowLeft') lightboxPrev()
  else if (e.key === 'ArrowRight') lightboxNext()
}
</script>

<template>
  <div class="min-h-screen text-white relative">
    <!-- Full-page background -->
    <div class="fixed inset-0 -z-10">
      <img
        src="/app-logos/astral/background.webp"
        alt=""
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-astral-bg/40"></div>
    </div>

    <!-- Navigation -->
    <nav
      class="fixed w-full z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300"
      :class="scrolled ? 'bg-astral-header/80 backdrop-blur-md border-white/10' : 'bg-transparent border-transparent backdrop-blur-none'"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <router-link to="/" class="text-2xl font-bold text-white hover:text-astral-gold transition-colors">
            {{ isAppDomain ? 'Astral' : 'Pomkatsu' }}
          </router-link>
          <button
            @click="showContactForm = true"
            class="px-6 py-2 bg-astral-deep text-white rounded-lg hover:bg-astral-cosmic transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section — Soulmate-First -->
    <section class="pt-28 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Brand label -->
        <p class="text-sm text-white/50 mb-3 tracking-wide uppercase">Astral</p>

        <!-- Avatar illustration (smaller) -->
        <div class="mb-4 animate-float">
          <img
            src="/app-logos/astral/avatar.svg"
            alt="Astral Avatar"
            class="w-20 h-20 sm:w-24 sm:h-24 mx-auto"
          />
        </div>

        <h1 class="text-4xl sm:text-5xl font-bold mb-3">Discover Your Cosmic Soulmate</h1>

        <p class="text-xl sm:text-2xl font-semibold mb-3 text-astral-gold">
          AI-generated portraits in 6 unique styles
        </p>
        <p class="text-base sm:text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          Your zodiac sign shapes who the stars have written for you. See them rendered in Ethereal, Realistic, Anime, Sketch, Vintage, and Cyberpunk styles.
        </p>

        <!-- Store buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <!-- App Store button -->
          <a
            href="#"
            class="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-200 font-semibold min-w-[180px]"
          >
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div class="text-left">
              <div class="text-xs opacity-80">Download on the</div>
              <div class="text-base font-bold leading-tight">App Store</div>
            </div>
          </a>

          <!-- Google Play button (disabled) -->
          <div class="relative">
            <div
              class="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 text-white/50 rounded-xl min-w-[180px] pointer-events-none"
            >
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs opacity-80">Get it on</div>
                <div class="text-base font-bold leading-tight">Google Play</div>
              </div>
            </div>
            <span class="absolute -top-2 -right-2 bg-astral-cosmic text-white text-xs font-bold px-2 py-0.5 rounded-full">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="max-w-4xl mx-auto px-8"><div class="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div>

    <!-- Soulmate Portrait Carousel + Style Legend -->
    <section class="py-16 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-3 animate-fade-in">
          6 Art Styles. One Cosmic Connection.
        </h2>
        <p class="text-center text-white/60 mb-12 max-w-2xl mx-auto text-lg">
          AI-generated portraits shaped by your zodiac energy
        </p>
      </div>

      <div class="carousel-track">
        <div class="carousel-inner">
          <div
            v-for="(card, i) in soulmateCards"
            :key="'a-' + i"
            class="carousel-item cursor-pointer"
            @click="openLightbox(soulmateCards, i % soulmateCards.length)"
          >
            <div class="relative w-full h-full">
              <img :src="card.src" :alt="card.style + ' soulmate portrait'" class="w-full h-full object-cover rounded-2xl" loading="lazy" />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl px-3 py-2">
                <span class="text-xs sm:text-sm font-semibold text-white/90">{{ card.style }}</span>
              </div>
            </div>
          </div>
          <div
            v-for="(card, i) in soulmateCards"
            :key="'b-' + i"
            class="carousel-item"
            aria-hidden="true"
          >
            <div class="relative w-full h-full">
              <img :src="card.src" :alt="card.style + ' soulmate portrait'" class="w-full h-full object-cover rounded-2xl" loading="lazy" />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl px-3 py-2">
                <span class="text-xs sm:text-sm font-semibold text-white/90">{{ card.style }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Style legend -->
      <div class="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 px-4">
        <span
          v-for="style in artStyles"
          :key="style.name"
          class="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm text-white/70"
        >
          <span class="font-semibold text-white/90">{{ style.name }}</span> — {{ style.description }}
        </span>
      </div>
    </section>

    <!-- Section divider -->
    <div class="max-w-4xl mx-auto px-8"><div class="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div>

    <!-- Soulmate Detail Spotlight -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-3 animate-fade-in">
          See What the Stars Reveal
        </h2>
        <p class="text-center text-white/60 mb-12 max-w-2xl mx-auto text-lg">
          Every soulmate comes with a unique bio, zodiac profile, and compatibility score
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          <!-- Left: App screenshot -->
          <div class="flex justify-center">
            <div class="w-64 sm:w-72 rounded-2xl overflow-hidden shadow-2xl shadow-astral-cosmic/20 border border-white/10">
              <img :src="soulmateSpotlight.screenshot" alt="Soulmate result screen" class="w-full h-auto" loading="lazy" />
            </div>
          </div>

          <!-- Right: Mock compatibility card -->
          <div class="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <!-- Name and sign -->
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-astral-cosmic/30 border border-astral-cosmic/40 rounded-full flex items-center justify-center text-lg">
                ♓
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">{{ soulmateSpotlight.name }}</h3>
                <p class="text-sm text-astral-gold">{{ soulmateSpotlight.sign }}</p>
              </div>
            </div>

            <!-- Compatibility score -->
            <div class="mb-5">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm text-white/60">Compatibility</span>
                <span class="text-lg font-bold text-astral-gold">{{ soulmateSpotlight.compatibility }}%</span>
              </div>
              <div class="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-astral-cosmic to-astral-gold rounded-full" :style="{ width: soulmateSpotlight.compatibility + '%' }"></div>
              </div>
            </div>

            <!-- Element / Modality / Planet chips -->
            <div class="flex flex-wrap gap-2 mb-5">
              <span class="px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-semibold text-white/80">
                {{ soulmateSpotlight.element }}
              </span>
              <span class="px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-semibold text-white/80">
                {{ soulmateSpotlight.modality }}
              </span>
              <span class="px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-semibold text-white/80">
                {{ soulmateSpotlight.planet }}
              </span>
            </div>

            <!-- Personality snippet -->
            <p class="text-sm text-white/60 leading-relaxed italic">
              "{{ soulmateSpotlight.personality }}"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="max-w-4xl mx-auto px-8"><div class="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div>

    <!-- Other Features — 3-Card Grid -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-3 animate-fade-in">
          More Than Soulmates
        </h2>
        <p class="text-center text-white/60 mb-12 max-w-2xl mx-auto text-lg">
          Tarot, horoscopes, and AI-powered cosmic guidance — all in one app
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            v-for="feature in features"
            :key="feature.name"
            class="feature-card bg-white/5 border border-white/10 rounded-2xl overflow-hidden group"
          >
            <!-- Screenshot -->
            <div class="aspect-[9/16] max-h-72 overflow-hidden">
              <img :src="feature.screenshot" :alt="feature.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <!-- Text -->
            <div class="p-5">
              <h3 class="text-lg font-bold mb-2 text-white">{{ feature.name }}</h3>
              <p class="text-sm text-white/60 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="max-w-4xl mx-auto px-8"><div class="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div>

    <!-- Topics Grid -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-3 animate-fade-in">
          Cosmic Conversations
        </h2>
        <p class="text-center text-white/60 mb-12 max-w-2xl mx-auto text-lg">
          8 AI-guided topics for every dimension of your journey
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <div
            v-for="topic in topics"
            :key="topic.name"
            class="topic-card relative overflow-hidden rounded-xl group cursor-default aspect-square"
          >
            <img
              :src="topic.image"
              :alt="topic.name"
              class="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105 p-2"
            />
            <!-- Hover glow ring -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl ring-1 ring-astral-cosmic/50 shadow-[0_0_15px_rgba(155,89,182,0.3)]"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="max-w-4xl mx-auto px-8"><div class="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div>

    <!-- CTA Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to meet your cosmic soulmate?
        </h2>
        <p class="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
          Download Astral and let the stars reveal who you're meant to find — plus tarot, horoscopes, and personalized cosmic guidance.
        </p>

        <!-- Store buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#"
            class="inline-flex items-center gap-3 px-6 py-3 bg-astral-deep text-white rounded-xl hover:bg-astral-cosmic transition-all duration-200 font-semibold min-w-[180px]"
          >
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div class="text-left">
              <div class="text-xs opacity-80">Download on the</div>
              <div class="text-base font-bold leading-tight">App Store</div>
            </div>
          </a>

          <div class="relative">
            <div
              class="inline-flex items-center gap-3 px-6 py-3 bg-astral-deep/40 text-white/50 rounded-xl min-w-[180px] pointer-events-none"
            >
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs opacity-80">Get it on</div>
                <div class="text-base font-bold leading-tight">Google Play</div>
              </div>
            </div>
            <span class="absolute -top-2 -right-2 bg-astral-cosmic text-white text-xs font-bold px-2 py-0.5 rounded-full">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-astral-deep/40 backdrop-blur-sm py-8 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center items-center gap-4 text-sm">
          <router-link to="/privacy" class="astral-footer-link text-white/60 hover:text-white transition-colors">
            Privacy Policy
          </router-link>
          <span class="text-white/30">|</span>
          <router-link to="/terms" class="astral-footer-link text-white/60 hover:text-white transition-colors">
            Terms of Service
          </router-link>
          <span class="text-white/30">|</span>
          <router-link to="/cookies" class="astral-footer-link text-white/60 hover:text-white transition-colors">
            Cookie Policy
          </router-link>
          <span class="text-white/30">|</span>
          <router-link to="/dmca" class="astral-footer-link text-white/60 hover:text-white transition-colors">
            DMCA
          </router-link>
          <span class="text-white/30">|</span>
          <router-link to="/aup" class="astral-footer-link text-white/60 hover:text-white transition-colors">
            Acceptable Use
          </router-link>
        </div>
        <div class="text-center mt-6 text-white/40 text-xs">
          &copy; 2025 Pomkatsu. All rights reserved.
        </div>
      </div>
    </footer>

    <!-- Contact Form Modal -->
    <ContactForm
      v-if="showContactForm"
      @close="showContactForm = false"
    />

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center"
        @click.self="closeLightbox"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/90" @click="closeLightbox"></div>

        <!-- Close button -->
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close lightbox"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Previous arrow -->
        <button
          v-if="lightboxImages.length > 1"
          @click="lightboxPrev"
          class="absolute left-3 sm:left-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Previous image"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Image -->
        <img
          :src="lightboxImages[lightboxIndex]?.src"
          :alt="lightboxImages[lightboxIndex]?.name || lightboxImages[lightboxIndex]?.alt || ''"
          class="relative z-[1] max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
        />

        <!-- Next arrow -->
        <button
          v-if="lightboxImages.length > 1"
          @click="lightboxNext"
          class="absolute right-3 sm:right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Next image"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Counter -->
        <div v-if="lightboxImages.length > 1" class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-white/70 text-sm">
          {{ lightboxIndex + 1 }} / {{ lightboxImages.length }}
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
/* Floating animation for avatar */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Fade-in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Feature cards stagger */
.feature-card {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
.feature-card:nth-child(1) { animation-delay: 0.1s; }
.feature-card:nth-child(2) { animation-delay: 0.2s; }
.feature-card:nth-child(3) { animation-delay: 0.3s; }

/* Topic cards stagger */
.topic-card {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
.topic-card:nth-child(1) { animation-delay: 0.05s; }
.topic-card:nth-child(2) { animation-delay: 0.1s; }
.topic-card:nth-child(3) { animation-delay: 0.15s; }
.topic-card:nth-child(4) { animation-delay: 0.2s; }
.topic-card:nth-child(5) { animation-delay: 0.25s; }
.topic-card:nth-child(6) { animation-delay: 0.3s; }
.topic-card:nth-child(7) { animation-delay: 0.35s; }
.topic-card:nth-child(8) { animation-delay: 0.4s; }

/* Carousel */
.carousel-track {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
}

.carousel-inner {
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: scroll 45s linear infinite;
}

.carousel-item {
  width: 220px;
  aspect-ratio: 1/1;
  flex-shrink: 0;
  border-radius: 1rem;
  overflow: hidden;
}

@media (min-width: 640px) {
  .carousel-item {
    width: 260px;
  }
  .carousel-inner {
    gap: 1.25rem;
  }
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.carousel-track:hover .carousel-inner {
  animation-play-state: paused;
}

/* Footer link underline animation */
.astral-footer-link {
  position: relative;
}
.astral-footer-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}
.astral-footer-link:hover::after {
  width: 100%;
}
</style>
