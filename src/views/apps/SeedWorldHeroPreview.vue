<script setup>
import { useRoute } from 'vue-router'
import SeedWorld from '../../components/apps/SeedWorld.vue'
import MySeedStory from './MySeedStory.vue'

// Hero-placement preview (placement option 1): the scroll world tops the
// existing MySeedStory landing page; when the flight ends you land in the
// regular page content. /world-hero?style=clay | paper | water
const route = useRoute()
const style = ['clay', 'paper', 'water', 'mascot'].includes(route.query.style)
  ? route.query.style
  : 'clay'
</script>

<template>
  <div>
    <SeedWorld :variant="style" mode="hero" />
    <MySeedStory />
  </div>
</template>
