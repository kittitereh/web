import { createRouter, createWebHistory } from 'vue-router'
import Tour from '../views/Tour/Tour.vue'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

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
