importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyC-P9gF_jehC3PlhBnd_cdvu-vcMYLAiGM",
    authDomain: "notification-app-928b6.firebaseapp.com",
    projectId: "notification-app-928b6",
    storageBucket: "notification-app-928b6.appspot.com",
    messagingSenderId: "592459242129",
    appId: "1:592459242129:web:66c5c1a1915f38cb4a3d30",
    measurementId: "G-MC8H30LWZT"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);

    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
