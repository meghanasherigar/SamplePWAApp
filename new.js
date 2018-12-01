  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('serverWorker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }