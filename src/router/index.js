import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sat',
    name: 'sat',
    component: () => import('../views/CourseView1.vue')
  },
  {
    path: '/sat2',
    name: 'sat2',
    component: () => import('../views/CourseView2.vue')
  },
  {
    path: '/toefl',
    name: 'toefl',
    component: () => import('../views/CourseView3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
