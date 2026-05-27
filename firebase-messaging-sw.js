/* Firebase Messaging service worker (Web).
 * Replace the firebase.initializeApp config with values from FlutterFire
 * (`lib/firebase_options.dart` web section) after `flutterfire configure`.
 */
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'REPLACE_WEB_API_KEY',
  authDomain: 'your-firebase-project.firebaseapp.com',
  projectId: 'your-firebase-project',
  storageBucket: 'your-firebase-project.appspot.com',
  messagingSenderId: '000000000000',
  appId: '1:000000000000:web:0000000000000000000000',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const type = payload.data && payload.data.type;
  if (type === 'listing_interest') {
    return;
  }
});
