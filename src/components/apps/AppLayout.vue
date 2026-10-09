<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ContactForm from '../ContactForm.vue'
import { getDomainConfig } from '../../config/domains.js'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'mono', 'easytranslate', 'myseedstory', 'certmatrix'].includes(v),
  },
  // Per-page routing for the contact form. Pass these from the page that
  // mounts AppLayout. Defaults route to the pomkatsu catch-all.
  contactFormName: {
    type: String,
    default: 'contact-pomkatsu',
  },
  contactRecipient: {
    type: String,
    default: 'support@pomkatsu.com',
  },
  // Footer legal links. A product with its own documents (CertMatrix) passes
  // its own set; every other page gets the shared Pomkatsu documents.
  legalLinks: {
    type: Array,
    default: () => [
      { to: '/privacy', label: 'Privacy Policy' },
      { to: '/terms', label: 'Terms of Service' },
      { to: '/cookies', label: 'Cookie Policy' },
      { to: '/dmca', label: 'DMCA' },
      { to: '/aup', label: 'Acceptable Use' },
      { to: '/eula', label: 'EULA' },
    ],
  },
})

const showContactForm = ref(false)
const scrolled = ref(false)

const isMono = computed(() => props.variant === 'mono')
const isEasyTranslate = computed(() => props.variant === 'easytranslate')
const isMyseedstory = computed(() => props.variant === 'myseedstory')
// CertMatrix (Carbon Light): warm wall, one purple accent, square corners.
const isCertmatrix = computed(() => props.variant === 'certmatrix')
// ContactForm has no CertMatrix skin; its neutral one sits well on the wall.
const contactVariant = computed(() => (isCertmatrix.value ? 'mono' : props.variant))

const domainConfig = getDomainConfig()
const navLogo = computed(() => domainConfig?.navLogo || 'Pomkatsu')

const navClass = computed(() => {
  if (scrolled.value) {
    if (isMyseedstory.value) return 'bg-myseedstory-parch/85 backdrop-blur-md border-myseedstory-parch-border'
    if (isCertmatrix.value) return 'bg-certmatrix-wall/85 backdrop-blur-md border-certmatrix-rule'
    if (isEasyTranslate.value) return 'bg-white/80 backdrop-blur-md border-et-border'
    if (isMono.value) return 'bg-white/80 backdrop-blur-md border-gray-200'
    return 'bg-secondary/80 backdrop-blur-md border-secondary-dark'
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
  <div class="min-h-screen flex flex-col" :class="isCertmatrix ? 'bg-certmatrix-wall' : isMyseedstory ? 'bg-myseedstory-parch font-sans' : isEasyTranslate ? 'bg-white' : isMono ? 'bg-white' : 'bg-secondary'">
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
              class="transition-colors duration-200"
              :class="isCertmatrix ? 'text-2xl font-bold text-certmatrix-ink hover:text-certmatrix-acc' : isMyseedstory ? 'font-display text-2xl font-semibold text-myseedstory-forest hover:text-myseedstory-clay tracking-tight' : isEasyTranslate ? 'text-2xl font-bold text-et-text hover:text-et-purple' : isMono ? 'text-2xl font-bold text-gray-900 hover:text-gray-600' : 'text-2xl font-bold text-primary hover:text-primary-light'"
            >
              {{ navLogo }}
            </router-link>
          </div>
          <button
            @click="openContactForm"
            class="px-6 py-2 transition-colors duration-200"
            :class="[isCertmatrix ? 'rounded-none' : 'rounded-lg', isCertmatrix ? 'bg-certmatrix-acc text-white hover:bg-certmatrix-acc-dark' : isMyseedstory ? 'bg-myseedstory-clay text-myseedstory-parch hover:bg-myseedstory-clay-light text-sm font-medium tracking-wide' : isEasyTranslate ? 'bg-et-purple text-white hover:bg-et-purple-dark' : isMono ? 'bg-gray-900 text-white hover:bg-gray-700' : 'bg-primary text-secondary hover:bg-primary-light']"
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
      class="py-10"
      :class="isCertmatrix ? 'bg-certmatrix-paper text-certmatrix-mut border-t border-certmatrix-rule' : isMyseedstory ? 'bg-myseedstory-forest-dark text-myseedstory-parch/70' : isEasyTranslate ? 'bg-et-text text-zinc-300' : isMono ? 'bg-gray-900 text-gray-300' : 'bg-primary-dark text-secondary-light'"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center items-center gap-4 text-sm">
          <template v-for="(link, index) in legalLinks" :key="link.to">
            <span
              v-if="index > 0"
              :class="isCertmatrix ? 'text-certmatrix-rule' : isMyseedstory ? 'text-myseedstory-parch/30' : isEasyTranslate ? 'text-zinc-600' : isMono ? 'text-gray-600' : 'text-secondary/50'"
            >|</span>
            <router-link
              :to="link.to"
              class="footer-link transition-colors"
              :class="isCertmatrix ? 'hover:text-certmatrix-acc' : isMyseedstory ? 'hover:text-myseedstory-clay-light' : isEasyTranslate ? 'hover:text-white' : isMono ? 'hover:text-white' : 'hover:text-secondary'"
            >
              {{ link.label }}
            </router-link>
          </template>
        </div>
        <div
          class="text-center mt-6 text-xs"
          :class="isCertmatrix ? 'text-certmatrix-mut' : isMyseedstory ? 'text-myseedstory-parch/50 font-mono tracking-wider uppercase' : isEasyTranslate ? 'text-zinc-500' : isMono ? 'text-gray-500' : 'text-secondary/70'"
        >
          &copy; 2025 Pomkatsu. All rights reserved.
        </div>
      </div>
    </footer>

    <!-- Contact Form Modal -->
    <ContactForm
      v-if="showContactForm"
      :variant="contactVariant"
      :form-name="contactFormName"
      :recipient="contactRecipient"
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
