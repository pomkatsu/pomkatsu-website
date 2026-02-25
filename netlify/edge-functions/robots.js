const domainRobots = {
  'astralapp.love': `User-agent: *
Allow: /

Sitemap: https://astralapp.love/sitemap.xml`,
  // Future domains:
  // 'easytranslate.io': `User-agent: *\nAllow: /\n\nSitemap: https://easytranslate.io/sitemap.xml`,
  // 'foodtally.app': `User-agent: *\nAllow: /\n\nSitemap: https://foodtally.app/sitemap.xml`,
}

export default async (request, context) => {
  const host = new URL(request.url).hostname.replace(/^www\./, '')
  const robots = domainRobots[host]

  if (robots) {
    return new Response(robots, {
      headers: { 'content-type': 'text/plain' },
    })
  }

  // Fall through to static robots.txt for pomkatsu.com
  return context.next()
}

export const config = { path: '/robots.txt' }
