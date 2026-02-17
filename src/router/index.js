import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/PrivacyPolicy.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/TermsOfService.vue')
  },
  {
    path: '/cookies',
    name: 'Cookies',
    component: () => import('../views/CookiePolicy.vue')
  },
  {
    path: '/dmca',
    name: 'DMCA',
    component: () => import('../views/DMCA.vue')
  },
  {
    path: '/aup',
    name: 'AcceptableUse',
    component: () => import('../views/AcceptableUse.vue')
  },
  {
    path: '/eula',
    name: 'EULA',
    component: () => import('../views/EULA.vue')
  },
  {
    path: '/delete-account',
    name: 'DeleteAccount',
    component: () => import('../views/DeleteAccount.vue')
  },
  {
    path: '/apps/easytranslate',
    name: 'EasyTranslateAI',
    component: () => import('../views/apps/EasyTranslateAI.vue')
  },
  {
    path: '/apps/astral',
    name: 'Astral',
    component: () => import('../views/apps/Astral.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router