import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import store from './store'

Vue.config.productionTip = false
Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (document.documentElement.clientWidth > 500) {
  window.alert('建议使用手机打开本页面，以保证最佳浏览效果')
  const img = document.createElement('img')
  img.src = './qrcode.png'
  img.style.maxWidth = '25vh'
  img.style.maxHeight = '25vh'
  img.style.position = 'fixed'
  img.style.top = '50%'
  img.style.transform = 'translate(0,-50%)';
  document.body.appendChild(img)
}