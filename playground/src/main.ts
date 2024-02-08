// @unocss-include
import { createApp } from 'vue'
import { createUnuseUi } from 'unuse-ui'
import { createRouter, createWebHistory } from 'vue-router/auto'

import App from './App.vue'
import { options } from './unuse.config'

import 'unuse-ui/dist/style.css'
import 'uno.css'

const router = createRouter({
  history: createWebHistory(),
})

createApp(App)
  .use(createUnuseUi(options))
  .use(router)
  .mount('#app')
