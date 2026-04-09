const domainConfigs = {
  'astralapp.love': {
    appId: 'astral',
    name: 'Astral',
    homeComponent: () => import('../views/apps/Astral.vue'),
    navLogo: 'Astral',
    themeColor: '#330963',
    favicon: '/app-logos/astral/astral-icon.webp',
    bgColor: '#3A007C',
  },
  'destina.love': {
    appId: 'destina',
    name: 'Destina',
    homeComponent: () => import('../views/apps/Destina.vue'),
    navLogo: 'Destina',
    themeColor: '#330963',
    favicon: '/app-logos/astral/astral-icon.webp',
    bgColor: '#3A007C',
  },
  'easytranslate.io': {
    appId: 'easytranslate',
    name: 'EasyTranslate AI',
    homeComponent: () => import('../views/apps/EasyTranslateAI.vue'),
    navLogo: 'EasyTranslate',
    themeColor: '#a855f7',
    favicon: '/app-logos/easytranslate/easytranslateai.webp',
    bgColor: '#ffffff',
  },
  'myseedbook.com': {
    appId: 'seedbook',
    name: 'SeedBook',
    homeComponent: () => import('../views/apps/SeedBook.vue'),
    navLogo: 'SeedBook',
    themeColor: '#1B4332',
    favicon: '/app-logos/seedbook/favicon.png',
    bgColor: '#FAFAF5',
    layoutVariant: 'seedbook',
    // Per-app content for the /delete-account page
    deleteAccount: {
      dataDescription: 'seed catalog entries, harvest logs, garden plans, planting schedules, uploaded plant and seed packet photos, and scan history',
      subscriptionName: 'SeedBook Plus',
    },
  },
  // 'foodtally.app': {
  //   appId: 'foodtally',
  //   name: 'FoodTally',
  //   homeComponent: () => import('../views/apps/FoodTally.vue'),
  //   navLogo: 'FoodTally',
  //   themeColor: '#46301C',
  // },
}

export function getDomainConfig() {
  const host = window.location.hostname.replace(/^www\./, '')
  // In local dev, treat localhost as myseedbook.com (most recent app under active development).
  // Change this when working on a different app's landing page locally.
  if (host === 'localhost') return domainConfigs['myseedbook.com']
  return domainConfigs[host] || null
}

export function isAppDomain() {
  return getDomainConfig() !== null
}

export function getCurrentAppId() {
  return getDomainConfig()?.appId || null
}
