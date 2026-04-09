import { createRouter, createWebHistory } from 'vue-router'
import { getDomainConfig } from '../config/domains'

const legalRoutes = [
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
  }
]

function buildRoutes() {
  const domainConfig = getDomainConfig()

  if (domainConfig) {
    // App-specific domain: / shows the app landing page
    return [
      {
        path: '/',
        name: 'Home',
        component: domainConfig.homeComponent
      },
      ...legalRoutes,
      // Catch-all redirect to / for app domains
      { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
  }

  // Default pomkatsu.com routes
  return [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomePage.vue')
    },
    ...legalRoutes,
    // EasyTranslate has its own domain (easytranslate.io) — redirect old URL
    {
      path: '/apps/easytranslate',
      beforeEnter() {
        window.location.href = 'https://easytranslate.io'
      },
      component: () => import('../views/HomePage.vue')
    },
    // Astral has its own domain (astralapp.love) — redirect old URL
    {
      path: '/apps/astral',
      beforeEnter() {
        window.location.href = 'https://astralapp.love'
      },
      component: () => import('../views/HomePage.vue')
    },
    // Destina has its own domain (destina.love) — redirect old URL
    {
      path: '/apps/destina',
      beforeEnter() {
        window.location.href = 'https://destina.love'
      },
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/apps/foodtally',
      name: 'FoodTally',
      component: () => import('../views/apps/FoodTally.vue')
    },
    {
      path: '/apps/seedbook',
      name: 'SeedBook',
      component: () => import('../views/apps/SeedBook.vue')
    }
  ]
}

const router = createRouter({
  history: createWebHistory(),
  routes: buildRoutes(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
