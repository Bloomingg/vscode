import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import EleForm from 'vue-ele-form'

import './plugins/element'
import './plugins/avue'

Vue.use(EleForm)

Vue.config.productionTip = false

const http = axios.create({
  baseURL: "http://localhost:3000"
});
Vue.prototype.$http = http;//vue的axios
window.axios = axios
// window.axios.create({
//   baseURL: "http://localhost:3000"
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
