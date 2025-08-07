// pages/FCMTest.js
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyC-P9gF_jehC3PlhBnd_cdvu-vcMYLAiGM",
    authDomain: "notification-app-928b6.firebaseapp.com",
    projectId: "notification-app-928b6",
    storageBucket: "notification-app-928b6.appspot.com",
    messagingSenderId: "592459242129",
    appId: "1:592459242129:web:66c5c1a1915f38cb4a3d30",
    measurementId: "G-MC8H30LWZT"
};
const app_key = 'BKkbRp95Cm9HDYWJrU-VO2vCj_WGO7rSwF8FF8pa-hIrPJD9Zzf-GUofTwcF6uidLqbgBFPMMaAiLv7wlvbncqg';

const Firebase = () => {
    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);
    let token = null
    return (
        <div>
            <h1>FCM Token:</h1>
            <button onClick={() => getToken(messaging, { vapidKey: app_key }).then((currentToken) => {
                    if (currentToken) {
                    console.log('currentToken', currentToken)
                    } else {
                    console.log('No registration token available. Request permission to generate one.');
                    }
                }).catch((err) => {
                    console.log('An error occurred while retrieving token. ', err);
                })}>
                Get FCM Token
            </button>
        </div>
    );
}

export default Firebase;
