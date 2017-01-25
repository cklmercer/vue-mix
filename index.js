import app from './app'
import router from './router'
import store from './store'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueStash from 'vue-stash'

Vue.use(VueRouter)
Vue.use(VueStash)

new Vue({
  el: '#app',
  render: h => h(app),
  router: new VueRouter(router),
  data: { store }
})
