<script setup>
import { ref } from 'vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import ContactForm from '../components/ContactForm.vue'

useSeoMeta({
  title: 'Pomkatsu — Mobile App Development',
  description: 'Pomkatsu builds innovative mobile apps for iOS and Android. Explore our apps: Astral, EasyTranslate AI, and FoodTally.',
  ogTitle: 'Pomkatsu — Mobile App Development',
  ogDescription: 'Innovative mobile apps for iOS and Android.',
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
      description: 'Mobile app development company building innovative apps for iOS and Android.',
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

const showContactForm = ref(false)

const openContactForm = () => {
  showContactForm.value = true
}

const closeContactForm = () => {
  showContactForm.value = false
}
</script>

<template>
  <div class="min-h-screen bg-secondary flex flex-col">
    <!-- Navigation -->
    <nav class="w-full bg-secondary z-40 flex-shrink-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-2xl font-bold text-primary hover:text-primary-light transition-colors">
              Pomkatsu
            </router-link>
          </div>
          <button
            @click="openContactForm"
            class="px-6 py-2 bg-primary text-secondary rounded-lg hover:bg-primary-light transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <main class="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12">
      <div class="text-center max-w-[1080px] mx-auto">
        <!-- Logo -->
        <div class="mb-6">
          <img src="/pomkatsu-logo.webp" alt="Pomkatsu Logo" class="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto object-contain" fetchpriority="high" />
        </div>

        <!-- Products -->
        <div class="max-w-[1080px] mx-auto text-left">
          <!-- Mobile Apps -->
          <div>
            <h3 class="text-sm font-semibold text-primary-light/70 uppercase tracking-wider mb-3">Mobile Apps</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <router-link
                to="/apps/easytranslate"
                class="flex items-center gap-5 rounded-2xl p-5 bg-secondary-dark/50 border border-primary/20 hover:border-primary/35 hover:bg-secondary-dark/80 transition-all duration-200 cursor-pointer"
              >
                <img src="/app-logos/easytranslate/easytranslateai.webp" alt="EasyTranslate AI Logo" class="w-16 h-16 object-contain rounded-xl flex-shrink-0" />
                <div>
                  <p class="text-lg font-bold text-primary">EasyTranslate AI</p>
                  <p class="text-sm text-primary-light leading-snug">Translate documents instantly in 100+ languages</p>
                </div>
              </router-link>
              <a
                href="https://astralapp.love"
                target="_blank"
                rel="noopener"
                class="flex items-center gap-5 rounded-2xl p-5 bg-secondary-dark/50 border border-primary/20 hover:border-primary/35 hover:bg-secondary-dark/80 transition-all duration-200 cursor-pointer"
              >
                <img src="/app-logos/astral/astral-icon-square.webp" alt="Astral Logo" class="w-16 h-16 object-contain rounded-xl flex-shrink-0" />
                <div>
                  <p class="text-lg font-bold text-primary">Astral</p>
                  <p class="text-sm text-primary-light leading-snug">Tarot readings, horoscopes, and cosmic guidance</p>
                </div>
              </a>
              <router-link
                to="/apps/foodtally"
                class="flex items-center gap-5 rounded-2xl p-5 bg-secondary-dark/50 border border-primary/20 hover:border-primary/35 hover:bg-secondary-dark/80 transition-all duration-200 cursor-pointer"
              >
                <img src="/app-logos/foodtally/logo-tally.webp" alt="FoodTally Logo" class="w-16 h-16 object-contain rounded-xl flex-shrink-0" />
                <div>
                  <p class="text-lg font-bold text-primary">FoodTally</p>
                  <p class="text-sm text-primary-light leading-snug">AI-powered calorie tracking with voice, text, and photo</p>
                </div>
              </router-link>
            </div>
          </div>

          <!-- SaaS -->
          <div class="mt-8">
            <h3 class="text-sm font-semibold text-primary-light/70 uppercase tracking-wider mb-3">SaaS</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://bcpflow.com"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-5 rounded-2xl p-5 bg-secondary-dark/50 border border-primary/20 hover:border-primary/35 hover:bg-secondary-dark/80 transition-all duration-200 cursor-pointer"
              >
                <img src="/app-logos/bcpflow/bcpflow-logo.svg" alt="BCP Flow Logo" class="w-16 h-16 object-contain rounded-xl flex-shrink-0" />
                <div>
                  <p class="text-lg font-bold text-primary">BCP Flow</p>
                  <p class="text-sm text-primary-light leading-snug">Business continuity planning with team management and exports</p>
                </div>
              </a>
              <a
                href="https://bentobook.io"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-5 rounded-2xl p-5 bg-secondary-dark/50 border border-primary/20 hover:border-primary/35 hover:bg-secondary-dark/80 transition-all duration-200 cursor-pointer"
              >
                <img src="/app-logos/bentobook-logo.webp" alt="BentoBook Logo" class="w-16 h-16 object-contain rounded-xl flex-shrink-0" />
                <div>
                  <p class="text-lg font-bold text-primary">BentoBook</p>
                  <p class="text-sm text-primary-light leading-snug">Trading journal to track, analyze, and improve your trades</p>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>

    <!-- Footer with Legal Links -->
    <footer class="bg-primary-dark text-secondary-light py-6 flex-shrink-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center items-center gap-4 text-sm">
          <router-link 
            to="/privacy" 
            class="footer-link hover:text-secondary transition-colors"
          >
            Privacy Policy
          </router-link>
          <span class="text-secondary/50">|</span>
          <router-link 
            to="/terms" 
            class="footer-link hover:text-secondary transition-colors"
          >
            Terms of Service
          </router-link>
          <span class="text-secondary/50">|</span>
          <router-link 
            to="/cookies" 
            class="footer-link hover:text-secondary transition-colors"
          >
            Cookie Policy
          </router-link>
          <span class="text-secondary/50">|</span>
          <router-link 
            to="/dmca" 
            class="footer-link hover:text-secondary transition-colors"
          >
            DMCA
          </router-link>
          <span class="text-secondary/50">|</span>
          <router-link 
            to="/aup" 
            class="footer-link hover:text-secondary transition-colors"
          >
            Acceptable Use
          </router-link>
        </div>
        <div class="text-center mt-6 text-secondary/70 text-xs">
          © 2025 Pomkatsu. All rights reserved.
        </div>
      </div>
    </footer>

    <!-- Contact Form Modal -->
    <ContactForm 
      v-if="showContactForm"
      @close="closeContactForm"
    />
  </div>
</template>

<style scoped>
.footer-link {
  position: relative;
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.footer-link:hover::after {
  width: 100%;
}
</style>