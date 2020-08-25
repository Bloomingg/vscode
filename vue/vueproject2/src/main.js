import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import './router/promission'
// import global from '@/utils/global'
import VueCompositionApi from "@vue/composition-api";

Vue.config.productionTip = false
// Vue.use(global)
Vue.use(ElementUI);
Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
