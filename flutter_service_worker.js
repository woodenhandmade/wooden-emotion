'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/favicon-16x16.png": "1b1a607cde932e2e0d4eeb4b0847bde1",
"/favicon.ico": "18fe57fccca8da5b94ef9161115c1d04",
"/index.html": "1080d9a4cdd7a81b28260c29a5cef497",
"/apple-icon.png": "2278ef0f182e97bbfa49275996b5936b",
"/apple-icon-144x144.png": "249a8c00a030d5394ae21a4e433e32d0",
"/android-icon-192x192.png": "e41f24cae079065b05e0dc6f466380a6",
"/apple-icon-precomposed.png": "2278ef0f182e97bbfa49275996b5936b",
"/apple-icon-114x114.png": "cb960445ee985b7242c17799df48e0c4",
"/main.dart.js": "35f236f454a3487dabc2d57f2bfe6de8",
"/ms-icon-310x310.png": "46a9d8f22221d4b12f3cafbde25c2fe5",
"/ms-icon-144x144.png": "249a8c00a030d5394ae21a4e433e32d0",
"/apple-icon-57x57.png": "0472b3fec21e90ec8c4d7591589bf7cc",
"/apple-icon-152x152.png": "85ffd589495bf8dc34d3682ec4cde777",
"/ms-icon-150x150.png": "c9842db0446b7dafee3a77328d7f0c2c",
"/android-icon-72x72.png": "65ed7e4414602dd3d0aacc7e0dd08b0e",
"/android-icon-96x96.png": "ca6f50c0cd7e3c9828fad806f8d433eb",
"/android-icon-36x36.png": "898cf2f215f6fb1adc59ab9b32091290",
"/apple-icon-180x180.png": "4d8ab714bcf83a87a39c809600661e30",
"/favicon-96x96.png": "ca6f50c0cd7e3c9828fad806f8d433eb",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"/android-icon-48x48.png": "9f36f266b3772172303f5f881e3372e4",
"/apple-icon-76x76.png": "0d49797621d9e763d8b80795d1cac5c0",
"/apple-icon-60x60.png": "5dcca177dc8a952a23be6dcdb4fee634",
"/assets/LICENSE": "71c017a589d5206924242eca2784c7c2",
"/assets/AssetManifest.json": "06ac833a709349a3c1931c5956a69f89",
"/assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"/assets/lib/images/Avikele.jpg": "d0322d707913c3bcd6a35c44c6a9c92a",
"/assets/lib/images/Elegansie.jpg": "56d54e72aeea672e3641e057c706f42d",
"/assets/lib/images/instagram.png": "e0b396601d91eddd2b9b31f04c8560c4",
"/assets/lib/images/Imande.jpg": "6775dc21e0ceaaddb681d8ecb4698cf9",
"/assets/lib/images/Ibaleke.jpg": "295d291a96a06c4ed0dc2629ee8ffe36",
"/assets/lib/images/Volamena.jpg": "8c27649f04838edb0cb2a0c4a3d3b90a",
"/assets/lib/images/jonas.jpg": "32589315f251a32dff3fbabc3323cbfe",
"/assets/lib/images/Opposisie1.jpg": "0914daa876f0ec59e2171a8a3fe6ce60",
"/assets/lib/images/Opposisie2.jpg": "18cec187beb0a3381d2b88037b3ef0a4",
"/assets/lib/images/Antiguo.jpg": "662da3ca08a490164b7296dcab4c752b",
"/assets/lib/images/logo.png": "02ccc4aa90dcefca17bffa9d16f2720e",
"/assets/lib/images/Arena.jpg": "57694c5ee6a4c7bd6162d24f9c50b485",
"/assets/lib/images/Veriva.jpg": "f4a6ec6c7eceaba476ad3b217f6f603a",
"/assets/lib/images/dark_forest_fog.jpg": "a016d5e9623f88d725f8da91aac7bf88",
"/assets/lib/images/Nabila.jpg": "402171181104137cc87b2c9a37759f3a",
"/assets/lib/images/Aniani.jpg": "9a265e2853002f8e7205127b52ae75d5",
"/assets/lib/images/Maranga.jpg": "eaadb721147d80b36448af21a5d3842e",
"/assets/lib/images/facebook.png": "95c4c698dfe8ab6f6751af6a7a6ce4df",
"/assets/lib/images/Weda.jpg": "1c287ca33e957d4612e86bfe920fcea1",
"/assets/lib/assets/dark-forest.jpg": "83f558e323e02447f620b8a376fa45d2",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"/android-icon-144x144.png": "249a8c00a030d5394ae21a4e433e32d0",
"/apple-icon-72x72.png": "65ed7e4414602dd3d0aacc7e0dd08b0e",
"/apple-icon-120x120.png": "22254bceed78dbeb071619ac33cda308",
"/favicon-32x32.png": "37413ac53bd28a8e6b7ebfb496a3add7",
"/ms-icon-70x70.png": "aa99ffd7eb20918a429822a289782e27"
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
