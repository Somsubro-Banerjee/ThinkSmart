'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "c860b43b595216ddd7591d875702265a",
"/assets/assets/fonts/Knewave.ttf": "ae186212bc5c7cc7a85020ca15579e8d",
"/assets/assets/fonts/ProductB.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"/assets/assets/fonts/ProductBI.ttf": "79750b1d82b2558801373d62dd7e5280",
"/assets/assets/fonts/ProductI.ttf": "e88ec18827526928e71407a24937825a",
"/assets/assets/fonts/ProductR.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"/assets/assets/images/logo.png": "bbc8e769667ccbe53e2ead68014deff2",
"/assets/assets/images/logotransparent.png": "1953ce20f351a44bbd1d421f6521f389",
"/assets/assets/images/logowhite.png": "bc7c8d20b06be4233e025f0037c91b29",
"/assets/assets/images/pic.png": "da1e2b9d341f0a8db9cc522f9a1725d8",
"/assets/FontManifest.json": "7a92d8a0ecc174d5c06bb4cc68f5e337",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "cf6d36cf6552592f45ff1bfc1ec8465c",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "343fa9f2f738b82a3f150ae76411853a",
"/main.dart.js": "53a91ba6e62f621eda88a9a19ec8ca9e",
"/manifest.json": "e902741946184200bb7f4bce92d82fd7"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
