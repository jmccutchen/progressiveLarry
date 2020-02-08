
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log('Yay! Workbox is loaded');

  workbox.precaching.precacheAndRoute([{"revision":"6007bab1a6502fde417b733df4f33c97","url":"assets/css/foundation.css"},{"revision":"6fb89ca178f1c8f38806079453e61e42","url":"assets/css/foundation.min.css"},{"revision":"aa3b76fc2cf47246d90d760377c43c43","url":"assets/css/index.css"},{"revision":"f87019e0800929e8bf1fa4f3908e3be9","url":"assets/css/larry_defined.css"},{"revision":"fedb1813f59d56cab287e59fc125c2db","url":"assets/css/larry.css"},{"revision":"fe1db12f016ab04973b0f87f3a8cadc6","url":"assets/css/style.css"},{"revision":"822008db47c04b24e8ed1c2d94a85835","url":"assets/images/bricks.jpg"},{"revision":"e607b6c74b6899ed4ca33797a4c50311","url":"assets/images/conference_of_Larry.jpg"},{"revision":"776dde58c790e896f130717dfb0b195f","url":"assets/images/edison_bulb.jpg"},{"revision":"2aa6647d6e37dba0d1f0cc174d133171","url":"assets/images/LarryNewhart.jpg"},{"revision":"616f64131d4ef924057a8434d258abb0","url":"assets/images/LarryStooge.jpg"},{"revision":"52a7f36b9a3a9d50926585102d87e6d8","url":"assets/images/LarryStooge2.jpeg"},{"revision":"cb807adc29e0776ac88037669eedaa6d","url":"assets/images/leather.jfif"},{"revision":"78ee9c8a6a9f322010a59e932bc83920","url":"assets/images/vintage-wallpaper.png"},{"revision":"064d14f2967db61bac266e78e8eb3259","url":"assets/js/founders.js"},{"revision":"425141872efa9243baa2f560afef255b","url":"assets/js/hall.js"},{"revision":"7a0926bed4daf997eeed0d5bffba15a5","url":"assets/js/holcard.js"},{"revision":"65f0bad0f70af3bc6c8ac2c9c023a4b8","url":"assets/js/index.js"},{"revision":"a01e7f583ee816141b1cca46bd055c3b","url":"assets/js/ipsum.js"},{"revision":"517ad6b0c48d894ddcb7dc2a04b55a71","url":"assets/js/larry_defined.js"},{"revision":"e574f24e2c68ad53355a8d6bf8910c2b","url":"assets/js/script.js"},{"revision":"2f71652261551f085b50b7735abe5104","url":"founders.html"},{"revision":"9e20bd6b9168f415aeb171a1504b24e5","url":"hallOfLarry.html"},{"revision":"32ba5239bad5154aeed484c569b6bd70","url":"images/icons/icon-128x128.png"},{"revision":"26f6261c09a54657a8a72360649bddff","url":"images/icons/icon-144x144.png"},{"revision":"28accee92bc67a9773c3bb564fa13409","url":"images/icons/icon-152x152.png"},{"revision":"f68705865c6bafe292a32e92ba0b472c","url":"images/icons/icon-192x192.png"},{"revision":"d28edb3cc563ba5fff41098bff43d6af","url":"images/icons/icon-384x384.png"},{"revision":"642a946d65b30c6c93fe856c27432497","url":"images/icons/icon-512x512.png"},{"revision":"d1ff1a04d788baadde79429cc86ec239","url":"images/icons/icon-72x72.png"},{"revision":"73be126733c825d3dbe20e22be348b03","url":"images/icons/icon-96x96.png"},{"revision":"024072c0a1b1f90d9902470f3c787a0b","url":"index.html"},{"revision":"afa86ec450a4af7cc5b101c8bbd5399f","url":"ipsum.html"},{"revision":"c3e9805e37aa2f1453701363b98deaef","url":"larror.html"},{"revision":"90bdfaeee0a3111eee7c65bbc7f8fa53","url":"larryDefined.html"},{"revision":"4eec7fdf0522e0bbac4b0b0747ebe028","url":"manifest.webmanifest"},{"revision":"c63a8e987faf6213151a252325b3c4ff","url":"workbox-2aa9f459.js"}] || []);
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
