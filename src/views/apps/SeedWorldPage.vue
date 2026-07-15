<script setup>
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import SeedWorld from '../../components/apps/SeedWorld.vue'

// Standalone scroll-world page. Style comes from the published slug
// (/mascot /clay /paper /water) or, on the dev preview route, from
// /world?style=...
const route = useRoute()
const STYLES = ['clay', 'paper', 'water', 'mascot']
const style = STYLES.includes(route.params.style)
  ? route.params.style
  : (STYLES.includes(route.query.style) ? route.query.style : 'clay')

useHead({
  title: 'MySeedStory — Fly through the garden',
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>

<template>
  <SeedWorld :variant="style" mode="page" />
</template>
