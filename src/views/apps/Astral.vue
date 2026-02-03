<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ContactForm from '../../components/ContactForm.vue'

const showContactForm = ref(false)
const scrolled = ref(false)

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

const topics = [
  { name: 'Ask Me Anything', description: 'Open-ended cosmic guidance on any topic', image: '/app-logos/astral/ask-me-anything-card-bg.png' },
  { name: 'Love Match', description: 'Explore romantic compatibility and connections', image: '/app-logos/astral/love-match-card-bg.png' },
  { name: 'Dream Decoder', description: 'Uncover the meaning behind your dreams', image: '/app-logos/astral/dream-decoder-card-bg.png' },
  { name: 'Friend Vibes', description: 'Understand your friendships through the stars', image: '/app-logos/astral/friend-vibes-card-bg.png' },
  { name: 'Cosmic Events', description: 'Stay aligned with planetary movements', image: '/app-logos/astral/cosmic-events-card-bg.png' },
  { name: 'Astro Travel', description: 'Discover destinations written in your stars', image: '/app-logos/astral/astro-travel-card-bg.png' },
  { name: 'Career Compass', description: 'Navigate your professional path with cosmic insight', image: '/app-logos/astral/career-compass-card-bg.png' },
  { name: 'Soul Growth', description: 'Deepen your spiritual journey and self-awareness', image: '/app-logos/astral/soul-growth-card-bg.png' },
]
</script>

