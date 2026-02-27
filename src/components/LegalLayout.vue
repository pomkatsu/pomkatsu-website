<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import ContactForm from './ContactForm.vue'
import { getDomainConfig } from '../config/domains'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const domainConfig = getDomainConfig()
const isAppDomain = !!domainConfig
const navLogo = domainConfig?.navLogo || 'Pomkatsu'

// CSS custom properties for legal page theming — one source of truth
const themeVars = isAppDomain ? {
  '--legal-text': 'rgba(255, 255, 255, 0.9)',
  '--legal-text-secondary': 'rgba(255, 255, 255, 0.7)',
  '--legal-text-strong': '#ffffff',
  '--legal-bg-box': 'rgba(255, 255, 255, 0.06)',
  '--legal-bg-surface': 'rgba(255, 255, 255, 0.04)',
  '--legal-bg-surface-alpha': 'rgba(255, 255, 255, 0.06)',
  '--legal-bg-surface-hover': 'rgba(255, 255, 255, 0.08)',
  '--legal-bg-surface-active': 'rgba(255, 255, 255, 0.12)',
  '--legal-border': 'rgba(255, 255, 255, 0.12)',
  '--legal-border-accent': 'rgba(155, 89, 182, 0.6)',
  '--legal-link': '#EFDB5E',
  '--legal-link-hover': '#f5e88a',
  '--legal-link-border': 'rgba(239, 219, 94, 0.5)',
  '--legal-shadow': 'rgba(0, 0, 0, 0.2)',
  '--legal-scrollbar': 'rgba(255, 255, 255, 0.3)',
  '--legal-warning-bg': 'rgba(190, 18, 60, 0.15)',
  '--legal-warning-text': '#fca5a5',
  '--legal-warning-heading': '#fca5a5',
} : {
  '--legal-text': '#46301C',
  '--legal-text-secondary': '#5A3E26',
  '--legal-text-strong': '#2E1F12',
  '--legal-bg-box': '#FFF8ED',
  '--legal-bg-surface': '#FCF1DC',
  '--legal-bg-surface-alpha': 'rgba(252, 241, 220, 0.5)',
  '--legal-bg-surface-hover': 'rgba(252, 241, 220, 0.6)',
  '--legal-bg-surface-active': '#F5E5C8',
  '--legal-border': '#F5E5C8',
  '--legal-border-accent': '#5A3E26',
  '--legal-link': '#46301C',
  '--legal-link-hover': '#2E1F12',
  '--legal-link-border': '#5A3E26',
  '--legal-shadow': 'rgba(70, 48, 28, 0.05)',
  '--legal-scrollbar': '#5A3E26',
  '--legal-warning-bg': '#fecdd3',
  '--legal-warning-text': '#2E1F12',
  '--legal-warning-heading': '#881337',
}

useSeoMeta({
  title: () => `${props.title} — ${navLogo}`,
})

const showContactForm = ref(false)
const showScrollTop = ref(false)

const openContactForm = () => {
  showContactForm.value = true
}

const closeContactForm = () => {
  showContactForm.value = false
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  
  // Trigger a scroll event after animation to update TOC
  setTimeout(() => {
    window.dispatchEvent(new Event('scroll'))
  }, 100)
}

