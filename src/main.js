import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import './style.css'
import App from './App.vue'
import router from './router'
import { getDomainConfig } from './config/domains.js'

const domainConfig = getDomainConfig()
if (domainConfig?.favicon) {
  document.querySelectorAll('link[rel*="icon"], link[rel="apple-touch-icon"]').forEach(el => el.remove())
  const link = document.createElement('link')
  link.rel = 'icon'
  link.type = domainConfig.favicon.endsWith('.png') ? 'image/png' : 'image/webp'
  link.href = domainConfig.favicon
  document.head.appendChild(link)
}

if (domainConfig?.appleTouchIcon) {
  const link = document.createElement('link')
  link.rel = 'apple-touch-icon'
  link.href = domainConfig.appleTouchIcon
  document.head.appendChild(link)
}

if (domainConfig?.manifest) {
  document.querySelectorAll('link[rel="manifest"]').forEach(el => el.remove())
  const link = document.createElement('link')
  link.rel = 'manifest'
  link.href = domainConfig.manifest
  document.head.appendChild(link)
}

if (domainConfig?.bgColor) {
  document.documentElement.style.backgroundColor = domainConfig.bgColor
}

const head = createHead()

createApp(App).use(router).use(head).mount('#app')
