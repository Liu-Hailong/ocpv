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
import MainPage from "@/backstage/MainPage";
import WaitList_Stockdemand from "@/backstage/WaitList_Stockdemand";
import WaitList_Wholesale from "@/backstage/WaitList_Wholesale";
import Recheck_Stockdemand from "@/backstage/Recheck_Stockdemand";
import Recheck_Wholesale from "@/backstage/Recheck_Wholesale";
import firstpage from "@/components/firstpage";

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
        path: '/',
        name: 'firstpage',
        component: firstpage,
      },
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
  },
  {
    path: '/MainPage',
    name: 'MainPage',
    component: MainPage,
    children: [
      {
        path: '/WaitList_Stockdemand',
        name: 'WaitList_Stockdemand',
        component: WaitList_Stockdemand,
      },
      {
        path: '/WaitList_Wholesale',
        name: 'WaitList_Wholesale',
        component: WaitList_Wholesale,
      },
      {
        path: '/Recheck_Stockdemand',
        name: 'Recheck_Stockdemand',
        component: Recheck_Stockdemand,
      },
      {
        path: '/Recheck_Wholesale',
        name: 'Recheck_Wholesale',
        component: Recheck_Wholesale,
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
