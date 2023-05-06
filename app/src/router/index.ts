import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/main/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },   
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }, 
    {
      path: '/',
      name: 'home',
      component: HomeView
    }

  ]
})

export default router
