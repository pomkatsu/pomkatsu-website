<script setup>
import AppLayout from '../../components/apps/AppLayout.vue'
import AppHero from '../../components/apps/AppHero.vue'
import AppStoreButtons from '../../components/apps/AppStoreButtons.vue'
</script>

<template>
  <AppLayout>
    <!-- Hero Section with static mockup -->
    <section class="py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          <!-- Text Content -->
          <div class="text-center lg:text-left order-2 lg:order-1">
            <!-- App Logo & Name -->
            <div class="flex items-center gap-4 justify-center lg:justify-start mb-8">
              <img
                src="/app-logos/easytranslate/easytranslateai.png"
                alt="EasyTranslate AI Logo"
                class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-lg"
              />
              <div>
                <h2 class="text-2xl sm:text-3xl font-bold text-primary">Easy Translate AI</h2>
                <p class="text-sm sm:text-base text-primary-light">Powered by AI</p>
              </div>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight">
              Translate documents instantly
            </h1>
            <p class="text-lg sm:text-xl text-primary-light mb-8 leading-relaxed">
              Professional document translation in over 100 languages. Translate PDFs, images, and text with just a tap.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-stretch">
              <AppStoreButtons
                app-store-url="#"
                play-store-url="#"
              />
              <a
                href="https://easytranslate.io"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-3 px-6 py-3 bg-primary text-secondary rounded-xl hover:bg-primary-light transition-all duration-200 font-semibold group min-w-[160px]"
                style="text-decoration: none;"
              >
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div class="text-left">
                  <div class="text-xs opacity-90">Try the</div>
                  <div class="text-base font-bold leading-tight">Web Version</div>
                </div>
              </a>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div class="w-full max-w-2xl overflow-visible">
              <img
                src="/app-logos/easytranslate/hero-render-light.png"
                alt="EasyTranslate AI Preview"
                class="w-full h-auto scale-150"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshots Gallery -->
    <section class="py-12 px-4 sm:px-6 lg:px-8 bg-secondary mb-12">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in">
          See it in action
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Screenshot 1 -->
          <div class="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/app-logos/easytranslate/home-page-light.png"
              alt="Home Screen"
              class="w-full h-auto object-cover"
            />
            <div class="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-secondary-light/60 p-4 border-t border-secondary-dark/20">
              <p class="text-primary font-semibold">One-Click Upload & Translate</p>
            </div>
          </div>

          <!-- Screenshot 2 -->
          <div class="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/app-logos/easytranslate/history-page-light.png"
              alt="Translation History"
              class="w-full h-auto object-cover"
            />
            <div class="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-secondary-light/60 p-4 border-t border-secondary-dark/20">
              <p class="text-primary font-semibold">History & Organization</p>
            </div>
          </div>

          <!-- Screenshot 3 -->
          <div class="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/app-logos/easytranslate/preview-csv-light.png"
              alt="CSV Preview"
              class="w-full h-auto object-cover"
            />
            <div class="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-secondary-light/60 p-4 border-t border-secondary-dark/20">
              <p class="text-primary font-semibold">CSV Preview</p>
            </div>
          </div>

          <!-- Screenshot 4 -->
          <div class="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/app-logos/easytranslate/preview-menu-light.png"
              alt="Export Menu"
              class="w-full h-auto object-cover"
            />
            <div class="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-secondary-light/60 p-4 border-t border-secondary-dark/20">
              <p class="text-primary font-semibold">Preview & Export</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-light">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-fade-in">
          Powerful Features
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-secondary p-6 rounded-2xl">
            <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Document Translation</h3>
            <p class="text-primary-light">Translate PDFs, Word documents, and images while preserving formatting.</p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-secondary p-6 rounded-2xl">
            <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">100+ Languages</h3>
            <p class="text-primary-light">Support for all major languages with accurate AI-powered translation.</p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-secondary p-6 rounded-2xl">
            <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Instant Results</h3>
            <p class="text-primary-light">Get translations in seconds with our advanced AI technology.</p>
          </div>

          <!-- Feature 4 -->
          <div class="bg-secondary p-6 rounded-2xl">
            <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Privacy First</h3>
            <p class="text-primary-light">Your documents are processed securely and never stored on our servers.</p>
          </div>

          <!-- Feature 5 -->
          <div class="bg-secondary p-6 rounded-2xl">
            <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Image OCR</h3>
            <p class="text-primary-light">Extract and translate text from images with advanced OCR technology.</p>
          </div>

          <!-- Feature 6 -->
          <div class="bg-secondary p-6 rounded-2xl">
            <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Export & Share</h3>
            <p class="text-primary-light">Save translations to PDF or share directly from the app.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
          Ready to break language barriers?
        </h2>
        <p class="text-lg text-primary-light mb-8">
          Download EasyTranslate AI today and experience the future of document translation.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch">
          <AppStoreButtons
            app-store-url="#"
            play-store-url="#"
          />
          <a
            href="https://easytranslate.io"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-6 py-3 bg-primary text-secondary rounded-xl hover:bg-primary-light transition-all duration-200 font-semibold group min-w-[160px]"
            style="text-decoration: none;"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <div class="text-left">
              <div class="text-xs opacity-90">Try the</div>
              <div class="text-base font-bold leading-tight">Web Version</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Fade-in animation for headings */
.animate-fade-in {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

/* Screenshots section heading */
section:nth-of-type(2) .animate-fade-in {
  animation-delay: 0s;
}

/* Features section heading */
section:nth-of-type(3) .animate-fade-in {
  animation-delay: 0s;
}

/* Fade-in animation for features and screenshots */
.grid > div {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

/* Screenshots stagger */
section:nth-of-type(2) .grid > div:nth-child(1) { animation-delay: 0.15s; }
section:nth-of-type(2) .grid > div:nth-child(2) { animation-delay: 0.25s; }
section:nth-of-type(2) .grid > div:nth-child(3) { animation-delay: 0.35s; }
section:nth-of-type(2) .grid > div:nth-child(4) { animation-delay: 0.45s; }

/* Features stagger */
section:nth-of-type(3) .grid > div:nth-child(1) { animation-delay: 0.15s; }
section:nth-of-type(3) .grid > div:nth-child(2) { animation-delay: 0.25s; }
section:nth-of-type(3) .grid > div:nth-child(3) { animation-delay: 0.35s; }
section:nth-of-type(3) .grid > div:nth-child(4) { animation-delay: 0.45s; }
section:nth-of-type(3) .grid > div:nth-child(5) { animation-delay: 0.55s; }
section:nth-of-type(3) .grid > div:nth-child(6) { animation-delay: 0.65s; }

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
</style>
