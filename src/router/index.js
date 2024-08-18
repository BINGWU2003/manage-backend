import { createRouter, createWebHashHistory } from 'vue-router'
console.log('import.meta.env.BASE_URL', import.meta.env.BASE_URL)
const router = createRouter({

  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/LoginView.vue')
    }
  ]
})

export default router
