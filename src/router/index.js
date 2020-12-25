import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Func from '../views/Func'
import Regist from "../views/Regist";
import RetailOrderList from "@/views/RetailOrderList";
import PendingOrder from "@/views/PendingOrder";
import PurchaseOrder from "@/views/PurchaseOrder";
import SubmitOrder from "@/views/SubmitOrder";

import test from '../components/test'
import SelectFunc from "../components/SelectFunc"
import WholesalePurchase from "../components/WholesalePurchase"
import Stockdemand from "../components/Stockdemand"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/func',
    name: 'Func',
    component: Func,
    children: [
      {
        path: '/WholesalePurchase',
        name: 'WholesalePurchase',
        component: WholesalePurchase
      },
      {
        path: '/Stockdemand',
        name: 'Stockdemand',
        component: Stockdemand
      },
      {
        path: '/test',
        component: test
      },
      {
        path: '/',
        name: 'SelectFunc',
        component: SelectFunc
      }
    ]
  },
  {
    path: '/retailorderlist',
    name: 'RetailOrderList',
    component: RetailOrderList
  },
  {
    path: '/pendingorder',
    name: 'PendingOrder',
    component: PendingOrder
  },
  {
    path: '/purchaseorder',
    name: 'PurchaseOrder',
    component: PurchaseOrder
  },
  {
    path: '/submitorder',
    name: 'SubmitOrder',
    component: SubmitOrder
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