<template>
  <div class="min-h-screen text-white relative">
    <!-- Full-page background -->
    <div class="fixed inset-0 -z-10">
      <img
        src="/app-logos/astral/background.png"
        alt=""
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-astral-bg/40"></div>
    </div>

    <!-- Navigation -->
    <nav
      class="fixed w-full z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300"
      :class="scrolled ? 'bg-astral-header/80 backdrop-blur-md border-white/10' : 'bg-transparent border-transparent backdrop-blur-none'"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <router-link to="/" class="text-2xl font-bold text-white hover:text-astral-gold transition-colors">
            Pomkatsu
          </router-link>
          <button
            @click="showContactForm = true"
            class="px-6 py-2 bg-astral-deep text-white rounded-lg hover:bg-astral-cosmic transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-28 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Avatar illustration -->
        <div class="mb-4 animate-float">
          <img
            src="/app-logos/astral/avatar.svg"
            alt="Astral Avatar"
            class="w-28 h-28 sm:w-36 sm:h-36 mx-auto"
          />
        </div>

        <h1 class="text-4xl sm:text-5xl font-bold mb-3">Astral</h1>

        <p class="text-xl sm:text-2xl font-semibold mb-3 text-white/90">
          Let the stars guide your journey
        </p>
        <p class="text-base sm:text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          Your personal astrology companion — tarot readings, AI-generated soulmate portraits, zodiac insights, and cosmic guidance all in one app.
        </p>

        <!-- Store buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <!-- App Store button -->
          <a
            href="#"
            class="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-200 font-semibold min-w-[180px]"
          >
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div class="text-left">
              <div class="text-xs opacity-80">Download on the</div>
              <div class="text-base font-bold leading-tight">App Store</div>
            </div>
          </a>

          <!-- Google Play button (disabled) -->
          <div class="relative">
            <div
              class="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 text-white/50 rounded-xl min-w-[180px] pointer-events-none"
            >
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs opacity-80">Get it on</div>
                <div class="text-base font-bold leading-tight">Google Play</div>
              </div>
            </div>
            <span class="absolute -top-2 -right-2 bg-astral-cosmic text-white text-xs font-bold px-2 py-0.5 rounded-full">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="max-w-4xl mx-auto px-8"><div class="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div>

    <!-- Screenshots Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-3 animate-fade-in">
          See It in Action
        </h2>
        <p class="text-center text-white/60 mb-12 max-w-2xl mx-auto text-lg">
          A glimpse into the Astral experience
        </p>

        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div
            v-for="n in 4"
            :key="n"
            class="screenshot-placeholder relative overflow-hidden rounded-2xl aspect-[9/16] flex items-center justify-center"
          >
            <div class="absolute inset-0 bg-gradient-to-b from-astral-card/60 to-astral-deep/60"></div>
            <div class="relative z-10 text-center px-4">
              <svg class="w-12 h-12 mx-auto mb-3 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <p class="text-white/40 text-sm font-medium">Screenshot coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="max-w-4xl mx-auto px-8"><div class="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div>

    <!-- Features Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-3 animate-fade-in">
          Explore the Cosmos
        </h2>
        <p class="text-center text-white/60 mb-12 max-w-2xl mx-auto text-lg">
          Discover the features that make Astral your ultimate astrology companion
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          <!-- Tarot Readings -->
          <div class="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl feature-card hover:bg-white/10 transition-colors duration-300">
            <div class="w-12 h-12 bg-astral-cosmic/30 border border-astral-cosmic/40 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-astral-gold" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <path d="M12 6l1.5 3 3.5.5-2.5 2.5.5 3.5L12 14l-3 1.5.5-3.5L7 9.5l3.5-.5L12 6z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-2">Tarot Readings</h3>
            <p class="text-white/60 text-sm leading-relaxed">Multiple spread types including Daily, 3-Card, and Celtic Cross. Ask custom questions and receive AI-powered interpretations with the full 78-card Rider-Waite deck.</p>
          </div>

          <!-- AI Soulmate Generator -->
          <div class="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl feature-card hover:bg-white/10 transition-colors duration-300">
            <div class="w-12 h-12 bg-astral-cosmic/30 border border-astral-cosmic/40 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-astral-gold" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12 4 12 4C12 4 12.76 3 14.5 3C17.58 3 20 5.42 20 8.5C20 13.5 12 21 12 21Z" />
                <circle cx="9" cy="9" r="1" />
                <circle cx="15" cy="9" r="1" />
                <path d="M9.5 13C9.5 13 10.5 14.5 12 14.5C13.5 14.5 14.5 13 14.5 13" />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-2">AI Soulmate Generator</h3>
            <p class="text-white/60 text-sm leading-relaxed">Discover your cosmic match with AI-generated portraits in 5 art styles — Realistic, Sketch, Anime, Ethereal, and Vintage — influenced by your zodiac sign.</p>
          </div>

          <!-- Zodiac & Horoscopes -->
          <div class="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl feature-card hover:bg-white/10 transition-colors duration-300">
            <div class="w-12 h-12 bg-astral-cosmic/30 border border-astral-cosmic/40 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-astral-gold" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="3" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="21" />
                <line x1="3" y1="12" x2="5" y2="12" />
                <line x1="19" y1="12" x2="21" y2="12" />
                <line x1="5.6" y1="5.6" x2="7" y2="7" />
                <line x1="17" y1="17" x2="18.4" y2="18.4" />
                <line x1="5.6" y1="18.4" x2="7" y2="17" />
                <line x1="17" y1="7" x2="18.4" y2="5.6" />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-2">Zodiac & Horoscopes</h3>
            <p class="text-white/60 text-sm leading-relaxed">Personal readings based on your birth chart, pet horoscopes, and compatibility analysis to understand your cosmic connections.</p>
          </div>

          <!-- Cosmic AI Chat -->
          <div class="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl feature-card hover:bg-white/10 transition-colors duration-300">
            <div class="w-12 h-12 bg-astral-cosmic/30 border border-astral-cosmic/40 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-astral-gold" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                <path d="M9 12l1.5 1.5 3-3" opacity="0.6" />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-2">Cosmic AI Chat</h3>
            <p class="text-white/60 text-sm leading-relaxed">8 guided conversation topics covering love, career, dreams, and more — powered by astrology-aware AI for personalized cosmic guidance.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="max-w-4xl mx-auto px-8"><div class="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div>

    <!-- Topics Grid -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-3 animate-fade-in">
          Cosmic Conversations
        </h2>
        <p class="text-center text-white/60 mb-12 max-w-2xl mx-auto text-lg">
          8 guided AI topics to explore every dimension of your cosmic journey
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <div
            v-for="topic in topics"
            :key="topic.name"
            class="topic-card relative overflow-hidden rounded-xl group cursor-default aspect-square"
          >
            <img
              :src="topic.image"
              :alt="topic.name"
              class="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
            <!-- Hover glow ring -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl ring-1 ring-astral-cosmic/50 shadow-[0_0_15px_rgba(155,89,182,0.3)]"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section divider -->
    <div class="max-w-4xl mx-auto px-8"><div class="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div></div>

    <!-- CTA Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to discover what the stars have in store?
        </h2>
        <p class="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
          Download Astral today and begin your cosmic journey with personalized readings, AI-powered insights, and celestial guidance.
        </p>

        <!-- Store buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#"
            class="inline-flex items-center gap-3 px-6 py-3 bg-astral-deep text-white rounded-xl hover:bg-astral-cosmic transition-all duration-200 font-semibold min-w-[180px]"
          >
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div class="text-left">
              <div class="text-xs opacity-80">Download on the</div>
              <div class="text-base font-bold leading-tight">App Store</div>
            </div>
          </a>

          <div class="relative">
            <div
              class="inline-flex items-center gap-3 px-6 py-3 bg-astral-deep/40 text-white/50 rounded-xl min-w-[180px] pointer-events-none"
            >
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs opacity-80">Get it on</div>
                <div class="text-base font-bold leading-tight">Google Play</div>
              </div>
            </div>
            <span class="absolute -top-2 -right-2 bg-astral-cosmic text-white text-xs font-bold px-2 py-0.5 rounded-full">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-astral-deep/40 backdrop-blur-sm py-8 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center items-center gap-4 text-sm">
          <router-link to="/privacy" class="astral-footer-link text-white/60 hover:text-white transition-colors">
            Privacy Policy
          </router-link>
          <span class="text-white/30">|</span>
          <router-link to="/terms" class="astral-footer-link text-white/60 hover:text-white transition-colors">
            Terms of Service
          </router-link>
          <span class="text-white/30">|</span>
          <router-link to="/cookies" class="astral-footer-link text-white/60 hover:text-white transition-colors">
            Cookie Policy
          </router-link>
          <span class="text-white/30">|</span>
          <router-link to="/dmca" class="astral-footer-link text-white/60 hover:text-white transition-colors">
            DMCA
          </router-link>
          <span class="text-white/30">|</span>
          <router-link to="/aup" class="astral-footer-link text-white/60 hover:text-white transition-colors">
            Acceptable Use
          </router-link>
        </div>
        <div class="text-center mt-6 text-white/40 text-xs">
          &copy; 2025 Pomkatsu. All rights reserved.
        </div>
      </div>
    </footer>

    <!-- Contact Form Modal -->
    <ContactForm
      v-if="showContactForm"
      @close="showContactForm = false"
    />
  </div>
