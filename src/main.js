import { createApp } from 'vue'
import { createPinia } from 'pinia'

import naive from "naive-ui"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

import App from './App.vue'
import router from './router'

import "vfonts/Lato.css";
import "vfonts/FiraCode.css";

import "@/assets/styles/app.scss";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(naive);

app.mount('#app')
