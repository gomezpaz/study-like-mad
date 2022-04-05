import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CourseView1 from '../views/CourseView1.vue'
import CourseView2 from '../views/CourseView2.vue'
import CourseView3 from '../views/CourseView3.vue'
import AdminView from '../views/Admin.vue'

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
    component: CourseView1
  },
  {
    path: '/sat2',
    name: 'sat2',
    component: CourseView2
  },
  {
    path: '/toefl',
    name: 'toefl',
    component: CourseView3
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
