'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "7d06c5bf5df256a5dde2db6767606dcc",
"icons/Icon-maskable-192.png": "bb32bd3df8f93fb44b82c4910ebf736c",
"icons/Icon-maskable-512.png": "7dfb7067ec90536c420f202038308a97",
"icons/Icon-192.png": "bb32bd3df8f93fb44b82c4910ebf736c",
"icons/Icon-512.png": "7dfb7067ec90536c420f202038308a97",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "a4f4b846e0a49bb7fc2f918bb36ee8b5",
"index1.html": "62220f817a556719b6e3d468b8ac031e",
"canvaskit/skwasm.js": "5b13215adfc99b441723b8d1c9987b43",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "cf17efa366ffd7a272339eac21a7d912",
"canvaskit/chromium/canvaskit.wasm": "d102b43cdb4abb9764fedd92e62b270d",
"canvaskit/chromium/canvaskit.js": "9c4f8f68506cf4d2dc9b05219cd69920",
"canvaskit/skwasm.wasm": "e52fdf38db45a29d98069d87dbff17fe",
"canvaskit/canvaskit.js": "42cca10620a5e19f50b4d5cb990b74bf",
"version.json": "1d1748889810c682ac4e6fbadb13700d",
"index.html": "8e858d3799e09e9d1236790de52ce18c",
"/": "8e858d3799e09e9d1236790de52ce18c",
"assets/fonts/MaterialIcons-Regular.otf": "3a2bf9324552c817a8e5f45c6282800b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.bin.json": "7baded5b99de5ff78053549686082633",
"assets/AssetManifest.bin": "637508c5a0f690d8feb85604c500c905",
"assets/FontManifest.json": "23b92b5ac88be0ec8ca0c847e3f172c7",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/favicon.png": "621016b8527874169e4b168836a39e0d",
"assets/AssetManifest.json": "b36c752bf532fa76db1a35e24792cdfe",
"assets/assets/fonts/Montserrat/static/Montserrat-Light.ttf": "e65ae7ed560da1a63db603bd8584cfdb",
"assets/assets/fonts/Montserrat/static/Montserrat-LightItalic.ttf": "e70e5d8d5129f35418fe2cfaa6132c1d",
"assets/assets/fonts/Montserrat/static/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/Montserrat/static/Montserrat-MediumItalic.ttf": "2e7c02a0a4a5fd318b0625d120ad2033",
"assets/assets/fonts/Montserrat/static/Montserrat-ExtraLight.ttf": "fca7947b08333e5ffcb80c069755b5c9",
"assets/assets/fonts/Montserrat/static/Montserrat-Thin.ttf": "4b73d125bab54f94ed2510590c237f73",
"assets/assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf": "bd8fb30c6473177cfb9a5544c9ad8fdb",
"assets/assets/fonts/Montserrat/static/Montserrat-ThinItalic.ttf": "59cdce8fbd384a39ab0fd14b9f693de5",
"assets/assets/fonts/Montserrat/static/Montserrat-ExtraLightItalic.ttf": "e4d0c1f4d67a7f3d23a1f2f78d24ea57",
"assets/assets/fonts/Montserrat/static/Montserrat-BlackItalic.ttf": "a943ff860cf7bda5ce3722cad5c1dc06",
"assets/assets/fonts/Montserrat/static/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat/static/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Montserrat/static/Montserrat-SemiBoldItalic.ttf": "d41c0a341637c2e35ae019730b2d45a5",
"assets/assets/fonts/Montserrat/static/Montserrat-ExtraBoldItalic.ttf": "e07b3f35e3e0073b2cde4c5a951cc24e",
"assets/assets/fonts/Montserrat/static/Montserrat-Italic.ttf": "761177c558bb3a0084aa85704315b990",
"assets/assets/fonts/Montserrat/static/Montserrat-Black.ttf": "9c1278c56276b018109f295c1a751a69",
"assets/assets/fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf": "5b315bd5a3b7fa34eef7dfd5786b90b0",
"assets/assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf": "52a37115b1d8d5d6ae0b0e373e692c9d",
"assets/assets/icons/602011572.svg": "443a65f99d4690240b33ff30cbb163f1",
"assets/assets/icons/19-OLD03.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/icons/07.svg": "5b5a8e377dc577cd8c4a2d3b53e2a901",
"assets/assets/icons/6020113.svg": "dfc76976b701f3f810da1012e3b2604f",
"assets/assets/icons/602011567-OLD3.svg": "82190873a2f939410079c81e3d857cad",
"assets/assets/icons/prueba.svg": "377decaf75eb2429c8748cd60ce86918",
"assets/assets/icons/6020103a.svg": "e80c56d6301c87ed47249f74d4d162dd",
"assets/assets/icons/6020111a-A09.svg": "3ceb4dbb6ad5ac49dc7c69d57b6ccaba",
"assets/assets/icons/17.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/6020107-A00.svg": "9986d8606afeabe55326b56a3e3e7d7b",
"assets/assets/icons/20-OLD03.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/15.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/602011571-OLD3.svg": "bc52139d6ec3e6e6895d2c405072146b",
"assets/assets/icons/602011561.svg": "dda38bfaf165c051e6ee30b7abb00395",
"assets/assets/icons/occupational_safety_instructor.svg": "145f30b1183c03ee8b1a19a4913c226f",
"assets/assets/icons/6020108.svg": "90914b048dd7307b51d194f5aac94147",
"assets/assets/icons/6020103.svg": "05290285b66e1bd669269e9d14fc221c",
"assets/assets/icons/6020102.svg": "37b13ae1f5df272bcb9671118d157e15",
"assets/assets/icons/602011545a.svg": "3f74900415a86050fbf39e4d3a9b072e",
"assets/assets/icons/6029001.svg": "842d18861f3bbf8c29fa9e0cd38181cf",
"assets/assets/icons/poker_icon.png": "9ffc384e9a6da2cbeae09a637cf08b81",
"assets/assets/icons/2020901.svg": "74666e0044716c91e049470abc2bf98c",
"assets/assets/icons/6020112-OLD03.svg": "cb13417d478288ddbc4c16c44cb1c495",
"assets/assets/icons/6020104a.svg": "c38fbe11d8355fa95632f46e5be3f035",
"assets/assets/icons/602010208-OLD01.svg": "cb1415ea0eefe27bd9f2e433b7671c43",
"assets/assets/icons/cleaningtoilet-A01.svg": "61ceef52f8a5f10472cf102bb8df9ef4",
"assets/assets/icons/car-service-svgrepo-com.svg": "8a98531a58851fb4c56dfa92e1157543",
"assets/assets/icons/602011561%2520copy.svg": "04b531b41b1beed20f7f907cf8ca605f",
"assets/assets/icons/6020110.svg": "0fa20a057bbb2e782b0a36c4a25209ed",
"assets/assets/icons/Papel%2520higienico.svg": "319b3f780923d0251703484442f84b38",
"assets/assets/icons/07-OLD03.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/34.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/602010206.svg": "f078df6b969102c9c4f730e7eeb26a43",
"assets/assets/icons/602011567.svg": "c6c5af317ace4e881f113cbe4d6a4767",
"assets/assets/icons/21.svg": "cfecde045585ed35c59ec8f02f7a6935",
"assets/assets/icons/10.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/602011547%2520copy.svg": "d817c6a810730940e4d11b3bfef7d43c",
"assets/assets/icons/19.svg": "eff39a7b44a4f1a146c687936bd90b2d",
"assets/assets/icons/21-OLD03.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/6020111a.svg": "42def76eb14ea60a18bfd34f1ed1e77c",
"assets/assets/icons/6020106.svg": "1d00b07024309d3a7dd3f1c0d65ead51",
"assets/assets/icons/dostorres.png": "5943a125dd3f167de3cc9f10deccd5bc",
"assets/assets/icons/6020115.svg": "aa469bc62f0324367aba9099bc1bfb8c",
"assets/assets/icons/6020109.svg": "63d7f1070adc5ad01cc151012b04307e",
"assets/assets/icons/6020104.svg": "56f3ead5366abdb21e0cd792b50b7ff5",
"assets/assets/icons/6020125-OLD02.svg": "844e82ffb60d53523e161820a39ac41d",
"assets/assets/icons/2010701-A12.svg": "45e501184cbd670700afa60013885d63",
"assets/assets/icons/6020125.svg": "970bfa352767eee4f3e8c376c8d36fb4",
"assets/assets/icons/602011541.svg": "5b6a969299f992f16512bcc7400f42f6",
"assets/assets/icons/favicon.png": "621016b8527874169e4b168836a39e0d",
"assets/assets/icons/60102.svg": "6d609dbc57643ab72234dda3889f40ee",
"assets/assets/icons/6020126.svg": "57b908bdd654758449f76e2acd4fc88f",
"assets/assets/icons/602011547a.svg": "e9ebf1b00c1c1f4fe88abb102e85a1a7",
"assets/assets/icons/18.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/04-OLD03.svg": "a6116a5d5632e6f23106c10e17d4f60a",
"assets/assets/icons/20.svg": "60666c69da2a63846acc5faf54740419",
"assets/assets/icons/screwdriver-icon.svg": "294726c546c28546254cf0638b78b618",
"assets/assets/icons/602011547b.svg": "5030e424d600ba9b4b8e6a52c8219ac0",
"assets/assets/icons/12.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/99.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/icomaint.svg": "8f06dc3ab936a35865001cccd71d258b",
"assets/assets/icons/6020103-OLD03.svg": "c178f076dda2cd61bc4f5a4b64489c42",
"assets/assets/icons/cleaningtoilet.svg": "3ef3760f93dd49e796dab7cb6f1b724e",
"assets/assets/icons/6020117.svg": "992f45292acf5f05e9ed110d5fed9415",
"assets/assets/icons/602011545.svg": "171768d38b3e07186421ae7b706c9000",
"assets/assets/icons/08.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/6020116.svg": "5c79707440af3afd92fc6e13a7886753",
"assets/assets/icons/Fire-fighting-equipment.svg": "98efa41d8b9e28899de3b064ada3fac6",
"assets/assets/icons/6020104%2520copy.svg": "acde4888af90f1f399cb38dbd21556a2",
"assets/assets/icons/602010208.svg": "5aaf5bd8618b36615a10a768d00021de",
"assets/assets/icons/6020107.svg": "1229534a2978e47475fb9d7cbeb51069",
"assets/assets/icons/14.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/2010701.svg": "21c8ec477667ec38a676ea1f6a23652c",
"assets/assets/icons/04.svg": "e97ef809f59de27d83ca283beb9ba815",
"assets/assets/icons/6020112.svg": "1ae47a075abf06ee0e12af110d298efd",
"assets/assets/icons/602011546.min.svg": "4eafe5df41fa8bda6e580571098a93e5",
"assets/assets/icons/602011547.svg": "748fe8f619bb18734bf40da5ef293234",
"assets/assets/icons/6020115-OLD03.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/16.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/Logo-DT-220px.png": "5943a125dd3f167de3cc9f10deccd5bc",
"assets/assets/icons/6020106-OLD3.svg": "6d3b9e3b5dc8113bb5a9782573081ed5",
"assets/assets/icons/6020120.svg": "ac67f3f179fd508634c2e6a9b968dda4",
"assets/assets/icons/602011546a.svg": "909b540730ad103fa48506dc0e1abccb",
"assets/assets/icons/6020111.svg": "c1a9694b0e90d15481a757fbddb8d483",
"assets/assets/icons/602011572-OLD01.svg": "ed7b96b97333aa2b92aa570cd5688a8a",
"assets/assets/icons/6020103b-A11.svg": "6f7efde53f51a54ac48ec2c9bebddbbb",
"assets/assets/icons/602011571.svg": "18781d9cc8c1b18484f2680cbcd3e2a3",
"assets/assets/icons/6020107a.svg": "f2284a4d98b5da2f16372dc0941ea009",
"assets/assets/icons/13.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/602011546.svg": "a0373231d51a45f7a001e4fcc26e81d8",
"assets/assets/icons/602011543.svg": "5b24699850bd952d68f92e5405e420e7",
"assets/assets/icons/602011561a.svg": "91c65093eaf1406e27334719df3b3888",
"assets/assets/icons/6020103b.svg": "4cc78cfbdaaf00f7e0cfeb91f89f52c9",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/logo1070x444.png": "aa786f4ef86e88a47660cb4e72622335",
"assets/assets/images/logo250x107.png": "af9a1726170f75caba04c9c9ac1f708c",
"assets/assets/images/logo1_32x16.png": "60acdf1aa196f0313271630011d8be31",
"assets/assets/images/logo60x25.png": "279a7de9643706f8d9782969dd339c63",
"assets/assets/images/logo500x207.png": "8ccac3490c47c3e1b2aff7176ac84f2e",
"assets/assets/images/logo16x6.xcf": "d0d8e08c150337c7b4461ab998e207cd",
"assets/assets/images/logo150x62.xcf": "6f111d0dc89564136ed6a1403ef5e299",
"assets/assets/images/logo.png": "621016b8527874169e4b168836a39e0d",
"assets/assets/images/logo150x62.png": "b3b5896cfaa65277960e84cfe6976d8d",
"assets/assets/images/dostorres.png": "5943a125dd3f167de3cc9f10deccd5bc",
"assets/assets/images/logo100x41.png": "7e163a8675417381b6f696965ee0ce69",
"assets/assets/images/favicon.png": "621016b8527874169e4b168836a39e0d",
"assets/assets/images/6020104.png": "3f56b538de0afd6ed166c534930064c1",
"assets/assets/images/logo132x16.xcf": "433046bbc941d20dc2c1a82df027b931",
"assets/assets/images/logo.png.backup": "621016b8527874169e4b168836a39e0d",
"assets/assets/images/logo250x107.xcf": "13da87665bf942b7b037dcdeb92ddc40",
"assets/assets/images/logo1070x444.xcf": "26ef35f1b59b9cb4371a6efeb12decec",
"assets/assets/images/logo60x25.xcf": "d1a13c12f7643bb14041adf64bc9324b",
"assets/assets/images/logo1_16x6.png": "bf33dce861d42ab9db5870a2e9fc61c4",
"assets/assets/images/logo800x332.png": "ab2f24d73bacf1cf0b717caaa82165c5",
"assets/assets/images/logo1.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/logo800x332.xcf": "b083b41a1ba665bc9f680766caa118aa",
"assets/assets/images/60102.png": "3cc9f9ffac49ad795dcbe26791700c40",
"assets/assets/images/logo500x207.xcf": "ca18b39fd0768ca34b197a267549fa58",
"assets/assets/images/logo100x41.xcf": "19f9c1edd3af238c3814393c7995621a",
"assets/NOTICES": "035e37f0fb78b3e9bcd64dde1e769889",
"manifest.json": "42475d522680c46f752a03f1f7ef99fc"};
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
