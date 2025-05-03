import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

const DEBUG = false

const defaultOptions = {
  cacheControl: {
    browserTTL: 60 * 60 * 24, // 24 hours
    edgeTTL: 60 * 60 * 24 * 365, // 365 days
    bypassCache: false,
  },
}

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event, defaultOptions)
  } catch (e) {
    if (DEBUG) {
      return new Response(e.message || e.toString(), { status: 500 })
    }
    return new Response('Internal Error', { status: 500 })
  }
}

addEventListener('fetch', (event) => {
  event.respondWith(handleEvent(event))
})