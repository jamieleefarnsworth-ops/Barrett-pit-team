// Barrett Pit Crew offline cache; scoped to this GitHub Pages project only.
const CACHE = 'barrett-pit-crew-2026-v1';
const FILES = ['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => (name.startsWith('barrett-pit-crew-') || name.startsWith('car10-test-')) && name !== CACHE).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const req=event.request;
  if(req.method!=='GET' || new URL(req.url).origin!==self.location.origin) return;
  event.respondWith((async () => {
    try {
      const res=await fetch(req);
      if(res.ok){const copy=res.clone();event.waitUntil(caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{}));}
      return res;
    } catch(e){
      const hit=await caches.match(req);if(hit)return hit;
      if(req.mode==='navigate')return await caches.match('./index.html') || Response.error();
      return Response.error();
    }
  })());
});
