// sw.js - Service Worker for Galaxy S22 Pantry
self.addEventListener('install', (event) => {
    self.skipWaiting(); // Forces the waiting service worker to become active
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim()); // Takes control of all open tabs immediately
});

// Listener for notifications triggered by the main app
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    // When the user clicks the notification, open the app
    event.waitUntil(
        clients.openWindow('/')
    );
});
