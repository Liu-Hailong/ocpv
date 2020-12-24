import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Func from '../views/Func'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/func',
    name: 'Func',
    component: Func
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
