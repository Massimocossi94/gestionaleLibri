import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Homepage from './views/Homepage'
import Libreria from './views/Libreria'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Homepage },
  { path: '/books', component: Libreria }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
