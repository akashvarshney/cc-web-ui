import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/main/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AboutView from '../views/main/AboutView.vue'
import BlogView from '../views/main/BlogView.vue'
import ContactUsView from '../views/main/ContactUsView.vue'
import ServicesView from '../views/main/ServicesView.vue'
import TeamView from '../views/main/TeamView.vue'
import NewContest from '../views/contest/NewContest.vue'
import ContestView from '../views/contest/ContestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contest',
      name: 'contest',
      component: ContestView
    },
    {
      path: '/contestnew',
      name: 'contestnew',
      component: NewContest
    },
    {
      path: '/aboutus',
      name: 'about',
      component: AboutView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUsView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
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