onMounted(() => {
  const handleScroll = () => {
    // Show scroll-to-top button after scrolling down 500px
    showScrollTop.value = window.scrollY > 500
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <div :class="['min-h-screen', isAppDomain ? 'bg-astral-deep text-white' : 'bg-secondary']" :style="themeVars">
    <!-- Navigation -->
    <nav :class="['fixed w-full top-0 z-40', isAppDomain ? 'bg-astral-header' : 'bg-secondary']">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <router-link to="/" :class="['text-2xl font-bold transition-colors duration-200', isAppDomain ? 'text-white hover:text-astral-gold' : 'text-primary hover:text-primary-light']">
              {{ navLogo }}
            </router-link>
          </div>
          <button
            @click="openContactForm"
            :class="['px-6 py-2 rounded-lg transition-colors duration-200', isAppDomain ? 'bg-astral-deep text-white hover:bg-astral-cosmic' : 'bg-primary text-secondary hover:bg-primary-light']"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>


    <!-- Content -->
    <main class="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Mobile Back Button (always visible on mobile) -->
        <router-link
          to="/"
          :class="['inline-flex items-center gap-2 transition-all duration-300 mb-6 group animate-fadeIn xl:hidden', isAppDomain ? 'text-white/70 hover:text-white' : 'text-primary hover:text-primary-light']"
        >
          <svg
            class="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span class="font-medium">Back to Home</span>
        </router-link>

        <h1 :class="['text-3xl md:text-4xl font-bold mb-8 animate-fadeInUp', isAppDomain ? 'text-white' : 'text-primary']">{{ title }}</h1>
        <div :class="['prose prose-lg max-w-none animate-fadeInContent', isAppDomain ? 'text-white/80 prose-headings:text-white prose-strong:text-white prose-a:text-astral-gold' : 'text-primary-dark']">
          <slot></slot>
        </div>
      </div>
    </main>

    <!-- Floating Scroll to Top Button -->
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      :class="['fixed bottom-8 right-8 z-30 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-bounceIn', isAppDomain ? 'bg-astral-cosmic text-white hover:bg-astral-light' : 'bg-primary text-secondary hover:bg-primary-light']"
      aria-label="Scroll to top"
    >
      <svg 
        class="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>

    <!-- Footer with Legal Links -->
    <footer :class="['py-8 border-t', isAppDomain ? 'bg-astral-deep/60 border-white/10' : 'bg-primary-dark text-secondary-light']">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center items-center gap-4 text-sm">
          <router-link
            to="/privacy"
            :class="[isAppDomain ? 'astral-footer-link' : 'footer-link', { [isAppDomain ? 'astral-footer-link-active' : 'footer-link-active']: $route.path === '/privacy' }]"
          >
            Privacy Policy
          </router-link>
          <span :class="isAppDomain ? 'text-white/30' : 'text-secondary/50'">|</span>
          <router-link
            to="/terms"
            :class="[isAppDomain ? 'astral-footer-link' : 'footer-link', { [isAppDomain ? 'astral-footer-link-active' : 'footer-link-active']: $route.path === '/terms' }]"
          >
            Terms of Service
          </router-link>
          <span :class="isAppDomain ? 'text-white/30' : 'text-secondary/50'">|</span>
          <router-link
            to="/cookies"
            :class="[isAppDomain ? 'astral-footer-link' : 'footer-link', { [isAppDomain ? 'astral-footer-link-active' : 'footer-link-active']: $route.path === '/cookies' }]"
          >
            Cookie Policy
          </router-link>
          <span :class="isAppDomain ? 'text-white/30' : 'text-secondary/50'">|</span>
          <router-link
            to="/dmca"
            :class="[isAppDomain ? 'astral-footer-link' : 'footer-link', { [isAppDomain ? 'astral-footer-link-active' : 'footer-link-active']: $route.path === '/dmca' }]"
          >
            DMCA
          </router-link>
          <span :class="isAppDomain ? 'text-white/30' : 'text-secondary/50'">|</span>
          <router-link
            to="/aup"
            :class="[isAppDomain ? 'astral-footer-link' : 'footer-link', { [isAppDomain ? 'astral-footer-link-active' : 'footer-link-active']: $route.path === '/aup' }]"
          >
            Acceptable Use
          </router-link>
          <span :class="isAppDomain ? 'text-white/30' : 'text-secondary/50'">|</span>
          <router-link
            to="/eula"
            :class="[isAppDomain ? 'astral-footer-link' : 'footer-link', { [isAppDomain ? 'astral-footer-link-active' : 'footer-link-active']: $route.path === '/eula' }]"
          >
            EULA
          </router-link>
        </div>
        <div :class="['text-center mt-6 text-xs', isAppDomain ? 'text-white/40' : 'text-secondary/70']">
          &copy; 2025 Pomkatsu. All rights reserved.
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

@keyframes fadeInContent {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounceIn {
  from {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-fadeInContent {
  animation: fadeInContent 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-fadeIn {
  animation: fadeIn 0.4s ease-out forwards;
}

.animate-slideIn {
  animation: slideIn 0.3s ease-out forwards;
}

.animate-bounceIn {
  animation: bounceIn 0.4s ease-out forwards;
}

.footer-link {
  position: relative;
  color: #FCF1DC;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #FFF8ED;
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
}

.footer-link:hover::after {
  width: 100%;
}

.footer-link-active {
  color: #FFF8ED;
}

.footer-link-active::after {
  width: 100%;
}

/* Astral domain footer links */
.astral-footer-link {
  position: relative;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.2s ease;
}

.astral-footer-link:hover {
  color: white;
}

.astral-footer-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
}

.astral-footer-link:hover::after {
  width: 100%;
}

.astral-footer-link-active {
  color: white;
}

.astral-footer-link-active::after {
  width: 100%;
}
</style>