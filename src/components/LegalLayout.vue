<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ContactForm from './ContactForm.vue'

defineProps({
  title: {
    type: String,
    required: true
  }
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
  <div class="min-h-screen bg-secondary">
    <!-- Navigation -->
    <nav class="fixed w-full top-0 bg-secondary z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-2xl font-bold text-primary hover:text-primary-light transition-colors duration-200">
              Pomkatsu
            </router-link>
          </div>
          <button
            @click="openContactForm"
            class="px-6 py-2 bg-primary text-secondary rounded-lg hover:bg-primary-light transition-colors duration-200"
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
          class="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-all duration-300 mb-6 group animate-fadeIn xl:hidden"
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
        
        <h1 class="text-3xl md:text-4xl font-bold text-primary mb-8 animate-fadeInUp">{{ title }}</h1>
        <div class="prose prose-lg max-w-none text-primary-dark animate-fadeInContent">
          <slot></slot>
        </div>
      </div>
    </main>

    <!-- Floating Scroll to Top Button -->
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-30 p-3 bg-primary text-secondary rounded-full shadow-lg hover:bg-primary-light hover:scale-110 transition-all duration-300 animate-bounceIn"
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
    <footer class="bg-primary-dark text-secondary-light py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center items-center gap-4 text-sm">
          <router-link 
            to="/privacy" 
            :class="['footer-link', { 'footer-link-active': $route.path === '/privacy' }]"
          >
            Privacy Policy
          </router-link>
          <span class="text-secondary/50">|</span>
          <router-link 
            to="/terms" 
            :class="['footer-link', { 'footer-link-active': $route.path === '/terms' }]"
          >
            Terms of Service
          </router-link>
          <span class="text-secondary/50">|</span>
          <router-link 
            to="/cookies" 
            :class="['footer-link', { 'footer-link-active': $route.path === '/cookies' }]"
          >
            Cookie Policy
          </router-link>
          <span class="text-secondary/50">|</span>
          <router-link 
            to="/dmca" 
            :class="['footer-link', { 'footer-link-active': $route.path === '/dmca' }]"
          >
            DMCA
          </router-link>
          <span class="text-secondary/50">|</span>
          <router-link 
            to="/aup" 
            :class="['footer-link', { 'footer-link-active': $route.path === '/aup' }]"
          >
            Acceptable Use
          </router-link>
          <span class="text-secondary/50">|</span>
          <router-link 
            to="/eula" 
            :class="['footer-link', { 'footer-link-active': $route.path === '/eula' }]"
          >
            EULA
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
</style>