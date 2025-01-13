'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "90195a3b701949195e9c5c027508d199",
"assets/AssetManifest.bin.json": "fa3778ff5a2646ebd8ea093c36265365",
"assets/AssetManifest.json": "2e21747b2e808198491acc815d426a55",
"assets/assets/character.riv": "040c208491408946d61523c32da180c0",
"assets/assets/phone_girl.riv": "480fa4809061a9584530a06058322875",
"assets/assets/products/002.png": "760e039320ab29ca882551ab80bc1ebd",
"assets/assets/products/005.png": "c361d602459b8db7c4b424faec2906cd",
"assets/assets/products/12002001.jpg": "813d27b9f9fb503dfbda3a141386aa6e",
"assets/assets/products/12002002.jpg": "c85c5c1fe6ca8bdd49ed9eab2deba333",
"assets/assets/products/12002003.jpg": "02a4bebcfb8bf69ff209a7815bd2355e",
"assets/assets/products/12002004.jpg": "76f9b85c83249a7782f2d1fcdcf13830",
"assets/assets/products/12002005.jpg": "b7bcf36abf9e5918b1f3bca32b054d48",
"assets/assets/products/12002006.jpg": "531535d369a59731f9a04955568282ee",
"assets/assets/products/12002007.jpg": "d7467458d3cc4a7a9f5a3f651e9a2667",
"assets/assets/products/12002008.jpg": "1e9e8bf3b399395def908b572d508d4c",
"assets/assets/products/12002009.jpg": "a75cb4857446d6be173fa44357ddd7fe",
"assets/assets/products/12002010.jpg": "70e5d3ee6cfdfb572e97e8c0fd2091d1",
"assets/assets/products/67003002.png": "c93acbe3847debfe780c16a0f3fbfda3",
"assets/assets/products/67004002.png": "17d214e8c1ba78d89c9ee74ee7ba48c6",
"assets/assets/products/67004005.png": "cc2f6c187c0d38e50f98b1c454e2a63b",
"assets/assets/products/67022002.png": "55a96ce4290467ce5e651cceb2fc324b",
"assets/assets/products/67022005.png": "9da2f629c10cc4e8567b5c90369dc267",
"assets/assets/products/67022009.png": "d3505584fd4fafbd8b61a7a4030a9c21",
"assets/assets/video/default.mp4": "9002be065b2afa16361e3ce9eecf7f94",
"assets/assets/video/video1.mp4": "22e45cb84cb1725dd14d7f662332e31e",
"assets/assets/video/video2.mp4": "1274c1ea2ea39908015e2789c66f4fad",
"assets/assets/video/video3.mp4": "bf65cf32a651c732504dc6648e9a5477",
"assets/assets/video/video4.mp4": "54794a122bbb16c019fb6dbbfcffbc28",
"assets/assets/video/video5.mp4": "4c0b661dbca31981a5a55e1f94471438",
"assets/assets/video/video6.mp4": "374b0eef7c29db2e4eca813db9a39be5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "079ba5639545506a81b703399fbf0385",
"assets/NOTICES": "dca411a1c027e21dac216a2ee4223036",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "0855ad5c31006eb5d31bfccb83383778",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a3a486ac64b635b7cc188b4d8db230ca",
"/": "a3a486ac64b635b7cc188b4d8db230ca",
"main.dart.js": "5c4cc747cac8df33ef26427a34948183",
"manifest.json": "b3dc00bc9169d9732d7eb7ad56e28ff2",
"version.json": "51c99824a4e60e70921c9f9e6496388d",
"web.config": "0a6eb95f016a2f8c8250bad05ad2152d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
