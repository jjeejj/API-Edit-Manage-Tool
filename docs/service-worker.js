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
    "revision": "cde0fd9a5ef6af852f643b961be9902f"
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
    "url": "assets/js/5.010ea915.js",
    "revision": "4d1081f970f90bdce317b5e6f653d986"
  },
  {
    "url": "assets/js/6.2067afaa.js",
    "revision": "6463f7fcf891796132549be8dc91f01e"
  },
  {
    "url": "assets/js/app.9ebdcb73.js",
    "revision": "241f23d29501ea483047a5cc1d8a3f2f"
  },
  {
    "url": "guide/index.html",
    "revision": "69102e713dacced2ed64602b3a596bc8"
  },
  {
    "url": "index.html",
    "revision": "3c1ed43f639bc866211a9b9cf71a25e7"
  },
  {
    "url": "user/index.html",
    "revision": "413c510576c764b5b1a6364e4e189fbf"
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
