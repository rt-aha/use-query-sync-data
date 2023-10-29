import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: '首頁',
      },
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search.vue'),
      meta: {
        title: '首頁',
      },
    },
    {
      path: '/dynamic/:id',
      name: 'dynamic',
      component: () => import('@/views/Dynamic.vue'),
      meta: {
        title: '首頁',
      },
    },

  ],
});

export default router;
