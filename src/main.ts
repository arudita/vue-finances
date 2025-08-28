import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/auth';
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia();

app.use(pinia)
app.use(router)

const authStore = useAuthStore();
authStore.checkAuth();

app.mount('#app')
