<script setup>
import { ref } from 'vue'
import ContactForm from '../ContactForm.vue'

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
    <nav class="w-full bg-secondary z-40 border-b border-secondary-dark">
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

    <!-- Main Content -->
    <main class="flex-1">
      <slot></slot>
    </main>

    <!-- Footer with Legal Links -->
    <footer class="bg-primary-dark text-secondary-light py-8">
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
          <span class="text-secondary/50">|</span>
          <router-link
            to="/eula"
            class="footer-link hover:text-secondary transition-colors"
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
