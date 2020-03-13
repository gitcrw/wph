import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import 'lib-flexible'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data:{
    eventHub:new Vue()//使用集中的事件处理器，在任何组件中调用事件发射，接收的方法
  },
  router,
  store
}).$mount('#app')
