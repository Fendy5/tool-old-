import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
// VueRouter.prototype.push = function push(location:string) {
//   return VueRouter.prototype.push.call(this, location)
// }
const routes:RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/string',
    name: 'String',
    component:()=>import(/* webpackChunkName: "string" */ '../views/String.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
