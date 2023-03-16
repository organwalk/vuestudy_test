import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import store from './store/store'
import VueScrollTo from 'vue-scrollto'

createApp(App)
.use(router)
.use(store)
.use(VueScrollTo)
.directive('scroll', {
    mounted(el, binding) {
      const options = binding.value || {}
      const offsetTop = options.offsetTop || 0
      window.addEventListener('scroll', () => {
        if (window.pageYOffset >= offsetTop) {
          binding.instance.$emit('scroll', window.pageYOffset)
        }
      })
    },
  })
.mount('#app')

