import Vue from 'vue'
import VueRouter from 'vue-router'
// import { sync } from 'vuex-router-sync'
Vue.use(VueRouter)
import App from './App'
import Vuex from 'vuex'
Vue.use(Vuex)

/**
* you can add your module here
*/
let store = new Vuex.Store({
//   modules: {
//     i18n: vuexI18n.store
//   }
// })

// store.registerModule('vux', {
//   state: {
//     demoScrollTop: 0,
//     isLoading: false,
//     direction: 'forward'
//   },
//   mutations: {
//     updateDemoPosition (state, payload) {
//       state.demoScrollTop = payload.top
//     },
//     updateLoadingStatus (state, payload) {
//       state.isLoading = payload.isLoading
//     },
//     updateDirection (state, payload) {
//       state.direction = payload.direction
//     }
//   },
//   actions: {
//     updateDemoPosition ({commit}, top) {
//       commit({type: 'updateDemoPosition', top: top})
//     }
//   }
})

// Vue.use(vuexI18n.plugin, store)
// const FastClick = require('fastclick')
// FastClick.attach(document.body)

import Home from './demos/Home.vue'

// The following line will be replaced with by vux-loader with routes in ./demo_list.json
const routes = [
  {
    path: '/',
    component: Home,
    hidden: true // 不显示在导航中
  }
]

const router = new VueRouter({
  routes
})

// sync(store, router)

// simple history management
const history = window.sessionStorage
history.clear()
// let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

// router.beforeEach(function (to, from, next) {
//
// })
//
// router.afterEach(function (to) {
//
// })

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
