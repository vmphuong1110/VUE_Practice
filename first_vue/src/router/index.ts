import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HelloView from '../views/HelloView.vue'
import SetupExample from '../views/SetupExample.vue'
import RefExample from '../views/RefExample.vue'
import ReactiveExample from '../views/ReactiveExample.vue'
import Computed from '../views/Computed.vue'
import Watch from '../views/Watch.vue'
import MountExample from '../views/MountExample.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloView,
    },
       {
      path: '/setup',
      name: 'setup',
      component: SetupExample,
    },
    {
      path: '/ref',
      name: 'ref',
      component: RefExample,
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: ReactiveExample,
    },
    {
      path: '/computed',
      name: 'computed',
      component: Computed,
    },
    {
      path: '/watch',
      name: 'watch',
      component: Watch,
    },
    {
      path: '/mount',
      name: 'mount',
      component: MountExample,
    },
  ],
})

export default router
