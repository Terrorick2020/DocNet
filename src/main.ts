<<<<<<< HEAD
import { createApp } from 'vue'

import createPinia from "./store/createPinia" 
import './assets/scss/global.scss'
=======
import { createPinia } from 'pinia'
import { createApp } from 'vue'

>>>>>>> 6aee1ad848ba4e406be0589fd61e2ec282eb7374
import App from './App.vue'
import './assets/scss/global.scss'
import router from './routes/router'

<<<<<<< HEAD

createApp( App ).use( createPinia ).use( router ).mount( '#app' )
=======
createApp(App).use(createPinia()).use(router).mount('#app')
>>>>>>> 6aee1ad848ba4e406be0589fd61e2ec282eb7374