</template>

<style scoped>
/* Floating animation for avatar */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Fade-in animation */
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
.animate-fade-in {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Feature cards stagger */
.feature-card {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
.feature-card:nth-child(1) { animation-delay: 0.1s; }
.feature-card:nth-child(2) { animation-delay: 0.2s; }
.feature-card:nth-child(3) { animation-delay: 0.3s; }
.feature-card:nth-child(4) { animation-delay: 0.4s; }

/* Topic cards stagger */
.topic-card {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
.topic-card:nth-child(1) { animation-delay: 0.05s; }
.topic-card:nth-child(2) { animation-delay: 0.1s; }
.topic-card:nth-child(3) { animation-delay: 0.15s; }
.topic-card:nth-child(4) { animation-delay: 0.2s; }
.topic-card:nth-child(5) { animation-delay: 0.25s; }
.topic-card:nth-child(6) { animation-delay: 0.3s; }
.topic-card:nth-child(7) { animation-delay: 0.35s; }
.topic-card:nth-child(8) { animation-delay: 0.4s; }

/* Screenshot placeholders stagger */
.screenshot-placeholder {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}
.screenshot-placeholder:nth-child(1) { animation-delay: 0.15s; }
.screenshot-placeholder:nth-child(2) { animation-delay: 0.25s; }
.screenshot-placeholder:nth-child(3) { animation-delay: 0.35s; }
.screenshot-placeholder:nth-child(4) { animation-delay: 0.45s; }

/* Footer link underline animation */
.astral-footer-link {
  position: relative;
}
.astral-footer-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}
.astral-footer-link:hover::after {
  width: 100%;
}
</style>
