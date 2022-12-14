import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入iconfont
import '@/assets/fonts/iconfont.css'
// 引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
// 注册全局vant
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
