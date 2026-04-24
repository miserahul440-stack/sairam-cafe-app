/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB8bDoXbQawAt5pmIT7tW2ras76UBDdifo",
  authDomain: "sairamcomputerapp.firebaseapp.com",
  projectId: "sairamcomputerapp",
  storageBucket: "sairamcomputerapp.appspot.com",
  messagingSenderId: "197160044288",
  appId: "1:197160044288:web:91389a83c0850481df95e5",
  measurementId: "G-XP60479IVZ"
});

const messaging = firebase.messaging();

// 🔔 Background notification
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png" // optional (icon nasel tari chalel)
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
