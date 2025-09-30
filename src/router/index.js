import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import TermsOfService from '../views/TermsOfService.vue'
import CookiePolicy from '../views/CookiePolicy.vue'
import DMCA from '../views/DMCA.vue'
import AcceptableUse from '../views/AcceptableUse.vue'
import EULA from '../views/EULA.vue'
import EasyTranslateAI from '../views/apps/EasyTranslateAI.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: PrivacyPolicy
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TermsOfService
  },
  {
    path: '/cookies',
    name: 'Cookies',
    component: CookiePolicy
  },
  {
    path: '/dmca',
    name: 'DMCA',
    component: DMCA
  },
  {
    path: '/aup',
    name: 'AcceptableUse',
    component: AcceptableUse
  },
  {
    path: '/eula',
    name: 'EULA',
    component: EULA
  },
  {
    path: '/apps/easytranslate',
    name: 'EasyTranslateAI',
    component: EasyTranslateAI
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