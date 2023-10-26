import { useRoute, useRouter } from 'vue-router';

type UseSyncQuery = () => {

};

const useSyncQuery = (defaultValue: any, rules: any, execFunc = () => {}) => {
  const defaultQueryData = ref(defaultValue);
  const queryData = ref({
    a: '0',
  });
  const validQuery = ref({});
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

  const initDataFromQuery = () => {
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
        queryData.value[key] = defaultQueryData.value[key];
      }
    });

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

    execFunc();

    queryData.value.a = a;
  };

  const setValidationRules = (rules: any) => {
    validationRules.value = rules;

    console.log('validationRules.value', validationRules.value);
  };

  const routeQuery = computed(() => route.query);

  watch(() => routeQuery.value, () => {
    execFuncWhenQueryChange();
  }, {
    deep: true,
  });

  initDataFromQuery();

  return {
    defaultQueryData,
    queryData,
    updateQueryData,
    setValidationRules,
  };
};

export default useSyncQuery;
