console.log('service worker in runing')
var cacheName = 'hello-pwa';
var filesToCache = [
    './',
    './index.html',
    './css/style.css',
    './js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});

/*Handle notifications */
self.addEventListener('notificationclick', event => {
    const notification = event.notification;
    const action = event.action;
    console.log(event.notification)
    if (action === 'close') {
        notification.close();
    }
    else {
        clients.openWindow('https://google.com')
    }


});