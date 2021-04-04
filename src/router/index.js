import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home'
import Shelf from 'views/Shelf'
import List from 'views/List'
import Profile from 'views/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/shelf',
    name: 'Shelf', 
    component: Shelf
  },
  {
    path: '/list',
    name: 'List', 
    component: List 
  },
  {
    path: '/profile',
    name: 'Profile',  
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
