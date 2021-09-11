import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddProject',
    component: ()=> import(/* webpackChunkName: "addProject" */ '../views/AddProject.vue')
  },
  {
    path: '/edit/:id',
    name: 'EditProject',
    component: ()=> import(/* webpackChunkName: "editProject" */ '../views/EditProject.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
