<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { mountScrollWorld } from '../../lib/scrollWorld'

const props = defineProps({
  // Which art-direction asset set to load. All three have stills; only sets
  // listed in CLIPS below scrub video — the rest cross-dissolve their stills.
  variant: { type: String, default: 'clay' },
  // 'page' = the world is the whole page (own topbar).
  // 'hero' = the world tops an existing page: no topbar, fades out at the end.
  mode: { type: String, default: 'page' },
})

const worldEl = ref(null)
let world = null
let fadeHandler = null

// One looping ambient bed (built from the generated clips' own audio) instead of
// per-clip sound — scrubbed video audio would stutter, and clip-to-clip tracks
// would stop/start at every seam. Starts on the first user gesture (browser
// autoplay rules), toggleable, preference remembered.
const soundOn = ref(localStorage.getItem('seedworld-sound') !== 'off')
const audioEl = ref(null)
let gestureHandlers = []

function tryPlayAmbience() {
  const a = audioEl.value
  if (!a || !soundOn.value) return
  a.volume = 0.35
  a.play().catch(() => {})
}

function toggleSound() {
  soundOn.value = !soundOn.value
  localStorage.setItem('seedworld-sound', soundOn.value ? 'on' : 'off')
  const a = audioEl.value
  if (!a) return
  if (soundOn.value) tryPlayAmbience()
  else a.pause()
}

// Video chains per variant — filled in as clips are generated/encoded.
const CLIPS = {
  clay: {
    dives: [1, 2, 3, 4, 5, 6].map(i => `/scrollworld/clay/vid/dive_${i}.mp4`),
    divesMobile: [1, 2, 3, 4, 5, 6].map(i => `/scrollworld/clay/vid/dive_${i}-m.mp4`),
    connectors: [1, 2, 3, 4, 5].map(i => `/scrollworld/clay/vid/conn_${i}.mp4`),
    connectorsMobile: [1, 2, 3, 4, 5].map(i => `/scrollworld/clay/vid/conn_${i}-m.mp4`),
  },
  mascot: {
    dives: [1, 2, 3, 4, 5, 6].map(i => `/scrollworld/mascot/vid/dive_${i}.mp4`),
    divesMobile: [1, 2, 3, 4, 5, 6].map(i => `/scrollworld/mascot/vid/dive_${i}-m.mp4`),
    connectors: [1, 2, 3, 4, 5].map(i => `/scrollworld/mascot/vid/conn_${i}.mp4`),
    connectorsMobile: [1, 2, 3, 4, 5].map(i => `/scrollworld/mascot/vid/conn_${i}-m.mp4`),
  },
}

const SECTIONS = [
  {
    id: 'seeds', label: 'The Seed Library', accent: '#A05C42',
    eyebrow: 'A field guide to your seeds',
    title: 'Every seed has a story.',
    body: 'Catalog every packet you save — variety, source and days-to-harvest, all in one place.',
    tags: ['Seed Catalog', 'Scan packets'],
  },
  {
    id: 'greenhouse', label: 'The Greenhouse', accent: '#52796F',
    eyebrow: 'From packet to sprout',
    title: 'Start when the time is right.',
    body: 'Growing-zone aware planting windows tell you what to sow now — and what can wait.',
    tags: ['Garden Planner', 'Growing Zone'],
  },
  {
    id: 'garden', label: 'The Garden', accent: '#2D6A4F',
    eyebrow: 'The season at a glance',
    title: 'Watch the season unfold.',
    body: 'Your calendar keeps every bed, row and planting on schedule through the year.',
    tags: ['Calendar'],
  },
  {
    id: 'harvest', label: 'The Harvest', accent: '#C17A5C',
    eyebrow: 'Stay ahead of the beds',
    title: 'Never miss a harvest.',
    body: 'Tasks surface what needs doing today — watering, feeding, picking — before it slips.',
    tags: ['Tasks'],
  },
  {
    id: 'journal', label: 'The Journal', accent: '#A05C42',
    eyebrow: 'Remember every bloom',
    title: 'Your garden, journaled.',
    body: 'Photos, notes and pressed-flower memories — entry by entry, season after season.',
    tags: ['Harvest Journal', 'Photos'],
  },
  {
    id: 'app', label: 'The App', accent: '#1B4332',
    eyebrow: 'Grow your story',
    title: 'The whole garden, in your pocket.',
    body: 'MySeedStory is free on iOS and Android. Private by default.',
    cta: {
      primary: { label: 'Download on the App Store', href: 'https://apps.apple.com/us/app/myseedstory-ai-garden-planner/id6761077153' },
      secondary: { label: 'Get it on Google Play', href: 'https://play.google.com/store/apps/details?id=com.pomkatsu.seedbook' },
    },
  },
]

