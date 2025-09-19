
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './assets/main.css'

const messages = {
    en: {
        welcome: 'Welcome, {name}!'
    }
}

const i18n = createI18n({
    locale: 'en',
    messages
})


// Set a cookie with a 'secure token' for XSS demonstration
document.cookie = 'secure_token=super_secret_token_123; path=/';

const app = createApp(App)
app.use(i18n)
app.mount('#app')
