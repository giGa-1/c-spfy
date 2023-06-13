import { createPinia } from 'pinia'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app')



