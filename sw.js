// Install and Activate only
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// REMOVED THE FETCH LISTENER ENTIRELY
// This stops the site from looping and freezing.
