import Vue from 'vue'
import VueRouter from 'vue-router'
import Resume from '@/views/Resume'

Vue.use(VueRouter)

const routes = [
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
