import { useRoute, useRouter } from 'vue-router';

type UseSyncQuery = () => {

};

const useSyncQuery = (execFunc = () => {}) => {
  const initData = ref({});
  const recordData = ref({
    a: '0',
  });
  const route = useRoute();
  const router = useRouter();

  const updateQuery = (routerMethod: 'push' | 'replace' = 'push') => {
    router[routerMethod]({
      name: route.name as string,
      query: {
        ...recordData.value,
        random: Date.now(),
      },
    });
  };

  const initDataFromQuery = () => {
    recordData.value = route.query;

    updateQuery('replace');
  };

  const updateRecordData = (val: any) => {
    recordData.value = {
      ...recordData.value,
      ...val,
    };
    updateQuery();
  };

  const execFuncWhenQueryChange = () => {
    const {
      a,
    } = route.query;

    execFunc();

    recordData.value.a = a;
  };

  const routeQuery = computed(() => route.query);

  watch(() => routeQuery.value, (newVal, oldVal) => {
    execFuncWhenQueryChange();
  }, {
    deep: true,
  });

  return {
    initData,
    recordData,
    initDataFromQuery,
    updateRecordData,

  };
};

export default useSyncQuery;
