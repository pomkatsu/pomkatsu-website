<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import AppLayout from './apps/AppLayout.vue'
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
const appId = domainConfig?.appId || null

// Pick the AppLayout variant for nav/footer theming
const layoutVariant = computed(() => domainConfig?.layoutVariant || 'default')
const isSeedbook = computed(() => appId === 'seedbook')

// CSS custom properties for legal page content theming — one source of truth
const themeVars = computed(() => {
  // SeedBook: warm parch background, forest green text, clay accents
  if (isSeedbook.value) {
    return {
      '--legal-text': '#1B4332',
      '--legal-text-secondary': 'rgba(27, 67, 50, 0.78)',
      '--legal-text-strong': '#0F2A1F',
      '--legal-bg-box': '#F5F1E8',
      '--legal-bg-surface': '#FAFAF5',
      '--legal-bg-surface-alpha': 'rgba(245, 241, 232, 0.6)',
      '--legal-bg-surface-hover': 'rgba(245, 241, 232, 0.9)',
      '--legal-bg-surface-active': '#F0EADB',
      '--legal-border': '#E8EDE8',
      '--legal-border-accent': '#A05C42',
      '--legal-link': '#A05C42',
      '--legal-link-hover': '#C17A5C',
      '--legal-link-border': 'rgba(160, 92, 66, 0.45)',
      '--legal-shadow': 'rgba(27, 67, 50, 0.06)',
      '--legal-scrollbar': 'rgba(27, 67, 50, 0.3)',
      '--legal-warning-bg': 'rgba(160, 92, 66, 0.1)',
      '--legal-warning-text': '#1B4332',
      '--legal-warning-heading': '#A05C42',
    }
  }
  // Other app domains (Astral, Destina) — dark purple
  if (isAppDomain) {
    return {
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
    }
  }
  // Default (pomkatsu.com) — cream/brown
  return {
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
})

useSeoMeta({
  title: () => `${props.title} — ${navLogo}`,
})

const showScrollTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  setTimeout(() => {
    window.dispatchEvent(new Event('scroll'))
  }, 100)
}

onMounted(() => {
  const handleScroll = () => {
    showScrollTop.value = window.scrollY > 500
  }

  window.addEventListener('scroll', handleScroll, { passive: true })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <AppLayout :variant="layoutVariant">
    <div
      class="legal-root"
      :class="{ 'legal-root--seedbook': isSeedbook }"
      :style="themeVars"
    >
      <!-- Content -->
      <main class="pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <!-- Title block -->
          <div class="mb-10">
            <div
              v-if="isSeedbook"
              class="flex items-center gap-3 mb-6"
            >
              <span class="h-px w-10 bg-seedbook-clay"></span>
              <span class="font-mono text-[11px] tracking-[0.18em] uppercase text-seedbook-clay">
                legal · {{ title.toLowerCase() }}
              </span>
            </div>

            <h1
              :class="
                isSeedbook
                  ? 'font-display text-5xl sm:text-6xl font-semibold text-seedbook-forest tracking-tight leading-[0.98]'
                  : 'text-3xl md:text-4xl font-bold animate-fadeInUp'
              "
              :style="!isSeedbook ? { color: 'var(--legal-text-strong)' } : {}"
            >
              {{ title }}
            </h1>
          </div>

          <div
            :class="[
              'prose prose-lg max-w-none animate-fadeInContent',
              isSeedbook ? 'seedbook-prose' : '',
            ]"
            :style="{ color: 'var(--legal-text-secondary)' }"
          >
            <slot></slot>
          </div>
        </div>
      </main>

      <!-- Floating Scroll to Top Button -->
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="scroll-top-btn"
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
    </div>
  </AppLayout>
</template>

<style scoped>
/* Root container inherits CSS vars */
.legal-root {
  min-height: calc(100vh - 80px);
}

/* Fade animations for non-seedbook variants */
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

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-fadeInContent {
  animation: fadeInContent 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

/* SeedBook-specific body font override on legal prose */
.legal-root--seedbook .seedbook-prose {
  font-family: 'Plus Jakarta Sans', Inter, system-ui, -apple-system, sans-serif;
}

/* Scroll-to-top button — theme-aware via CSS vars */
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 30;
  padding: 0.75rem;
  border-radius: 9999px;
  background: var(--legal-border-accent);
  color: var(--legal-bg-surface);
  box-shadow: 0 8px 24px var(--legal-shadow);
  transition: transform 0.2s ease, background-color 0.2s ease;
  animation: bounceIn 0.4s ease-out;
}

.scroll-top-btn:hover {
  transform: scale(1.08);
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
</style>
