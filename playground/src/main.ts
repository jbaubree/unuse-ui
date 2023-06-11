import { createApp } from 'vue'
import { UnuseUI } from 'unuse-ui'
import { createRouter, createWebHistory } from 'vue-router/auto'

import App from './App.vue'

import 'unuse-ui/dist/style.css'
import 'uno.css'

const router = createRouter({
  history: createWebHistory(),
})

createApp(App)
  .use(UnuseUI)
  .use(router)
  .mount('#app')
