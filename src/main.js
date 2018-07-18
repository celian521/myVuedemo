import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import '@/assets/style/entry.scss'
import 'amfe-flexible'
import axios from 'axios'

import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue);

//////////////////////////test
// import msgComponent from '@/page/dialog/alert.vue'
// import { AlertPlugin, ToastPlugin } from 'vux'

// Vue.use(AlertPlugin)
// Vue.use(ToastPlugin)

// import confirm from "@/page/dialog/confirm.js";
// Vue.use(confirm, { Vue })

import Modal from '@/lib/Modal/index.js';
Vue.use(Modal);

///////////////////////test end

// VConsole 开发环境开启
// if (process.env.NODE_ENV === 'development') {
//   const VConsole = require('vconsole');
//   const vclg = new VConsole();
// }

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
