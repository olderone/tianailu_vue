import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/home/login'
import Edit from '@/components/home/edit'
import About from '@/components/home/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },{
      path: '/edit',
      component: Edit
    },{
      path: '/about',
      component: About
    }
  ]
})
