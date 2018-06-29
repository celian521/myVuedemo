import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import '@/assets/style/entry.scss'
import 'amfe-flexible'
import axios from 'axios'


// VConsole 开发环境开启
if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole');
  const vclg = new VConsole();
}

Vue.config.productionTip = false

Vue.http = Vue.prototype.$http = axios;


new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
