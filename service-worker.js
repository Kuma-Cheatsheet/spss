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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4751716950560a4e44b62697af45f2cd"
  },
  {
    "url": "assets/css/1.styles.9c97d2a4.css",
    "revision": "79a690f6f1eb25a48e8bc4303167eca2"
  },
  {
    "url": "assets/css/2.styles.097a2432.css",
    "revision": "1f655dc6d91911a9cab832d676df0944"
  },
  {
    "url": "assets/css/3.styles.2c52909e.css",
    "revision": "b147a637eb4e2dd8d0a9ce08447427d6"
  },
  {
    "url": "assets/css/4.styles.62d8c16d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.9de515c2.css",
    "revision": "4acca1e56ec5a810bc6eec84a88c0fd0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9c97d2a4.js",
    "revision": "0a9c3efc0caa2cda6bcd458b31a5852e"
  },
  {
    "url": "assets/js/10.394c3eb7.js",
    "revision": "5caa807541cfcb6d8ba64271790f556a"
  },
  {
    "url": "assets/js/11.1c109067.js",
    "revision": "f62809d34b458287825e51d938ba45c0"
  },
  {
    "url": "assets/js/12.0a0152d7.js",
    "revision": "78107493bdee4a874d62dec25fd105d5"
  },
  {
    "url": "assets/js/13.444df635.js",
    "revision": "217f0ca9610e18b060bb4b7ed044915d"
  },
  {
    "url": "assets/js/14.eb62018d.js",
    "revision": "d8cdde99c5861a71d7471a2867341df9"
  },
  {
    "url": "assets/js/15.ded2cc32.js",
    "revision": "798a1322b420e8b56fe25259b67efac6"
  },
  {
    "url": "assets/js/16.d2f813cf.js",
    "revision": "d260e4262742776f5d205ca5a116d6e4"
  },
  {
    "url": "assets/js/2.097a2432.js",
    "revision": "390f6e59e77f16215b4bee8a5c519922"
  },
  {
    "url": "assets/js/3.2c52909e.js",
    "revision": "e19939df976e218a55fe9e50b2015d6c"
  },
  {
    "url": "assets/js/4.62d8c16d.js",
    "revision": "623a85c59a4435cddcea7b4aa410dbc2"
  },
  {
    "url": "assets/js/5.639b6830.js",
    "revision": "2e2139362c54f69864fd26fa13595804"
  },
  {
    "url": "assets/js/6.85c5c16c.js",
    "revision": "23d3c2593ab0316e2470769d8785cfdd"
  },
  {
    "url": "assets/js/7.3507d8a3.js",
    "revision": "aaecf682a94e6707befbcdb65fa91123"
  },
  {
    "url": "assets/js/8.0419f2e3.js",
    "revision": "f0925a8d0e9d0a257ae2bb7b3a0b2b9b"
  },
  {
    "url": "assets/js/9.cbef7778.js",
    "revision": "0beefa682cca6ec71658f8195b10bdc6"
  },
  {
    "url": "assets/js/app.9de515c2.js",
    "revision": "786c7ae2a6038ebfe1a03cf3312f4f14"
  },
  {
    "url": "AssumptionTest/index.html",
    "revision": "8186351b315bbfc7cc16d9df96655cd8"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "8ccefdb325a9b473f9fcbb9cbe1554c9"
  },
  {
    "url": "Data/DataCleansing/index.html",
    "revision": "e765500459b1935d4a136fdec9d0acd7"
  },
  {
    "url": "Data/DataTransformation/index.html",
    "revision": "3296a25010d8f74a2ca3872fef7610c7"
  },
  {
    "url": "index.html",
    "revision": "db8a9e21b5d248737562c652ea72f15f"
  },
  {
    "url": "Model/LinearRegression/index.html",
    "revision": "424940cc076e5aa13cc086a6b64fca03"
  },
  {
    "url": "Model/LogisticsRegression/index.html",
    "revision": "94953bf18e233d67072fb4bc7673825b"
  },
  {
    "url": "Model/MultipleLinearRegression/index.html",
    "revision": "3490d5dd20f6b2e4d90a3404f4a97b00"
  },
  {
    "url": "Model/TimeSeries/index.html",
    "revision": "10551e583ff1f3a189d243985dca2d70"
  },
  {
    "url": "Model/TwoWayANOVA/index.html",
    "revision": "ebf3157b4a071d584f35122bb8837893"
  },
  {
    "url": "SPSS_x_Data_Analysis.html",
    "revision": "e1eb5dcc2f988ecf720c86f75d65dadb"
  },
  {
    "url": "th/index.html",
    "revision": "82fd65a6669e9abee946489e325a3343"
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
