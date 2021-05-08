import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Swipe,
  SwipeItem,
  Lazyload
} from 'vant'
// import Vant from 'vant';
// import 'vant/lib/index.css';
// import store from './store'

Vue.use(Swipe).use(SwipeItem).use(Lazyload)


// 在Vue原型上增加事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app")

// createApp(App).use(router).mount('#app')
