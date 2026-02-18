<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ContactForm from '../ContactForm.vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'mono'].includes(v),
  },
})

const showContactForm = ref(false)
const scrolled = ref(false)

const isMono = computed(() => props.variant === 'mono')

const navClass = computed(() => {
  if (scrolled.value) {
    return isMono.value
      ? 'bg-white/80 backdrop-blur-md border-gray-200'
      : 'bg-secondary/80 backdrop-blur-md border-secondary-dark'
  }
  return 'bg-transparent border-transparent backdrop-blur-none'
})

const onScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const openContactForm = () => {
  showContactForm.value = true
}

const closeContactForm = () => {
  showContactForm.value = false
}
</script>

<template>
  <div class="min-h-screen flex flex-col" :class="isMono ? 'bg-white' : 'bg-secondary'">
    <!-- Navigation -->
    <nav
      class="fixed w-full z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300"
      :class="navClass"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <router-link
              to="/"
              class="text-2xl font-bold transition-colors duration-200"
              :class="isMono ? 'text-gray-900 hover:text-gray-600' : 'text-primary hover:text-primary-light'"
            >
              Pomkatsu
            </router-link>
          </div>
          <button
            @click="openContactForm"
            class="px-6 py-2 rounded-lg transition-colors duration-200"
            :class="isMono ? 'bg-gray-900 text-white hover:bg-gray-700' : 'bg-primary text-secondary hover:bg-primary-light'"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-1 pt-16">
      <slot></slot>
    </main>

    <!-- Footer with Legal Links -->
    <footer
      class="py-8"
      :class="isMono ? 'bg-gray-900 text-gray-300' : 'bg-primary-dark text-secondary-light'"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center items-center gap-4 text-sm">
          <router-link
            to="/privacy"
            class="footer-link transition-colors"
            :class="isMono ? 'hover:text-white' : 'hover:text-secondary'"
          >
            Privacy Policy
          </router-link>
          <span :class="isMono ? 'text-gray-600' : 'text-secondary/50'">|</span>
          <router-link
            to="/terms"
            class="footer-link transition-colors"
            :class="isMono ? 'hover:text-white' : 'hover:text-secondary'"
          >
            Terms of Service
          </router-link>
          <span :class="isMono ? 'text-gray-600' : 'text-secondary/50'">|</span>
          <router-link
            to="/cookies"
            class="footer-link transition-colors"
            :class="isMono ? 'hover:text-white' : 'hover:text-secondary'"
          >
            Cookie Policy
          </router-link>
          <span :class="isMono ? 'text-gray-600' : 'text-secondary/50'">|</span>
          <router-link
            to="/dmca"
            class="footer-link transition-colors"
            :class="isMono ? 'hover:text-white' : 'hover:text-secondary'"
          >
            DMCA
          </router-link>
          <span :class="isMono ? 'text-gray-600' : 'text-secondary/50'">|</span>
          <router-link
            to="/aup"
            class="footer-link transition-colors"
            :class="isMono ? 'hover:text-white' : 'hover:text-secondary'"
          >
            Acceptable Use
          </router-link>
          <span :class="isMono ? 'text-gray-600' : 'text-secondary/50'">|</span>
          <router-link
            to="/eula"
            class="footer-link transition-colors"
            :class="isMono ? 'hover:text-white' : 'hover:text-secondary'"
          >
            EULA
          </router-link>
        </div>
        <div
          class="text-center mt-6 text-xs"
          :class="isMono ? 'text-gray-500' : 'text-secondary/70'"
        >
          &copy; 2025 Pomkatsu. All rights reserved.
        </div>
      </div>
    </footer>

    <!-- Contact Form Modal -->
    <ContactForm
      v-if="showContactForm"
      :variant="variant"
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
