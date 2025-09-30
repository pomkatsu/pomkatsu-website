<script setup>
defineProps({
  appName: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  iframeSrc: {
    type: String,
    default: null
  },
  heroImage: {
    type: String,
    default: null
  }
})
</script>

<template>
  <section class="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Text Content -->
        <div class="text-center lg:text-left order-2 lg:order-1">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight">
            {{ tagline }}
          </h1>
          <p class="text-lg sm:text-xl text-primary-light mb-8 leading-relaxed">
            {{ description }}
          </p>

          <!-- CTA Buttons Slot -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <slot name="cta-buttons">
              <!-- Default buttons if none provided -->
              <button class="px-8 py-3 bg-primary text-secondary rounded-xl hover:bg-primary-light transition-all duration-200 font-semibold text-lg">
                Get Started
              </button>
            </slot>
          </div>
        </div>

        <!-- Visual Content (iframe or image) -->
        <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
          <!-- Pacdora iframe -->
          <div v-if="iframeSrc" class="w-full max-w-md aspect-square">
            <iframe
              :src="iframeSrc"
              title="3D App Preview"
              allowfullscreen
              class="w-full h-full border-none rounded-3xl shadow-2xl"
            />
          </div>

          <!-- Static image fallback -->
          <div v-else-if="heroImage" class="w-full max-w-2xl">
            <img
              :src="heroImage"
              :alt="`${appName} Preview`"
              class="w-full h-auto scale-125"
            />
          </div>

          <!-- Placeholder if neither provided -->
          <div v-else class="w-full max-w-md aspect-square bg-gradient-to-br from-primary-light to-primary rounded-3xl shadow-2xl flex items-center justify-center">
            <p class="text-secondary text-xl font-semibold">{{ appName }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Subtle fade-in animation */
section {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive iframe handling */
iframe {
  background: linear-gradient(135deg, #FCF1DC 0%, #F5E5C8 100%);
}
</style>
