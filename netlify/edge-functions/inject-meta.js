const domainMeta = {
  'astralapp.love': {
    title: 'Astral — AI Astrology, Tarot & Soulmate Portraits',
    description:
      'Your personal astrology companion. Tarot readings, AI soulmate portraits, zodiac insights, and cosmic guidance all in one app.',
    ogImage: 'https://astralapp.love/app-logos/astral/og-image.png',
    themeColor: '#330963',
    canonical: 'https://astralapp.love/',
  },
  // Future domains:
  // 'easytranslate.io': { ... },
  // 'foodtally.app': { ... },
}

export default async (request, context) => {
  const response = await context.next()
  const contentType = response.headers.get('content-type') || ''

  // Only modify HTML responses
  if (!contentType.includes('text/html')) {
    return response
  }

  const host = new URL(request.url).hostname
  const meta = domainMeta[host]

  // No override needed for pomkatsu.com (pre-rendered HTML is already correct)
  if (!meta) {
    return response
  }

  let html = await response.text()

  // Replace title
  html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)

  // Replace meta name tags
  html = html.replace(
    /(<meta\s+name="title"\s+content=")[^"]*(")/,
    `$1${meta.title}$2`
  )
  html = html.replace(
    /(<meta\s+name="description"\s+content=")[^"]*(")/,
    `$1${meta.description}$2`
  )
  html = html.replace(
    /(<meta\s+name="theme-color"\s+content=")[^"]*(")/,
    `$1${meta.themeColor}$2`
  )

  // Replace Open Graph tags
  html = html.replace(
    /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
    `$1${meta.title}$2`
  )
  html = html.replace(
    /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
    `$1${meta.description}$2`
  )
  html = html.replace(
    /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
    `$1${meta.canonical}$2`
  )
  html = html.replace(
    /(<meta\s+property="og:image"\s+content=")[^"]*(")/,
    `$1${meta.ogImage}$2`
  )

  // Replace Twitter tags
  html = html.replace(
    /(<meta\s+property="twitter:title"\s+content=")[^"]*(")/,
    `$1${meta.title}$2`
  )
  html = html.replace(
    /(<meta\s+property="twitter:description"\s+content=")[^"]*(")/,
    `$1${meta.description}$2`
  )
  html = html.replace(
    /(<meta\s+property="twitter:url"\s+content=")[^"]*(")/,
    `$1${meta.canonical}$2`
  )
  html = html.replace(
    /(<meta\s+property="twitter:image"\s+content=")[^"]*(")/,
    `$1${meta.ogImage}$2`
  )

  // Replace canonical URL
  html = html.replace(
    /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
    `$1${meta.canonical}$2`
  )

  return new Response(html, {
    status: response.status,
    headers: response.headers,
  })
}

export const config = { path: '/*' }
