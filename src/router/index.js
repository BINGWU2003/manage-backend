import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({

  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: () => import('../layout/index.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/dashboard/index.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('../views/user/index.vue')
        },
        {
          path: '/drug',
          name: 'drug',
          component: () => import('../views/drug/index.vue')
        },
        {
          path: '/admin',
          name: 'admin',
          component: () => import('../views/admin/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    }
  ]
})

export default router
