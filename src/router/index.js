import { createRouter, createWebHistory } from 'vue-router'
import Tour from '../views/Tour/Tour.vue'
import About from '../views/About.vue'
import LoginPage from '../views/LoginPage.vue'
import CreateAccountPage from '../views/CreateAccountPage.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Chats from '../views/Chats.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'CreateAccountPage',
    component: CreateAccountPage
  },
  {
    path: "/tours",
    // redirect: "/"
    name: 'Tours'
  },
  {
    path: '/tours/:tour_id',
    name: 'Tour',
    component: Tour,
    props: true
  },

  {
    path: '/chats',
    name: 'Chats',
    component: Chats,
    props: true
  },

  //catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
