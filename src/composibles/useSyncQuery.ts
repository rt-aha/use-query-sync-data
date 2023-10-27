import { useRoute, useRouter } from 'vue-router';

type UseSyncQuery = () => {

};

const useSyncQuery = <T>(defaultValue: T, rules: any, execFunc = () => {}) => {
  const defaultQueryData = ref(defaultValue);
  const queryData = ref<T>(defaultValue);
  const route = useRoute();
  const router = useRouter();
  const validationRules = ref(rules);

  const updateQuery = (routerMethod: 'push' | 'replace' = 'push') => {
    router[routerMethod]({
      name: route.name as string,
      query: {
        ...queryData.value,
        random: Date.now(),
      },
    });
  };

  const setDataFromQuery = () => {
    const keys = Object.keys(defaultQueryData.value);

    keys.forEach((key) => {
      if (validationRules.value[key]) {
        const isValid = validationRules.value[key](route.query[key]);

        if (isValid) {
          queryData.value[key] = route.query[key];
        }
        else {
          queryData.value[key] = defaultQueryData.value[key];
        }
      }
      else {
        //  若 rule 不需要驗證，直接設置 query
        queryData.value[key] = route.query[key];
      }
    });

    console.log(queryData.value);

    updateQuery('replace');
  };

  const updateQueryData = (val: any) => {
    queryData.value = {
      ...queryData.value,
      ...val,
    };
    updateQuery();
  };

  const execFuncWhenQueryChange = () => {
    const {
      a,
    } = route.query;

    // queryData.value.a = a;
    console.log('queryData.value', queryData.value);
    execFunc(queryData.value);
  };

  const routeQuery = computed(() => route.query);

  watch(() => routeQuery.value, () => {
    console.log('rq change', route.query);
    setDataFromQuery();
    execFuncWhenQueryChange();
  }, {
    deep: true,
  });

  setDataFromQuery();

  return {
    queryData,
    updateQueryData,
  };
};

export default useSyncQuery;
