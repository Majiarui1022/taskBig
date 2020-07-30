import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import boss from '@/components/boss'
import canvast from '@/components/canvast'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/boss',
      name: 'boss',
      component: boss
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: canvast
      
    }
  ]
})
