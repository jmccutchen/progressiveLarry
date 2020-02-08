
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log('Yay! Workbox is loaded');

  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);
} else {
  console.log('Boo! Workbox did not load');
}

// always request css and js files and add to cache, if network not available, then use cache
workbox.routing.registerRoute(
  /\.(?:css|js|html)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'assets',
    plugins: [
      // cache will be deleted after 1 year
      new workbox.expiration.Plugin({
        maxEntries: 1000,
        maxAgeSeconds: 31556952,
      }),
    ],
  }),
);


// use cache first if available
workbox.routing.registerRoute(
  /\.(?:png|jpg|gif|jpeg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      // cache will be deleted after 1 year
      new workbox.expiration.Plugin({
        maxEntries: 1000,
        maxAgeSeconds: 3153600,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('/https:\/\/images\.unsplash\.com\//'),
  workbox.strategies.cacheFirst({
    cacheName: 'larry-images',
    plugins: [
      // cache will be deleted after 1 year
      new workbox.expiration.Plugin({
        maxEntries: 1000,
        maxAgeSeconds: 3153600,
      }),
    ],
  }),
);
