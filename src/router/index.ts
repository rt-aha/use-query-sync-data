import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    {
      path: '/fake',
      name: 'fake',
      component: () => import('@/views/Fake.vue'),
      meta: {
        title: '首頁',
      },
    },

  ],
});

export const routeNameMapping = (() => {
  const allRoutes = router.getRoutes();

  const mapping = allRoutes.reduce((obj, item) => {
    const routeName: string = item.name as string;

    if (routeName) {
      obj[routeName] = item.meta.title as string;
    }

    return obj;
  }, {} as Record<string, string>);

  return mapping;
})();

router.beforeEach((_to, _from, next) => {
  const scrollEle = document.querySelector('#app');
  if (scrollEle) {
    scrollEle.scrollTo({
      top: 0,
      left: 0,
    });
  }

  next();
});

export default router;
