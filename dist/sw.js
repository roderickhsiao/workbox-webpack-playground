importScripts("precache-manifest.bdc6ec0020909ce24d9b73100b257fd3.js", "https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

workbox.precaching.addPlugins([
  new workbox.broadcastUpdate.Plugin('precache-updates')
]);

workbox.precaching.precacheAndRoute([], {
  cleanUrls: false,
  directoryIndex: 'index.html',
  ignoreUrlParametersMatching: [/^utm_/],
});

