import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Login from '../views/Login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:Layout,
      // 懒加载
      component:()=>import('../views/Layout/index.vue'),
      children:[
        {
          // path制空 当路劲为 '/'的时候 也会加载
          path:'',
          component:()=>import('../views/Home/index.vue')
        },
        {
          // 路由传参  id
          path:'category/:id',
          component:()=>import('../views/Category/index.vue')
        }
      ]
    },
    {
      path:'/login',
      name:Login,
      component:()=>import('../views/Login/index.vue')     
    }
  ]
})

export default router
