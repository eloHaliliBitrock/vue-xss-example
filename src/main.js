
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './assets/main.css'

const messages = {
    en: {
        welcome: '<img src=x onerror=alert(`XSS!`)>Welcome to the XSS demo!'
    }
}

const i18n = createI18n({
    locale: 'en',
    messages
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
