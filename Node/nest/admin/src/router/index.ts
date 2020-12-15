import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      { name: 'home', path: '/' },
      { name: 'courses', path: '/:resource/list', component: () => import('../views/ResourceCrud.vue'), props: true },
      // { name: 'courses', path: '/courses/list', component: () => import('../views/course/CourseList.vue') },
      // { name: 'eiditCourse', path: '/courses/edit/:id', component: () => import('../views/course/EditCourse.vue'), props: true },
      // { name: 'createCourse', path: '/courses/create', component: () => import('../views/course/EditCourse.vue') }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
