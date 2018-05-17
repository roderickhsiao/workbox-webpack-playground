workbox.precaching.addPlugins([
  new workbox.broadcastUpdate.Plugin('precache-updates')
]);

workbox.precaching.precacheAndRoute([], {
  cleanUrls: false,
  directoryIndex: 'index.html',
  ignoreUrlParametersMatching: [/^utm_/],
});
