/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e50836736567e51a398c42baeaad9f17"
  },
  {
    "url": "assets/css/0.styles.f68bb875.css",
    "revision": "135bd6d1a6fd70154f2b9daa86e3008d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.eeb1c1bf.js",
    "revision": "d4d31fdbf647530bf2534bc8ffed240f"
  },
  {
    "url": "assets/js/4.8b411f1a.js",
    "revision": "2e33adc652a4fdecc5c9a1aa3fc5259c"
  },
  {
    "url": "assets/js/5.50f93e05.js",
    "revision": "1315d19e3e447fd0f606cb6af7949cba"
  },
  {
    "url": "assets/js/6.2067afaa.js",
    "revision": "6463f7fcf891796132549be8dc91f01e"
  },
  {
    "url": "assets/js/app.f321f9f5.js",
    "revision": "1bd814f94bef20712b70474cc19d925a"
  },
  {
    "url": "guide/index.html",
    "revision": "18024de29d9038ffac6ee628cbac66ba"
  },
  {
    "url": "index.html",
    "revision": "f271a93e1bedf65cc193337b43787b66"
  },
  {
    "url": "user/index.html",
    "revision": "c323d423b1b22413bc960c3e352b369a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
