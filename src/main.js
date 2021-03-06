import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Search from './views/Search'
import Libreria from './views/Libreria'
import Registrazione from './views/Registrazione'
import Login from './views/Login'

Vue.use(VueRouter)

const routes = [
  { path: '/search', component: Search },
  { path: '/books', component: Libreria },
  { path: '/registrazione', component: Registrazione },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
