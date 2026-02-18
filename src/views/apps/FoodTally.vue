<script setup>
import { ref } from 'vue'
import AppLayout from '../../components/apps/AppLayout.vue'

const activeFeature = ref(0)
const features = [
  {
    title: 'Macro Tracking',
    desc: 'Track calories, protein, carbs, and fat with a visual calorie ring.',
    icon: 'pie-chart',
  },
  {
    title: 'Weight Tracking',
    desc: 'Log weigh-ins and see trends over time. Set goals and watch progress.',
    icon: 'trending-up',
  },
  {
    title: 'Saved Foods & Meals',
    desc: 'Save go-to foods and meals for one-tap logging.',
    icon: 'bookmark',
  },
  {
    title: 'Streak Tracking',
    desc: 'Build momentum with daily logging streaks.',
    icon: 'fire',
  },
  {
    title: 'Personalized Goals',
    desc: 'TDEE-based calorie targets from your age, weight, activity, and goals.',
    icon: 'target',
  },
  {
    title: 'Dark Mode',
    desc: 'Full dark theme support for late-night logging.',
    icon: 'moon',
  },
]
</script>

<template>
  <AppLayout variant="mono">
    <!-- Section 1: Hero -->
    <section class="py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          <!-- Text Content -->
          <div class="text-center lg:text-left order-2 lg:order-1">
            <!-- App Logo & Name -->
            <div class="flex items-center gap-4 justify-center lg:justify-start mb-8">
              <img
                src="/app-logos/foodtally/logo-tally.webp"
                alt="FoodTally Logo"
                class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-lg"
                fetchpriority="high"
              />
              <div>
                <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">FoodTally</h2>
                <p class="text-sm sm:text-base text-gray-500">AI-Powered</p>
              </div>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-[2.5rem] xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              FoodTally: Calorie Tracker
            </h1>
            <p class="text-xl sm:text-2xl text-gray-700 font-semibold mb-3">
              AI Food Log &amp; Macro Counter
            </p>
            <p class="text-lg sm:text-xl text-gray-500 mb-8 leading-relaxed">
              Log meals in seconds with voice, photo, or text. AI figures out the calories, macros, and portions &mdash; so you never have to.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-stretch">
              <div class="flex flex-col sm:flex-row gap-4">
                <!-- App Store Coming Soon -->
                <div class="relative">
                  <div class="inline-flex items-center gap-3 px-6 py-3 bg-gray-200 text-gray-400 rounded-xl min-w-[160px] pointer-events-none">
                    <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div class="text-left">
                      <div class="text-xs opacity-80">Download on the</div>
                      <div class="text-base font-bold leading-tight">App Store</div>
                    </div>
                  </div>
                  <span class="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </div>
                <!-- Google Play Coming Soon -->
                <div class="relative">
                  <div class="inline-flex items-center gap-3 px-6 py-3 bg-gray-200 text-gray-400 rounded-xl min-w-[160px] pointer-events-none">
                    <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div class="text-left">
                      <div class="text-xs opacity-80">Get it on</div>
                      <div class="text-base font-bold leading-tight">Google Play</div>
                    </div>
                  </div>
                  <span class="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-400 mt-4 text-center lg:text-left">
              Launching 2026 on iOS &amp; Android.
            </p>
          </div>

          <!-- Hero Phone Mockup -->
          <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div class="phone-mockup">
              <!-- Notch -->
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1F2937] rounded-b-2xl z-10"></div>
              <!-- Status bar -->
              <div class="flex justify-between items-center px-6 pt-8 pb-2 text-xs text-gray-500">
                <span>9:41</span>
                <div class="flex gap-1 items-center">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"/></svg>
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22h20V2z"/></svg>
                </div>
              </div>
              <!-- App header -->
              <div class="px-5 pt-1 pb-3">
                <p class="text-sm text-gray-500">Today</p>
                <p class="text-xl font-bold text-gray-900">1,420 <span class="text-sm font-normal text-gray-400">/ 2,100 cal</span></p>
              </div>
              <!-- Calorie Ring -->
              <div class="flex justify-center py-4">
                <svg class="calorie-ring" width="160" height="160" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="68" fill="none" stroke="#E5E7EB" stroke-width="12"/>
                  <circle
                    class="ring-progress"
                    cx="80" cy="80" r="68"
                    fill="none"
                    stroke="#374151"
                    stroke-width="12"
                    stroke-linecap="round"
                    :stroke-dasharray="2 * Math.PI * 68"
                    :stroke-dashoffset="2 * Math.PI * 68 * 0.32"
                    transform="rotate(-90 80 80)"
                  />
                  <text x="80" y="72" text-anchor="middle" class="text-2xl font-bold" fill="#1F2937" font-size="28" font-weight="700">68%</text>
                  <text x="80" y="94" text-anchor="middle" fill="#9CA3AF" font-size="12">680 remaining</text>
                </svg>
              </div>
              <!-- Macro bars -->
              <div class="px-5 flex gap-3 mb-5">
                <div class="flex-1">
                  <div class="flex justify-between text-xs mb-1"><span class="text-gray-500">Protein</span><span class="font-medium text-gray-700">92g</span></div>
                  <div class="h-1.5 bg-gray-200 rounded-full"><div class="h-full bg-gray-700 rounded-full" style="width: 73%"></div></div>
                </div>
                <div class="flex-1">
                  <div class="flex justify-between text-xs mb-1"><span class="text-gray-500">Carbs</span><span class="font-medium text-gray-700">148g</span></div>
                  <div class="h-1.5 bg-gray-200 rounded-full"><div class="h-full bg-gray-400 rounded-full" style="width: 62%"></div></div>
                </div>
                <div class="flex-1">
                  <div class="flex justify-between text-xs mb-1"><span class="text-gray-500">Fat</span><span class="font-medium text-gray-700">51g</span></div>
                  <div class="h-1.5 bg-gray-200 rounded-full"><div class="h-full bg-gray-300 rounded-full" style="width: 68%"></div></div>
                </div>
              </div>
              <!-- 4 Input Method Buttons -->
              <div class="px-5 pb-6">
                <div class="grid grid-cols-4 gap-2">
                  <button class="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-gray-100 border border-gray-200">
                    <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"/></svg>
                    <span class="text-[10px] text-gray-600 font-medium">Voice</span>
                  </button>
                  <button class="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-gray-100 border border-gray-200">
                    <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/></svg>
                    <span class="text-[10px] text-gray-600 font-medium">Text</span>
                  </button>
                  <button class="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-gray-100 border border-gray-200">
                    <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"/></svg>
                    <span class="text-[10px] text-gray-600 font-medium">Camera</span>
                  </button>
                  <button class="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-gray-100 border border-gray-200">
                    <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"/></svg>
                    <span class="text-[10px] text-gray-600 font-medium">Gallery</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: How It Works -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 animate-on-scroll">
          How it works
        </h2>
        <div class="flex flex-col md:flex-row md:items-start">
          <!-- Step 1 -->
          <div class="flex-1 text-center animate-on-scroll stagger-1">
            <div class="w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-900 text-gray-900 text-2xl font-bold flex items-center justify-center mx-auto mb-5">
              1
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Log it</h3>
            <p class="text-gray-600 leading-relaxed px-4">
              Say it, type it, or snap it. FoodTally understands natural language &mdash; "two eggs and toast with butter" just works.
            </p>
          </div>
          <!-- Connector 1→2 -->
          <div class="hidden md:flex items-center flex-shrink-0 h-16">
            <div class="w-12 lg:w-20 border-t-2 border-dashed border-gray-300"></div>
          </div>
          <!-- Step 2 -->
          <div class="flex-1 text-center animate-on-scroll stagger-2 mt-8 md:mt-0">
            <div class="w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-900 text-gray-900 text-2xl font-bold flex items-center justify-center mx-auto mb-5">
              2
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">AI does the math</h3>
            <p class="text-gray-600 leading-relaxed px-4">
              Our AI identifies foods, portions, and macros instantly. No barcode scanning, no searching databases.
            </p>
          </div>
          <!-- Connector 2→3 -->
          <div class="hidden md:flex items-center flex-shrink-0 h-16">
            <div class="w-12 lg:w-20 border-t-2 border-dashed border-gray-300"></div>
          </div>
          <!-- Step 3 -->
          <div class="flex-1 text-center animate-on-scroll stagger-3 mt-8 md:mt-0">
            <div class="w-16 h-16 rounded-full bg-gray-100 border-2 border-gray-900 text-gray-900 text-2xl font-bold flex items-center justify-center mx-auto mb-5">
              3
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">See your progress</h3>
            <p class="text-gray-600 leading-relaxed px-4">
              Calories, protein, carbs, fat &mdash; tracked automatically. Watch your streaks grow and goals get closer.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: 4 Ways to Log -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 animate-on-scroll">
          4 ways to log
        </h2>
        <p class="text-center text-gray-500 mb-12 text-lg animate-on-scroll">
          More input methods than any other calorie tracker.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <!-- Voice -->
          <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm
                      hover:shadow-md hover:-translate-y-1 transition-all duration-300
                      text-center animate-on-scroll stagger-1">
            <div class="w-14 h-14 rounded-full border-2 border-gray-200
                        flex items-center justify-center mx-auto mb-2 relative">
              <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"/></svg>
              <span class="pulse-ring"></span>
              <span class="pulse-ring pulse-ring-2"></span>
            </div>
            <div class="typing-demo-wrap mb-3" aria-hidden="true">
              <span class="voice-typing-demo">two eggs and toast</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-1">Just say it</h3>
            <p class="text-gray-600 text-sm leading-relaxed">FoodTally's voice recognition captures everything in real time, even complex meals.</p>
          </div>
          <!-- Text -->
          <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm
                      hover:shadow-md hover:-translate-y-1 transition-all duration-300
                      text-center animate-on-scroll stagger-2">
            <div class="w-14 h-14 rounded-full border-2 border-gray-200
                        flex items-center justify-center mx-auto mb-2">
              <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/></svg>
            </div>
            <div class="typing-demo-wrap mb-3" aria-hidden="true">
              <span class="typing-demo">2 eggs, toast</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-1">Type naturally</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Type what you ate in plain English &mdash; our AI handles the rest.</p>
          </div>
          <!-- Camera -->
          <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm
                      hover:shadow-md hover:-translate-y-1 transition-all duration-300
                      text-center animate-on-scroll stagger-3">
            <div class="w-14 h-14 rounded-full border-2 border-gray-200
                        flex items-center justify-center mx-auto mb-4 shutter-click">
              <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"/></svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-1">Snap a photo</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Point your camera at your plate. AI identifies the food, estimates portions, and logs it.</p>
          </div>
          <!-- Gallery -->
          <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm
                      hover:shadow-md hover:-translate-y-1 transition-all duration-300
                      text-center animate-on-scroll stagger-4">
            <div class="w-14 h-14 rounded-full border-2 border-gray-200
                        flex items-center justify-center mx-auto mb-4 float-icon">
              <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"/></svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-1">Upload from gallery</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Upload from your camera roll and let AI do the analysis. Great for logging meals later.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: AI Coach -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Chat Mockup (Left) -->
          <div class="flex justify-center animate-on-scroll">
            <div class="chat-mockup">
              <!-- Chat header -->
              <div class="flex items-center gap-2 px-4 py-3 border-b border-gray-200">
                <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/></svg>
                <span class="font-semibold text-gray-800 text-sm">AI Coach</span>
              </div>
              <!-- Chat messages -->
              <div class="p-4 space-y-3 flex-1">
                <!-- User message -->
                <div class="flex justify-end">
                  <div class="bg-gray-900 text-white px-4 py-2.5 rounded-2xl rounded-br-md max-w-[85%] text-sm">
                    How did I do on protein this week?
                  </div>
                </div>
                <!-- AI response -->
                <div class="flex justify-start">
                  <div class="bg-gray-100 px-4 py-2.5 rounded-2xl rounded-bl-md max-w-[85%] text-sm text-gray-800 leading-relaxed">
                    You hit your protein goal on <strong>5 of 7 days</strong>! Tuesday and Thursday were low at 92g and 88g. Want some high-protein snack ideas?
                  </div>
                </div>
              </div>
              <!-- Input bar -->
              <div class="px-4 pb-4">
                <div class="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2.5 text-sm text-gray-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"/></svg>
                  Ask your coach anything...
                </div>
              </div>
            </div>
          </div>

          <!-- Text Content (Right) -->
          <div class="animate-on-scroll">
            <span class="inline-block bg-gray-900 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              AI-Powered
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your personal nutrition coach
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              FoodTally's AI Coach knows your entire food history, goals, and preferences. Ask anything:
            </p>
            <div class="space-y-3 mb-6">
              <div class="flex items-start gap-3 bg-white rounded-xl px-4 py-3">
                <span class="text-gray-900 text-lg mt-0.5">&ldquo;</span>
                <p class="text-gray-600 text-sm italic">How many days was I under on protein this week?</p>
              </div>
              <div class="flex items-start gap-3 bg-white rounded-xl px-4 py-3">
                <span class="text-gray-900 text-lg mt-0.5">&ldquo;</span>
                <p class="text-gray-600 text-sm italic">Build me a 1,800 cal meal plan for tomorrow</p>
              </div>
              <div class="flex items-start gap-3 bg-white rounded-xl px-4 py-3">
                <span class="text-gray-900 text-lg mt-0.5">&ldquo;</span>
                <p class="text-gray-600 text-sm italic">What's my average calorie intake on weekends?</p>
              </div>
              <div class="flex items-start gap-3 bg-white rounded-xl px-4 py-3">
                <span class="text-gray-900 text-lg mt-0.5">&ldquo;</span>
                <p class="text-gray-600 text-sm italic">I'm eating out &mdash; what should I order?</p>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed">
              The coach learns your patterns and gives advice that's actually personal.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Everything You Need - Tabbed Layout -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 animate-on-scroll">
          Everything you need
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start max-w-4xl mx-auto">
          <!-- Left: Vertical Tab List -->
          <div class="space-y-0.5 animate-on-scroll order-2 lg:order-1">
            <button
              v-for="(feature, i) in features"
              :key="i"
              class="w-full text-left rounded-xl px-4 py-2.5 transition-all duration-200"
              :class="activeFeature === i ? 'bg-gray-100 border-l-4 border-gray-900' : 'bg-transparent border-l-4 border-transparent hover:bg-gray-50'"
              @click="activeFeature = i"
            >
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <!-- Pie Chart -->
                  <svg v-if="feature.icon === 'pie-chart'" class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"/><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"/></svg>
                  <!-- Trending Up -->
                  <svg v-if="feature.icon === 'trending-up'" class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>
                  <!-- Bookmark -->
                  <svg v-if="feature.icon === 'bookmark'" class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"/></svg>
                  <!-- Fire -->
                  <svg v-if="feature.icon === 'fire'" class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.75 6.75 0 009 4.5a.75.75 0 01.75.75c0 1.768.57 3.408 1.536 4.74L12 9l.75 1.01A6.763 6.763 0 0015.362 5.214z"/></svg>
                  <!-- Target -->
                  <svg v-if="feature.icon === 'target'" class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>
                  <!-- Moon -->
                  <svg v-if="feature.icon === 'moon'" class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/></svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-base font-bold text-gray-900">{{ feature.title }}</h3>
                  <div class="desc-grid" :class="{ open: activeFeature === i }">
                    <div>
                      <p class="text-gray-600 text-sm leading-relaxed pt-0.5 transition-opacity duration-200"
                         :class="activeFeature === i ? 'opacity-100' : 'opacity-0'">
                        {{ feature.desc }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <!-- Right: Phone Mockup (hidden on mobile) -->
          <div class="hidden lg:flex justify-center animate-on-scroll order-1 lg:order-2">
            <div class="phone-mockup">
              <!-- Notch -->
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1F2937] rounded-b-2xl z-10"></div>
              <!-- Status bar -->
              <div class="flex justify-between items-center px-6 pt-8 pb-2 text-xs text-gray-500">
                <span>9:41</span>
                <div class="flex gap-1 items-center">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"/></svg>
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22h20V2z"/></svg>
                </div>
              </div>

              <!-- Feature Preview Content -->
              <div class="px-5 pt-2 pb-6 min-h-[360px] flex flex-col items-center justify-center">
                <!-- Macro Tracking -->
                <template v-if="activeFeature === 0">
                  <p class="text-sm font-semibold text-gray-800 mb-3">Daily Overview</p>
                  <svg width="140" height="140" viewBox="0 0 140 140">
                    <circle cx="70" cy="70" r="58" fill="none" stroke="#E5E7EB" stroke-width="10"/>
                    <circle cx="70" cy="70" r="58" fill="none" stroke="#374151" stroke-width="10" stroke-linecap="round" stroke-dasharray="364.42" stroke-dashoffset="109.33" transform="rotate(-90 70 70)"/>
                    <text x="70" y="66" text-anchor="middle" fill="#1F2937" font-size="24" font-weight="700">1,420</text>
                    <text x="70" y="84" text-anchor="middle" fill="#9CA3AF" font-size="11">of 2,100 cal</text>
                  </svg>
                  <div class="flex gap-4 mt-4 text-xs text-gray-500">
                    <span><strong class="text-gray-700">P</strong> 92g</span>
                    <span><strong class="text-gray-700">C</strong> 148g</span>
                    <span><strong class="text-gray-700">F</strong> 51g</span>
                  </div>
                </template>

                <!-- Weight Tracking -->
                <template v-if="activeFeature === 1">
                  <p class="text-sm font-semibold text-gray-800 mb-4">Weight Trend</p>
                  <svg width="220" height="120" viewBox="0 0 220 120">
                    <line x1="20" y1="100" x2="200" y2="100" stroke="#E5E7EB" stroke-width="1"/>
                    <line x1="20" y1="70" x2="200" y2="70" stroke="#E5E7EB" stroke-width="1" stroke-dasharray="4"/>
                    <line x1="20" y1="40" x2="200" y2="40" stroke="#E5E7EB" stroke-width="1" stroke-dasharray="4"/>
                    <polyline fill="none" stroke="#374151" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" points="30,85 60,78 90,80 120,72 150,68 180,62"/>
                    <circle cx="30" cy="85" r="3" fill="#374151"/><circle cx="60" cy="78" r="3" fill="#374151"/><circle cx="90" cy="80" r="3" fill="#374151"/><circle cx="120" cy="72" r="3" fill="#374151"/><circle cx="150" cy="68" r="3" fill="#374151"/><circle cx="180" cy="62" r="4" fill="#374151" stroke="#FFFFFF" stroke-width="2"/>
                    <text x="180" y="55" text-anchor="middle" fill="#111827" font-size="11" font-weight="600">172 lb</text>
                  </svg>
                  <p class="text-xs text-gray-400 mt-3">-3.2 lb this month</p>
                </template>

                <!-- Saved Foods -->
                <template v-if="activeFeature === 2">
                  <p class="text-sm font-semibold text-gray-800 mb-4">Saved Meals</p>
                  <div class="w-full space-y-2.5 px-1">
                    <div class="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5">
                      <div class="flex items-center gap-2.5">
                        <span class="text-lg">🥣</span>
                        <div><p class="text-sm font-medium text-gray-800">Morning Oats</p><p class="text-xs text-gray-400">420 cal</p></div>
                      </div>
                      <span class="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">+ Log</span>
                    </div>
                    <div class="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5">
                      <div class="flex items-center gap-2.5">
                        <span class="text-lg">🥗</span>
                        <div><p class="text-sm font-medium text-gray-800">Chicken Salad</p><p class="text-xs text-gray-400">380 cal</p></div>
                      </div>
                      <span class="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">+ Log</span>
                    </div>
                    <div class="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5">
                      <div class="flex items-center gap-2.5">
                        <span class="text-lg">🍳</span>
                        <div><p class="text-sm font-medium text-gray-800">Egg Scramble</p><p class="text-xs text-gray-400">310 cal</p></div>
                      </div>
                      <span class="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">+ Log</span>
                    </div>
                  </div>
                </template>

                <!-- Streak Tracking -->
                <template v-if="activeFeature === 3">
                  <p class="text-sm font-semibold text-gray-800 mb-3">Logging Streak</p>
                  <p class="text-5xl font-bold text-gray-900 mb-1">12</p>
                  <p class="text-sm text-gray-400 mb-4">days in a row</p>
                  <div class="flex gap-1.5">
                    <span v-for="i in 7" :key="i" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium" :class="i <= 5 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-400'">
                      {{ ['M','T','W','T','F','S','S'][i-1] }}
                    </span>
                  </div>
                </template>

                <!-- Personalized Goals -->
                <template v-if="activeFeature === 4">
                  <p class="text-sm font-semibold text-gray-800 mb-4">Your Goals</p>
                  <div class="w-full space-y-3 px-1">
                    <div>
                      <div class="flex justify-between text-xs mb-1"><span class="text-gray-500">Calories</span><span class="font-medium text-gray-700">2,100 cal</span></div>
                      <div class="h-2 bg-gray-200 rounded-full"><div class="h-full bg-gray-700 rounded-full" style="width: 68%"></div></div>
                    </div>
                    <div>
                      <div class="flex justify-between text-xs mb-1"><span class="text-gray-500">Protein</span><span class="font-medium text-gray-700">140g</span></div>
                      <div class="h-2 bg-gray-200 rounded-full"><div class="h-full bg-gray-700 rounded-full" style="width: 66%"></div></div>
                    </div>
                    <div>
                      <div class="flex justify-between text-xs mb-1"><span class="text-gray-500">Carbs</span><span class="font-medium text-gray-700">230g</span></div>
                      <div class="h-2 bg-gray-200 rounded-full"><div class="h-full bg-gray-400 rounded-full" style="width: 64%"></div></div>
                    </div>
                    <div>
                      <div class="flex justify-between text-xs mb-1"><span class="text-gray-500">Fat</span><span class="font-medium text-gray-700">70g</span></div>
                      <div class="h-2 bg-gray-200 rounded-full"><div class="h-full bg-gray-300 rounded-full" style="width: 73%"></div></div>
                    </div>
                  </div>
                </template>

                <!-- Dark Mode -->
                <template v-if="activeFeature === 5">
                  <div class="w-full rounded-2xl bg-[#121212] p-4">
                    <p class="text-sm font-semibold text-gray-200 mb-3">Dark Mode</p>
                    <div class="flex justify-center mb-3">
                      <svg width="100" height="100" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#2A2A2A" stroke-width="8"/>
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#D1D5DB" stroke-width="8" stroke-linecap="round" stroke-dasharray="251.33" stroke-dashoffset="75.4" transform="rotate(-90 50 50)"/>
                        <text x="50" y="48" text-anchor="middle" fill="#F5F5F5" font-size="16" font-weight="700">68%</text>
                        <text x="50" y="62" text-anchor="middle" fill="#6B6B6B" font-size="8">680 left</text>
                      </svg>
                    </div>
                    <div class="flex gap-3 text-xs">
                      <div class="flex-1"><div class="flex justify-between mb-1"><span class="text-gray-500">P</span><span class="text-gray-300">92g</span></div><div class="h-1 bg-[#2A2A2A] rounded-full"><div class="h-full bg-gray-300 rounded-full" style="width:73%"></div></div></div>
                      <div class="flex-1"><div class="flex justify-between mb-1"><span class="text-gray-500">C</span><span class="text-gray-300">148g</span></div><div class="h-1 bg-[#2A2A2A] rounded-full"><div class="h-full bg-gray-400 rounded-full" style="width:62%"></div></div></div>
                      <div class="flex-1"><div class="flex justify-between mb-1"><span class="text-gray-500">F</span><span class="text-gray-300">51g</span></div><div class="h-1 bg-[#2A2A2A] rounded-full"><div class="h-full bg-gray-500 rounded-full" style="width:68%"></div></div></div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Section 6: Built Different -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12 animate-on-scroll">
          Built different
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div class="bg-white rounded-2xl p-6 animate-on-scroll stagger-1">
            <p class="text-5xl font-bold text-gray-900 mb-2">4</p>
            <p class="text-gray-600 text-sm">Input methods &mdash; more than any other tracker</p>
          </div>
          <div class="bg-white rounded-2xl p-6 animate-on-scroll stagger-2">
            <p class="text-5xl font-bold text-gray-900 mb-2">0</p>
            <p class="text-gray-600 text-sm">Database searches required &mdash; AI does the work</p>
          </div>
          <div class="bg-white rounded-2xl p-6 animate-on-scroll stagger-3">
            <p class="text-5xl font-bold text-gray-900 mb-2">1</p>
            <p class="text-gray-600 text-sm">AI coach that actually knows your history</p>
          </div>
        </div>
        <!-- Trust row -->
        <div class="flex flex-wrap justify-center gap-8 text-gray-600">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>
            <span class="text-sm">Your data stays private</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/></svg>
            <span class="text-sm">Powered by latest AI</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/></svg>
            <span class="text-sm">Built by Pomkatsu</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 7: Final CTA -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div class="max-w-4xl mx-auto text-center">
        <img
          src="/app-logos/foodtally/logo-tally.webp"
          alt="FoodTally Logo"
          class="w-20 h-20 mx-auto rounded-2xl mb-6"
        />
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to track smarter?
        </h2>
        <p class="text-lg text-gray-400 mb-8 leading-relaxed">
          FoodTally is coming in 2026. The simplest way to track calories &mdash; your way.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch">
          <!-- App Store Coming Soon (dark variant) -->
          <div class="relative">
            <div class="inline-flex items-center gap-3 px-6 py-3 bg-white/10 text-white/50 rounded-xl min-w-[160px] pointer-events-none">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs opacity-80">Download on the</div>
                <div class="text-base font-bold leading-tight">App Store</div>
              </div>
            </div>
            <span class="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              Coming Soon
            </span>
          </div>
          <!-- Google Play Coming Soon (dark variant) -->
          <div class="relative">
            <div class="inline-flex items-center gap-3 px-6 py-3 bg-white/10 text-white/50 rounded-xl min-w-[160px] pointer-events-none">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs opacity-80">Get it on</div>
                <div class="text-base font-bold leading-tight">Google Play</div>
              </div>
            </div>
            <span class="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              Coming Soon
            </span>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-4">
          Available on iOS &amp; Android.
        </p>
      </div>
    </section>
  </AppLayout>
