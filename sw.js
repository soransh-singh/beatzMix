const filesToCache = [
  "/",
  "/sketch.js",
  "/master.css",
  "/setupSw.js"
];

//const staticCacheName = "http://127.0.0.1:8887";

// install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== staticCacheName).map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
