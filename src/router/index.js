import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Func from '../views/Func'
import Regist from "../views/Regist";
import RetailOrderList from "@/components/RetailOrderList";
import PendingOrder from "@/components/PendingOrder";
import PurchaseOrder from "@/components/PurchaseOrder";

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
    path: '/Regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/func',
    name: 'Func',
    component: Func,
    children: [
      {
        path: '/SelectFunc',
        name: 'SelectFunc',
        component: SelectFunc,
      },
      {
        path: '/WholesalePurchase',
        name: 'WholesalePurchase',
        component: WholesalePurchase,
      },
      {
        path: '/Stockdemand',
        name: 'Stockdemand',
        component: Stockdemand,
      },
      {
        path: '/PurchaseOrder',
        name: 'PurchaseOrder',
        component: PurchaseOrder,
      },
      {
        path: '/PendingOrder',
        name: 'PendingOrder',
        component: PendingOrder,
      },
      {
        path: '/RetailOrderList',
        name: 'RetailOrderList',
        component: RetailOrderList,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
