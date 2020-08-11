import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
    Swipe,
    SwipeItem
} from "vant";
import {
    Lazyload
} from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')