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
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Navigation -->
    <nav class="fixed w-full top-0 bg-white/80 backdrop-blur-lg shadow-sm z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <span class="text-2xl font-bold bg-gradient-to-r from-pomkatsu-600 to-pomkatsu-400 bg-clip-text text-transparent">
              Pomkatsu
            </span>
          </div>
          <button
            @click="openContactForm"
            class="px-6 py-2 bg-pomkatsu-600 text-white rounded-lg hover:bg-pomkatsu-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <main class="flex flex-col items-center justify-center min-h-screen px-4">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Logo Placeholder -->
        <div class="mb-8 relative">
          <div class="w-48 h-48 mx-auto bg-gradient-to-br from-pomkatsu-400 to-pomkatsu-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <svg class="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="absolute -inset-1 bg-gradient-to-br from-pomkatsu-400 to-pomkatsu-600 rounded-3xl blur-xl opacity-30"></div>
        </div>

        <!-- Company Name -->
        <h1 class="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pomkatsu-700 to-pomkatsu-500 bg-clip-text text-transparent">
          Pomkatsu
        </h1>

        <!-- Tagline -->
        <p class="text-xl md:text-2xl text-gray-600 mb-8">
          Crafting Innovative Mobile Experiences
        </p>

        <!-- Description -->
        <p class="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
          We specialize in developing cutting-edge mobile applications that transform ideas into digital reality.
          From concept to deployment, we bring your vision to life.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="openContactForm"
            class="px-8 py-3 bg-pomkatsu-600 text-white rounded-lg hover:bg-pomkatsu-700 transition-all duration-200 shadow-lg hover:shadow-xl text-lg font-semibold"
          >
            Start Your Project
          </button>
          <button
            class="px-8 py-3 bg-white text-pomkatsu-600 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl text-lg font-semibold border border-pomkatsu-200"
          >
            Learn More
          </button>
        </div>
      </div>

      <!-- Features -->
      <div class="absolute bottom-8 left-0 right-0">
        <div class="max-w-4xl mx-auto px-4">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div class="p-4">
              <div class="text-pomkatsu-600 text-2xl font-bold">iOS & Android</div>
              <div class="text-gray-500 text-sm">Native Development</div>
            </div>
            <div class="p-4">
              <div class="text-pomkatsu-600 text-2xl font-bold">UI/UX Design</div>
              <div class="text-gray-500 text-sm">Beautiful Interfaces</div>
            </div>
            <div class="p-4">
              <div class="text-pomkatsu-600 text-2xl font-bold">Full Support</div>
              <div class="text-gray-500 text-sm">End-to-End Service</div>
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