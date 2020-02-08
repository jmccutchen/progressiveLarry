// const workbox = require('workbox-build');

// workbox.generateSW({
//   cacheID: 'pwa_larry',
//   globDirectory: 'build/',
//   globPatterns: [
//     '**/*.{css,jpg,jpeg,jfif,png,js,html}',
//   ],
//   swDest: 'build/sw.js',
//   swSrc: 'public/sw.js',

// });

module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    '**/*.{css,jpg,jpeg,jfif,png,js,html,webmanifest}',
  ],
  swDest: 'build/sw.js',
  swSrc: 'public/sw.js',
  globIgnores: [
    "../workbox-config.js"
  ]
};
