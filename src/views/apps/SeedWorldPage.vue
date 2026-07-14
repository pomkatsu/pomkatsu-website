<script setup>
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import SeedWorld from '../../components/apps/SeedWorld.vue'

// Standalone scroll-world page (placement option 2).
// Style preview via query: /world?style=clay | paper | water
const route = useRoute()
const style = ['clay', 'paper', 'water', 'mascot'].includes(route.query.style)
  ? route.query.style
  : 'clay'

useHead({
  title: 'MySeedStory — Fly through the garden',
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>

<template>
  <SeedWorld :variant="style" mode="page" />
</template>
