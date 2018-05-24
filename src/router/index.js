import Vue from 'vue'
import Router from 'vue-router'
import loading from '@/components/loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: loading
    }
  ]
})
