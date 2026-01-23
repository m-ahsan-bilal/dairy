self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    // Add caching logic here
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
});

self.addEventListener('fetch', (event) => {
    // Basic fetch passthrough
});
