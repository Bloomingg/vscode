import Vue from 'vue'
import VueRouter from 'vue-router'
import { Icon } from 'element-ui'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/login',
    hidden: true,
    meta:{
      name:"主页"
    }
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    meta:{
      name:"登录"
    },
    component: () => import( '../views/Login/index.vue')  
  },
  {
    path: '/console',
    name: 'Console',
    meta:{
      name:"控制台",
      icon:'el-icon-monitor'
    },
    redirect:'/index',
    component: () => import('../views/Layout/index'),
    children:[
      {
        path: '/index',
        name: 'Index',
        meta:{
          name:"首页"
        },
        component: () => import('../views/Console/Console'),
      }
    ]
  },
  {
    path: '/info',
    name: 'Info',
    meta:{
      name:"信息管理",
      icon:'el-icon-s-order'
    },
    component: () => import( '../views/Layout/index.vue') ,
    children:[
      {
        path: '/infoIndex',
        name: 'InfoIndex',
        meta:{
          name:"信息列表"
        },
        component: () => import('../views/Info/index'),
      },
      {
        path: '/infoCategory',
        name: 'InfoCategory',
        meta:{
          name:"信息分类"
        },
        component: () => import('../views/Info/InfoCategory'),
      },
      {
        path: '/infoDetailed',
        name: 'infoDetailed',
        hidden:true,
       
        meta:{
          name:"信息详情"
        },
        component: () => import('../views/Info/infoDetailed'),
      }
    ] 
  },
  {
    path: '/user',
    name: 'User',
    meta:{
      name:"用户管理",
      icon:'el-icon-s-custom'
    },
    component: () => import( '../views/Layout/index.vue') ,
    children:[
      {
        path: '/userIndex',
        name: 'UserIndex',
        meta:{
          name:"用户列表"
        },
        component: () => import('../views/User/index'),
      },
    ] 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
