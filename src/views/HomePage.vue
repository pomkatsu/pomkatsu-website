<script setup>
import { ref } from 'vue'
import ContactForm from '../components/ContactForm.vue'

const showContactForm = ref(false)

const openContactForm = () => {
  showContactForm.value = true
}

const closeContactForm = () => {
  showContactForm.value = false
}
</script>

<template>
  <div class="h-screen bg-secondary flex flex-col overflow-hidden">
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
    <main class="flex-1 flex flex-col items-center justify-center px-4 overflow-y-auto">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Logo -->
        <div class="mb-8">
          <img src="/pomkatsu-logo.png" alt="Pomkatsu Logo" class="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto object-contain" />
        </div>

        <!-- Apps Section -->
        <div class="max-w-2xl mx-auto">
          <h2 class="text-xl font-bold text-primary text-center">Our Apps</h2>
          <div class="grid grid-cols-1 place-items-center mt-4">
            <div class="rounded-lg p-3 hover:bg-white/20 transition-colors cursor-pointer transform hover:scale-105">
              <img src="/dt-logo.png" alt="EasyTranslate Logo" class="w-20 h-20 mx-auto object-contain" />
              <p class="text-base font-medium text-primary text-center">EasyTranslate</p>
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