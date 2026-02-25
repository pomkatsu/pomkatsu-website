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
    {
      path: '/apps/easytranslate',
      name: 'EasyTranslateAI',
      component: () => import('../views/apps/EasyTranslateAI.vue')
    },
    {
      path: '/apps/astral',
      name: 'Astral',
      component: () => import('../views/apps/Astral.vue')
    },
    {
      path: '/apps/foodtally',
      name: 'FoodTally',
      component: () => import('../views/apps/FoodTally.vue')
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
