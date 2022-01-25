import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible'

Vue.config.productionTip = false
Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)

Vue.use(ElementUI, { size: 'mini', zIndex: 3000 });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (document.documentElement.clientWidth > 500) {
  const string1 = document.createElement('h2')
  string1.innerHTML = '扫描查看移动端'
  document.body.appendChild(string1)
  string1.style.position = 'fixed'
  string1.style.top = '63vh'
  string1.style.left = '3vw'
  const img = document.createElement('img')
  img.src = './qrcode.png'
  img.style.maxWidth = '25vh'
  img.style.maxHeight = '25vh'
  img.style.position = 'fixed'
  img.style.top = '50%'
  img.style.transform = 'translate(0,-50%)';
  document.body.appendChild(img)
}
