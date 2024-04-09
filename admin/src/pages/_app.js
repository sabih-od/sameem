// ** Next Imports
import Head from 'next/head'
import {Router} from 'next/router'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import {CacheProvider} from '@emotion/react'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import {SettingsConsumer, SettingsProvider} from 'src/@core/context/settingsContext'

// ** Utils Imports
import {createEmotionCache} from 'src/@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'

import {Provider} from 'react-redux';
import {wrapper} from '../store/store';
import AuthMiddleware from "../middlewares/AuthMiddleware";
import { apiUrl, getToken } from "../services/global";
import { useEffect } from 'react'
import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage } from 'firebase/messaging';

const clientSideEmotionCache = createEmotionCache()

const firebaseConfig = {
    apiKey: "AIzaSyC-P9gF_jehC3PlhBnd_cdvu-vcMYLAiGM",
    authDomain: "notification-app-928b6.firebaseapp.com",
    projectId: "notification-app-928b6",
    storageBucket: "notification-app-928b6.appspot.com",
    messagingSenderId: "592459242129",
    appId: "1:592459242129:web:66c5c1a1915f38cb4a3d30",
    measurementId: "G-MC8H30LWZT"
  };

// ** Pace Loader
if (themeConfig.routingLoader) {
    Router.events.on('routeChangeStart', () => {
        NProgress.start()
    })
    Router.events.on('routeChangeError', () => {
        NProgress.done()
    })
    Router.events.on('routeChangeComplete', () => {
        NProgress.done()
    })
}

// ** Configure JSS & ClassName
const App = ({...rest}) => {
    const {store, props} = wrapper.useWrappedStore(rest);
    const token = getToken();

    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props
    // Variables

    // const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

    const getLayout = Component.getLayout ?? (page => 
        (token) ? <UserLayout>{page}</UserLayout> : page
    )
    
    useEffect(() => {
        const initializeFirebase = async () => {
            // Initialize Firebase
            // const app = initializeApp(firebaseConfig);
            // const messaging = getMessaging(app);

            try {
                // Register the service worker
                if ('serviceWorker' in navigator) {
                    const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
                    console.log('ServiceWorker registration successful:', registration);

                    // Wait for the service worker to be activated
                    await new Promise((resolve) => {
                        if (registration.active) {
                            resolve();
                        } else {
                            registration.addEventListener('statechange', (event) => {
                                if (event.target.state === 'activated') {
                                    resolve();
                                }
                            });
                        }
                    });

                    // Subscribe to push notifications
                    // const FCMtoken = await getToken(messaging);
                    // console.log('FCM token:', FCMtoken);
                } else {
                    console.log('Service workers are not supported.');
                }
            } catch (error) {
                console.log('ServiceWorker registration failed:', error);
            }
        };

        initializeFirebase();
    }, []);
    

    return (
        <Provider store={store}>
            <CacheProvider value={emotionCache}>
                <Head>
                    <title>{`${themeConfig.templateName}`}</title>
                    <meta
                        name='description'
                        content={`${themeConfig.templateName}`}
                    />
                    <meta name='keywords' content='Admin Panel'/>
                    <meta name='viewport' content='initial-scale=1, width=device-width'/>
                </Head>

                <AuthMiddleware>
                    <SettingsProvider>
                        <SettingsConsumer>
                            {({settings}) => {
                                return <ThemeComponent settings={settings}>{getLayout(
                                    <Component {...pageProps} />)}</ThemeComponent>
                            }}
                        </SettingsConsumer>
                    </SettingsProvider>
                </AuthMiddleware>
            </CacheProvider>
        </Provider>
    )
}

export default App
