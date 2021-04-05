import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from './home'
import ShelfRouter from './shelf'
import ListRouter from './list'
import ProfileRouter from './profile'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    HomeRouter,
    ShelfRouter,
    ListRouter,
    ProfileRouter,
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})

export default router
