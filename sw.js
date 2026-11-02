const CACHE = 'perisai-muslim-2026-v1';
const APP_FILES = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
const PDF = './Perisai-Muslim-Edisi-Kemas-Kini-2026-v5.pdf';
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('perisai-muslim-') && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('/Perisai-Muslim-Edisi-Kemas-Kini-2026-v5.pdf')) {
    event.respondWith((async () => {
      const cached = await caches.match(PDF);
      try {
        const fresh = await fetch(event.request);
        if (fresh.ok) {
          const cache = await caches.open(CACHE);
          await cache.put(PDF, fresh.clone());
        }
        return fresh;
      } catch (e) {
        if (cached) return cached;
        throw e;
      }
    })());
    return;
  }
  if (event.request.method === 'GET') {
    event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
  }
});