</template>

<style scoped>
/* Phone Mockup */
.phone-mockup {
  width: 280px;
  background: #F9FAFB;
  border-radius: 2.5rem;
  border: 3px solid #D1D5DB;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}

/* Chat Mockup */
.chat-mockup {
  width: 320px;
  max-width: 100%;
  background: #FFFFFF;
  border-radius: 1.5rem;
  border: 2px solid #E5E7EB;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

/* Calorie Ring Animation */
.ring-progress {
  animation: ringFill 1.5s ease-out 0.5s forwards;
  stroke-dashoffset: 427.26; /* full circle: 2 * PI * 68 */
}

@keyframes ringFill {
  from {
    stroke-dashoffset: 427.26;
  }
}

/* Mic Pulse Rings */
.pulse-ring {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  border: 2px solid #374151;
  opacity: 0;
  animation: pulse 2s ease-out infinite;
}

.pulse-ring-2 {
  animation-delay: 1s;
}

@keyframes pulse {
  0% {
    opacity: 0.6;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}

/* Camera card: shutter click */
.shutter-click {
  animation: shutterClick 3s ease infinite;
}

@keyframes shutterClick {
  0%, 85%, 100% {
    transform: scale(1);
    border-color: #E5E7EB;
  }
  90% {
    transform: scale(0.88);
    border-color: #374151;
  }
  95% {
    transform: scale(1.04);
    border-color: #9CA3AF;
  }
}

/* Gallery card: floating icon */
.float-icon {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

/* Text card: typing demo */
.typing-demo-wrap {
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.typing-demo {
  display: inline-block;
  font-size: 11px;
  color: #6B7280;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  border-right: 1.5px solid #374151;
  animation: typeReveal 4s steps(13) infinite, cursorBlink 0.6s steps(1) infinite;
}

@keyframes typeReveal {
  0%, 5% { width: 0; }
  45%, 75% { width: 6.2em; }
  85%, 100% { width: 0; }
}

@keyframes cursorBlink {
  0%, 50% { border-color: #374151; }
  51%, 100% { border-color: transparent; }
}

/* Voice card: word-at-a-time typing */
.voice-typing-demo {
  display: inline-block;
  font-size: 11px;
  color: #6B7280;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  border-right: 1.5px solid #374151;
  animation: voiceReveal 5s infinite, cursorBlink 0.6s steps(1) infinite;
}

@keyframes voiceReveal {
  0%, 8%   { width: 0; }
  10%, 22% { width: 1.6em; }
  25%, 37% { width: 3.7em; }
  40%, 52% { width: 5.2em; }
  55%, 72% { width: 7em; }
  82%, 100% { width: 0; }
}

/* Everything you need: smooth description expand */
.desc-grid {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.25s ease;
}

.desc-grid.open {
  grid-template-rows: 1fr;
}

.desc-grid > div {
  overflow: hidden;
  min-height: 0;
}

/* Scroll animations */
.animate-on-scroll {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.stagger-1 { animation-delay: 0.15s; }
.stagger-2 { animation-delay: 0.25s; }
.stagger-3 { animation-delay: 0.35s; }
.stagger-4 { animation-delay: 0.45s; }
.stagger-5 { animation-delay: 0.55s; }
.stagger-6 { animation-delay: 0.65s; }

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
