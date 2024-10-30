// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { UnuseUI } from 'unuse-ui'
import Theme from 'vitepress/theme'

import 'unuse-ui/dist/assets/style.css'
import 'uno.css'
import './style.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    app.use(UnuseUI)
  },
}
