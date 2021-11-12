import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from "./store"
import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDceegQETKn80e5PME1-lqcdKzUibmOLRI",
    authDomain: "mylittlehelper-1630944601002.firebaseapp.com",
    projectId: "mylittlehelper-1630944601002",
    storageBucket: "mylittlehelper-1630944601002.appspot.com",
    messagingSenderId: "362424391326",
    appId: "1:362424391326:web:91551ed24a6830b6b48d8f"
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
import { getFirestore, } from "firebase/firestore"
import {
    getAuth,

} from "firebase/auth";
export const db = getFirestore(firebaseApp)
export const auth = getAuth();
const app = createApp(App)
    .use(IonicVue)
    .use(router)
    .use(store);

router.isReady().then(() => {
    app.mount('#app');
});