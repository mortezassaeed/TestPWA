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
self.addEventListener('notificationclick', event =>{

const notification = event.notification;
const action = event.action;
console.log(event.notification)
if(action === 'close')
{
    notification.close();
}
else{
    clients.openWindow('https://google.com')

}
});

self.addEventListener('activate', async () => {
    // This will be called only once when the service worker is activated.
    try {
        const options = {}
        const subscription = await self.registration.pushManager.subscribe(options)
        console.log(JSON.stringify(subscription))
    } catch (err) {
        console.log('Error', err)
    }
})