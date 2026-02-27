<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeSection = ref('')
const sections = ref([])
const showStickyBackButton = ref(false)
let isNavigating = false

// Watch for route changes to reset everything
watch(() => route.path, () => {
  nextTick(() => {
    initializeTOC()
  })
})

const initializeTOC = () => {
  // Reset state
  activeSection.value = ''
  sections.value = []
  
  // Wait for DOM to be ready
  setTimeout(() => {
    // Get all h2 headings from the legal content
    const headings = document.querySelectorAll('.legal-content h2')
    sections.value = Array.from(headings).map(h => ({
      id: h.id,
      text: h.textContent,
      element: h
    }))
    
    // Set the first section as active initially
    if (sections.value.length > 0) {
      activeSection.value = sections.value[0].id
    }
  }, 100)
}

onMounted(() => {
  initializeTOC()
  
  // Simpler scroll handler
  const handleScroll = () => {
    // Show sticky back button after scrolling down 100px
    showStickyBackButton.value = window.scrollY > 100
    
    // Don't update during programmatic navigation
    if (isNavigating) return
    
    const scrollTop = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    
    // Check if we're at the very top of the page
    if (scrollTop < 50 && sections.value.length > 0) {
      // If at top, highlight the first section
      activeSection.value = sections.value[0].id
      return
    }
    
    // Check if we're at the bottom of the page
    const isAtBottom = (scrollTop + windowHeight) >= (documentHeight - 50)
    
    if (isAtBottom && sections.value.length > 0) {
      // If at bottom, highlight the last section
      activeSection.value = sections.value[sections.value.length - 1].id
      return
    }
    
    // Otherwise, find the current section
    let currentSection = sections.value[0]?.id || ''
    
    for (const section of sections.value) {
      const element = section.element
      if (!element) continue
      
      const rect = element.getBoundingClientRect()
      // Check if the section heading is above the middle of the viewport
      if (rect.top <= window.innerHeight / 2) {
        currentSection = section.id
      } else {
        break
      }
    }
    
    if (currentSection !== activeSection.value) {
      activeSection.value = currentSection
    }
  }
  
  // Add scroll listener with throttling
  let scrollTimer = null
  const throttledScroll = () => {
    if (!scrollTimer) {
      scrollTimer = setTimeout(() => {
        handleScroll()
        scrollTimer = null
      }, 100)
    }
  }
  
  window.addEventListener('scroll', throttledScroll, { passive: true })
  
  // Run handleScroll immediately to set initial state
  handleScroll()
  
  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('scroll', throttledScroll)
    if (scrollTimer) clearTimeout(scrollTimer)
  })
})

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (!element) return
  
  // Set flag to prevent scroll handler from interfering
  isNavigating = true
  
  // Set active immediately for visual feedback
  activeSection.value = id
  
  // Special handling for the first section - scroll to actual top
  if (sections.value[0]?.id === id) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } else {
    // For other sections, scroll with offset for header
    const offset = 90
    const elementTop = element.getBoundingClientRect().top + window.scrollY
    const scrollPosition = elementTop - offset
    
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    })
  }
  
  // Reset flag after scroll animation completes
  // Using 800ms which should be enough for smooth scroll to complete
  setTimeout(() => {
    isNavigating = false
  }, 800)
}
</script>

<template>
  <aside class="toc-sidebar">
    <!-- Sticky Back to Home Button -->
    <router-link 
      v-if="showStickyBackButton"
      to="/" 
      class="back-button-sticky"
    >
      <svg 
        class="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span>Back to Home</span>
    </router-link>
    
    <div class="toc-content">
      <h3 class="toc-title">Table of Contents</h3>
      <nav class="toc-nav" v-if="sections.length > 0">
        <button
          v-for="(section, index) in sections"
          :key="section.id"
          @click="scrollToSection(section.id)"
          :class="['toc-link', { active: activeSection === section.id }]"
          type="button"
        >
          <span class="toc-number">{{ index + 1 }}.</span>
          <span class="toc-text">{{ section.text.replace(/^\d+\.\s*/, '') }}</span>
        </button>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
/* Table of Contents Sidebar */
.toc-sidebar {
  display: none;
}

@media (min-width: 1280px) {
  .toc-sidebar {
    display: block;
    position: sticky;
    top: 100px;
    height: fit-content;
    max-height: calc(100vh - 120px);
    width: 280px;
    flex-shrink: 0;
    overflow-y: auto;
  }
}

/* Back to Home Button */
.back-button-sticky {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.625rem 0.875rem;
  background: var(--legal-bg-surface-alpha);
  backdrop-filter: blur(8px);
  border: 1px solid var(--legal-border);
  border-radius: 8px;
  color: var(--legal-text);
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  animation: slideDown 0.3s ease-out forwards;
}

.back-button-sticky:hover {
  background: var(--legal-bg-surface);
  color: var(--legal-text-strong);
  border-color: var(--legal-border-accent);
}

.back-button-sticky:hover svg {
  transform: translateX(-4px);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.toc-content {
  background: var(--legal-bg-surface-alpha);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid var(--legal-border);
}

.toc-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--legal-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.toc-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.toc-link {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  text-align: left;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--legal-text-secondary);
  border: none;
  border-left: 2px solid transparent;
  transition: all 0.2s ease;
  background: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  width: 100%;
}

.toc-number {
  flex-shrink: 0;
  font-weight: 500;
  opacity: 0.7;
}

.toc-text {
  flex: 1;
  word-break: break-word;
}

.toc-link:hover {
  color: var(--legal-text);
  background-color: var(--legal-bg-surface-hover);
  border-left-color: var(--legal-border-accent);
}

.toc-link:hover .toc-number {
  opacity: 1;
}

.toc-link.active {
  color: var(--legal-text-strong);
  background-color: var(--legal-bg-surface-active);
  border-left-color: var(--legal-text);
  font-weight: 500;
}

.toc-link.active .toc-number {
  opacity: 1;
  font-weight: 600;
}

/* Scrollbar styling for TOC */
.toc-sidebar::-webkit-scrollbar {
  width: 6px;
}

.toc-sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.toc-sidebar::-webkit-scrollbar-thumb {
  background: var(--legal-scrollbar);
  border-radius: 3px;
  opacity: 0.5;
}

.toc-sidebar::-webkit-scrollbar-thumb:hover {
  opacity: 0.7;
}
</style>