onMounted(() => {
  const v = props.variant
  const clips = CLIPS[v] || null
  world = mountScrollWorld(worldEl.value, {
    brand: props.mode === 'page' ? { name: 'MySeedStory', href: '/' } : null,
    nav: props.mode === 'page',
    hint: 'scroll to fly in',
    diveScroll: 1.1,
    connScroll: 0.75,
    crossfade: 0.18,
    smoothing: 0.12,
    sections: SECTIONS.map((s, i) => ({
      ...s,
      still: `/scrollworld/${v}/scene_${i + 1}.webp`,
      clip: clips ? clips.dives[i] : null,
      clipMobile: clips ? clips.divesMobile[i] : null,
      ...(i === 0 ? { scroll: 1.25, linger: 0.3 } : {}),
      ...(i === SECTIONS.length - 1 ? { scroll: 1.4, linger: 0.4 } : {}),
    })),
    connectors: clips ? clips.connectors : [],
    connectorsMobile: clips ? clips.connectorsMobile : [],
  })

  // Ambient audio: browsers require a *user activation* gesture before play()
  // succeeds — and a mouse-wheel scroll doesn't count in Chrome. Keep retrying
  // on every gesture type until playback actually starts (then detach), so the
  // first click/tap/keypress after any amount of wheel-scrolling brings the
  // sound in.
  const onGesture = () => { tryPlayAmbience() }
  const gestureEvents = ['pointerdown', 'touchstart', 'touchend', 'click', 'keydown', 'wheel']
  gestureEvents.forEach(ev => {
    window.addEventListener(ev, onGesture, { passive: true })
    gestureHandlers.push([ev, onGesture])
  })
  audioEl.value?.addEventListener('playing', () => {
    gestureHandlers.forEach(([ev, fn]) => window.removeEventListener(ev, fn))
    gestureHandlers = []
  }, { once: true })

  if (props.mode === 'hero' && world) {
    // Release the fixed stage once the flight is over so the page below is
    // visible and clickable: fade the world across its final viewport-height.
    const el = worldEl.value
    fadeHandler = () => {
      const vh = window.innerHeight
      const end = world.trackHeight() - vh
      const y = window.scrollY
      const t = Math.min(1, Math.max(0, (y - (end - vh)) / vh))
      el.style.opacity = String(1 - t)
      el.style.visibility = t >= 1 ? 'hidden' : 'visible'
    }
    window.addEventListener('scroll', fadeHandler, { passive: true })
  }
})

onUnmounted(() => {
  if (fadeHandler) window.removeEventListener('scroll', fadeHandler)
  gestureHandlers.forEach(([ev, fn]) => window.removeEventListener(ev, fn))
  if (audioEl.value) audioEl.value.pause()
  if (world) world.destroy()
})
</script>

<template>
  <div>
    <div ref="worldEl" class="seed-world" :class="`seed-world--${mode}`" />
    <audio ref="audioEl" src="/scrollworld/ambience.m4a" loop preload="auto" />
    <button
      class="seed-world-sound"
      :class="{ 'is-off': !soundOn }"
      :aria-label="soundOn ? 'Mute ambience' : 'Play ambience'"
      @click="toggleSound"
    >
      <svg v-if="soundOn" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none"/>
        <path d="M15.5 8.5a5 5 0 0 1 0 7"/>
        <path d="M18.5 5.5a9 9 0 0 1 0 13"/>
      </svg>
      <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none"/>
        <line x1="15" y1="9" x2="21" y2="15"/>
        <line x1="21" y1="9" x2="15" y2="15"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.seed-world {
  /* MySeedStory theme for the world chrome (engine tokens live in @layer sw,
     so these unlayered values win). */
  --sw-bg: #F5F1E8;
  --sw-ink: #1B4332;
  --sw-ink-soft: #52796F;
  --sw-accent: #A05C42;
  --sw-font-display: 'Newsreader', Georgia, serif;
  --sw-font-body: 'Inter', system-ui, sans-serif;
}
</style>

<style>
/* Tailwind's preflight (unlayered) resets h2/h4 to font-size:inherit, which
   beats the engine's @layer sw rules — restore the world's type scale here. */
/* Preflight also sets img/video to height:auto, which breaks the full-bleed
   cover layout (video fills only 16:9 of a tall viewport; the 3:2 still pokes
   out beneath it). Force both back to covering the stage. */
.seed-world .sw-scene__video,
.seed-world .sw-scene__still {
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
}
.seed-world .sw-copy__title {
  font-family: var(--sw-font-display);
  font-size: clamp(3.2rem, 7.5vw, 7rem);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.02em;
  text-wrap: balance;
  /* Soft cream halo lifts the title off the busy video without a scrim box. */
  text-shadow:
    0 2px 30px rgba(245, 241, 232, 0.98),
    0 0 70px rgba(245, 241, 232, 0.85),
    0 0 120px rgba(245, 241, 232, 0.6);
}
.seed-world .sw-copy__eyebrow {
  font-size: 1.05rem;
  letter-spacing: 0.18em;
  text-shadow: 0 1px 16px rgba(245, 241, 232, 0.9);
}
.seed-world .sw-copy { width: min(58vw, 860px); }
/* Preflight zeroes button padding (unlayered beats the engine's @layer sw),
   which jams the nav items together — restore the pill layout here. */
.seed-world .sw-nav { gap: 6px; padding: 5px 6px; }
.seed-world .sw-nav__item {
  padding: 8px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 999px;
}
.seed-world .sw-nav__item:hover { background: color-mix(in srgb, var(--sw-accent) 12%, transparent); }
.seed-world .sw-nav__item.is-active { background: var(--sw-accent); color: #FFF8ED; }
@media (max-width: 860px) {
  .seed-world .sw-copy__title { font-size: clamp(2.6rem, 10vw, 3.8rem); }
  .seed-world .sw-copy { width: auto; }
}
.seed-world-sound {
  position: fixed;
  left: clamp(14px, 2.4vw, 30px);
  bottom: calc(22px + env(safe-area-inset-bottom));
  z-index: 70;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid rgba(27, 67, 50, 0.25);
  background: rgba(245, 241, 232, 0.85);
  color: #1B4332;
  display: grid;
  place-items: center;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: opacity 0.2s;
}
.seed-world-sound.is-off { opacity: 0.55; }
.seed-world .sw-btn { font-weight: 600; }
.seed-world .sw-btn--primary { color: #FFF8ED; }
.seed-world .sw-btn--ghost {
  color: var(--sw-ink);
  border: 1.5px solid color-mix(in srgb, var(--sw-ink) 35%, transparent);
  border-radius: 999px;
}
</style>
