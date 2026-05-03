// Serve a neutral holding page for myseedbook.com (and www.myseedbook.com).
// This domain is owned by Pomkatsu but intentionally not in active use.
// We deliberately do not mention any product, redirect, or branding here to
// avoid any appearance of trading on third-party trademarks.
const HOSTS = new Set(['myseedbook.com', 'www.myseedbook.com'])

const HOLDING_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Domain not in use</title>
<style>
  html, body { height: 100%; margin: 0; }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    color: #444;
    background: #fafafa;
    padding: 2rem;
    text-align: center;
  }
  p { margin: 0; font-size: 1rem; }
</style>
</head>
<body>
<p>This domain is not currently in use.</p>
</body>
</html>
`

export default async (request) => {
  const host = new URL(request.url).hostname
  if (!HOSTS.has(host)) {
    // Not our holding domain — let other edge functions / static site handle it.
    return
  }

  return new Response(HOLDING_HTML, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=3600',
      'x-robots-tag': 'noindex, nofollow',
    },
  })
}

export const config = { path: '/*' }
