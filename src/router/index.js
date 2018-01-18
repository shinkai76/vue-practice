import Vue from 'vue'
import Router from 'vue-router'
import pageMyDemo from '@/pages/pageMyDemo'
import pageDairy from '@/pages/pageDairy'
import pageMakeFriends from '@/pages/pageMakeFriends'
import pageTodoList from '@/pages/pageTodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageMyDemo',
      component: pageMyDemo
    },
    {
      path: '/dairy',
      name: 'pageDairy',
      component: pageDairy
    },
    {
      path: '/makefriends',
      name: 'pageMakeFriends',
      component: pageMakeFriends
    },
    {
      path: '/todolist',
      name: 'pageTodoList',
      component: pageTodoList
    }
  ]
})
