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
    path: '/random-string',
    name: 'RandomString',
    component:()=>import(/* webpackChunkName: "string" */ '../views/RandomString.vue')
  },
  {
    path: '/compress-json',
    name: 'CompressJSON',
    component:()=>import(/* webpackChunkName: "string" */ '../views/json/CompressJSON.vue')
  },
  {
    path: '/format-json',
    name: 'FormatJSON',
    component:()=>import(/* webpackChunkName: "string" */ '../views/json/FormatJSON.vue')
  },
  {
    path: '/binary-tree/create-binary-tree',
    name: 'CreateBinaryTree',
    component:()=>import(/* webpackChunkName: "string" */ '../views/binary_tree/ArrayToBinaryTree.vue')
  },
  {
    path: '/image-conversion',
    name: 'ImageConversion',
    component:()=>import(/* webpackChunkName: "string" */ '../views/ImageConversion.vue')
  },
  {
    path: '/base-conversion',
    name: 'BaseConversion',
    component:()=>import(/* webpackChunkName: "string" */ '../views/BaseConversion.vue')
  },
  {
    path: '/ky-test',
    name: 'Test',
    component:()=>import(/* webpackChunkName: "string" */ '../views/Test.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
});

export default router
