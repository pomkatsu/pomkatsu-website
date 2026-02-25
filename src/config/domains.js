const domainConfigs = {
  'astralapp.love': {
    appId: 'astral',
    name: 'Astral',
    homeComponent: () => import('../views/apps/Astral.vue'),
    navLogo: 'Astral',
    themeColor: '#330963',
  },
  // Future domains:
  // 'easytranslate.io': {
  //   appId: 'easytranslate',
  //   name: 'EasyTranslate AI',
  //   homeComponent: () => import('../views/apps/EasyTranslateAI.vue'),
  //   navLogo: 'EasyTranslate',
  //   themeColor: '#46301C',
  // },
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
  return domainConfigs[host] || null
}

export function isAppDomain() {
  return getDomainConfig() !== null
}

export function getCurrentAppId() {
  return getDomainConfig()?.appId || null
}
