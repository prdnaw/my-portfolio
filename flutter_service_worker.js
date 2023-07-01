'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "78b7dce405a9516f1c797b3027762d43",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d23ba2ea14327f0134fd1761081e9111",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c5987e703fe2c560756956f1b1be4ce9",
".git/logs/refs/heads/main": "bd3547eb3b0fc13c9df8270d5662fa2f",
".git/logs/refs/remotes/origin/main": "3c70a1abaf24110ad25a4e2da8fc748d",
".git/objects/00/c64c1631a889d470869869de84f9c4ad9916a3": "f4b0fbaf15fb61a69072d49609aafd23",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/d8901ed6fd33fc4c39c55fe317a5fa5e456926": "3c3f02c6288a59b0732493f9e9ff4a4b",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/71c3ab51e2d4a537604456019642c015909cdc": "09cc4c14054cad7999529a1c59c88c92",
".git/objects/18/096086cf59a10a3db1a270aae94111f71c24c9": "ba22e616c9044407974233b9c6272000",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/22/9b7784cc5c367e66e6ee3bf3839a83fb2cf72b": "9f76bd45e6fc5071b96ec070f6f34ec0",
".git/objects/22/ee27ba2d9171b40617c67c4c68a5a6b5cd5056": "ddb5e3b12eeeea1c8863b68319f70928",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/32/1bf73d9f92358f00d85648011fa3977292507d": "259a4d73ebfa1b2c6fa1ca3c927d4ae9",
".git/objects/32/5a08ec324c4bbea21bf9a74cba7c59ba476495": "695d3ac1dfae798510860370ef3c9569",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/41/9865d78e0e8e9a843ad847ee9d2481ab1d5558": "8f1dc30b12ad9df640c9a1e2b944af8b",
".git/objects/42/1546745b6d72570f9d6f4ab112ffa4ee192316": "a4757140f049c691cf9e0681f111748f",
".git/objects/45/f0cf461a8a12703c373ae551d81abf99b88330": "c00b62222cdc580b2c2fee18ce3e329e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/3cbc03120607bb59ea602601c6be5ad9c029b0": "acf83b36223e3cc9692123ea647ec529",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/644886f1ebc7db195839242fa342b49c82157b": "c4097bcd60077e79549375c4dcea6e7a",
".git/objects/55/297a6a249bfa48a126c2da6b2497435506fef6": "04cc3ed8e6db3a852ae340dec411b180",
".git/objects/5f/bee2f07eee57bb6b1665623887bc73053f1fd8": "d0085ae3fe8392abc85d0c2d5d3b716d",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/29fface68572aa1f77300b2a82270893755e36": "c3900138eedac9560d343a66cb946f21",
".git/objects/67/6a757ae0d09f6a29867e80d8bea7f87a1bada0": "5f1649887be0fbb82b39f97e78dd93c1",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/74/044649ce9b6ec8a1277b6de82bb5685704d72b": "dd65524adece29442a34aa9dcec3265c",
".git/objects/74/7cb3f2d301afc7f261c1a88c4eeac8a052e90d": "0b80aec8f0cc179750f15deec7205206",
".git/objects/7b/104d6433d61bd473a0b24155a67399cb6d7d6f": "742b8f28e70896e695c3aa41fbb0450c",
".git/objects/81/5e8959afe41dced85e4de57933a642b1476834": "e1b1b4ba3f21e41c2761acbe84463bf1",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/b94270c74f242f7a4ad247cd8460e3c91b1c29": "36161ddd762a6edca84fe1cd48bddc54",
".git/objects/94/2f8b7b9691992c93f0cbf511eb7af1d7a4613b": "2a3a7036b55bb817768f069944aede5d",
".git/objects/a2/889fd75639a2c95748942efdefd4877a9051af": "40a853aa2c6f26f1260690aedc21c6cc",
".git/objects/a6/78adc0d4adcb0071d1cc2d91c3e6f8856afba1": "0178720ed2518ee7a06db6cc7437e297",
".git/objects/a7/9183b7eb4b5a461e4b12d99e53103910a76ef6": "05d0933188823d3a7a412f2d40a9fb40",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b8/c08cf9f2f5730a1dc05024f64eff408db1d275": "2154c593a460510f9ccdfa7a8ddd8b08",
".git/objects/b8/d00ddc647fb7c53899f3d7470802e263de4086": "99b9885f23f47d3c72bee0aaec754f13",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/79a1d3e04bb3927ac312492c190a98d5b82f5c": "a103a111a5e1cf37bb3471e25919fff9",
".git/objects/d5/e64918546d9dd87c9742239deae2397e634343": "676989f47ffa42d7e27f0fde3ce0b31c",
".git/objects/df/208e13c3c4d33bbb5138f2a09c4713644cb7bd": "eca011b6cac7ec9a4b2a95e94c9e6d22",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/4bc937220d8216ccc72e1c180d1851e63a364f": "b7ce2e567579d3966b18add99e783a7a",
".git/objects/f5/9c3d82aa8fdab8f12ad6e53bfa20d564e32a7b": "5654e9d9474d9d441afbd740bd5d7be0",
".git/objects/fa/d9d503da59237746e712b61872130e17af910c": "fb3f9c4c9a4bcabf772f72c2ccc7b2d2",
".git/refs/heads/main": "434277989498c07dc0b171d62aa467a4",
".git/refs/remotes/origin/main": "434277989498c07dc0b171d62aa467a4",
"assets/AssetManifest.bin": "22268954f1cbb8564e59415464344186",
"assets/AssetManifest.json": "0da703f246db47055bdf2be3f71801e2",
"assets/assets/image/self.jpg": "652bee3545e8ad35177cdc03a1d78f62",
"assets/assets/json/assets.json": "c737a9827139dbb06fa5faff1a2f22a1",
"assets/assets/svg/discord.svg": "ba626c72c8740daa5f23c93e5f63a8bd",
"assets/assets/svg/fb.svg": "8311f4d83beb903eed2a86f5b1890efa",
"assets/assets/svg/github.svg": "a0b00583d93c2f7084ad151ee0849934",
"assets/assets/svg/ig.svg": "b6c744edbbd685bced0fe1f69d0a0e89",
"assets/assets/svg/linkedin.svg": "c20e472dbbe47e5809cf79a0b4e283e4",
"assets/assets/svg/outlook.svg": "e82efb4eb42ea6c929b48c0a403e6613",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "a33c081c3c6f826d8ccb7a3d4e649737",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "1a008defe063ad757005679c5763e27d",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "28aed9874d2312a3da0d463bdb3af56d",
"icons/Icon-512.png": "f61afa2127eab47578e115dea4be1205",
"icons/Icon-maskable-192.png": "28aed9874d2312a3da0d463bdb3af56d",
"icons/Icon-maskable-512.png": "f61afa2127eab47578e115dea4be1205",
"index.html": "dc3ec0007992753cd7e936c4f4caef5a",
"/": "dc3ec0007992753cd7e936c4f4caef5a",
"main.dart.js": "d3d7cd00c740dbce65a8cee5f5664573",
"manifest.json": "04c51e34ad568eb5255bfee253d6f003",
"splash/img/dark-1x.png": "65ac7cc56c01624274aaf58e19c27c3a",
"splash/img/dark-2x.png": "fab807617e74d1e83b64d5d7a10b9831",
"splash/img/dark-3x.png": "904259659f4c27ee5410b0b111ac2e6f",
"splash/img/dark-4x.png": "2d53ca5f5326fb594cc8740f74504603",
"splash/img/light-1x.png": "65ac7cc56c01624274aaf58e19c27c3a",
"splash/img/light-2x.png": "fab807617e74d1e83b64d5d7a10b9831",
"splash/img/light-3x.png": "904259659f4c27ee5410b0b111ac2e6f",
"splash/img/light-4x.png": "2d53ca5f5326fb594cc8740f74504603",
"version.json": "37c8f19bfa5ea8cb90178d9ba5aab777"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
