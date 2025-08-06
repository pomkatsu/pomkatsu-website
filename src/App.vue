<script setup>
import { ref } from 'vue'
import ContactForm from './components/ContactForm.vue'

const showContactForm = ref(false)

const openContactForm = () => {
  showContactForm.value = true
}

const closeContactForm = () => {
  showContactForm.value = false
}
</script>

<template>
  <div class="min-h-screen bg-secondary">
    <!-- Navigation -->
    <nav class="fixed w-full top-0 bg-secondary z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <span class="text-2xl font-bold text-primary">
              Pomkatsu
            </span>
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

    <!-- Hero Section -->
    <main class="flex flex-col items-center justify-center min-h-screen px-4">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Logo -->
        <div class="mb-12">
          <img src="/pomkatsu-logo.png" alt="Pomkatsu Logo" class="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto object-contain" />
        </div>

        <!-- Apps Section -->
        <div class="mt-10 sm:mt-16 max-w-2xl mx-auto">
          <h2 class="text-xl font-bold text-primary">Our Apps</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div class="rounded-lg p-3 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
              <img src="/dt-logo.png" alt="EasyTranslate Logo" class="w-20 h-20 mx-auto object-contain" />
              <p class="text-base font-medium text-primary text-center">EasyTranslate</p>
            </div>
          </div>
        </div>

      </div>

    </main>

    <!-- Contact Form Modal -->
    <ContactForm 
      v-if="showContactForm"
      @close="closeContactForm"
    />
  </div>
</template>

<style>
/* Add any global styles here */
</style>