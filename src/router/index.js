import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/home/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
