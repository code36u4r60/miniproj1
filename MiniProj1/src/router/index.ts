import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DailyLifeView from '../views/DailyView.vue'
import Hobbies from '../views/HobbiesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dailylife',
      name: 'dailylife',
      component: DailyLifeView
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: Hobbies
    }
  ]
})

export default router
