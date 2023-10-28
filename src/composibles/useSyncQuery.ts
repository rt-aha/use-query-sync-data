import { cloneDeep, isObjectLike } from 'lodash-es';
import type { LocationQueryRaw } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';

type RouteMethod = 'push' | 'replace';

const useSyncQuery = <T extends Record<string, unknown>, K extends keyof T>(
  defaultValue: T,
  rules: Record<K, (val: T[K]) => boolean>,
  options: {
    doWhenQueryChange?: (queryData: T) => void
  },
): { queryData: Ref<T>
    updateQueryData: (val: Record<string, unknown>) => void
  } => {
  const queryData = ref<T>(cloneDeep(defaultValue)) as Ref<T>;
  const route = useRoute();
  const router = useRouter();

  const queryDataKeys = Object.keys(defaultValue) as K[];

  const updateQuery = (routerMethod: RouteMethod = 'push') => {
    const query: LocationQueryRaw = queryDataKeys.reduce((obj, key: K) => {
      const currVal = queryData.value[key];
      if (typeof currVal !== 'string') {
        obj[key] = JSON.stringify(currVal);
      }
      else {
        obj[key] = currVal;
      }

      return obj;
    }, {} as Record<K, any>);

    router[routerMethod]({
      name: route.name as string,
      query,
    });
  };

  const setDataFromQuery = () => {
    queryDataKeys.forEach((key: K) => {
      const routeQueryValue = route.query[key] as any;
      if (rules[key]) {
        const isValid = rules[key](routeQueryValue);

        if (isValid) {
          // ...
          queryData.value[key] = routeQueryValue;
        }
        else {
          queryData.value[key] = defaultValue[key];
        }
      }
      else {
        //  若 rule 不需要驗證，直接設置 query
        queryData.value[key] = routeQueryValue || defaultValue[key];
      }
    });

    updateQuery('replace');
  };

  const updateQueryData = (val: Record<string, unknown>) => {
    queryData.value = {
      ...queryData.value,
      ...val,
    };

    console.log('queryData.value', queryData.value);
    updateQuery();
  };

  // parsed query string which has been stringify
  const handleQueryToData = () => {
    const data = queryDataKeys.reduce((obj, key: K) => {
      const currVal = queryData.value[key];

      if (isObjectLike(defaultValue[key]) && typeof currVal === 'string') {
        obj[key] = JSON.parse(currVal as string);
      }
      else {
        obj[key] = currVal;
      }

      return obj;
    }, {} as T);

    queryData.value = data;
  };

  const execFuncWhenQueryChange = () => {
    // queryData.value.a = a;
    handleQueryToData();

    if (options.doWhenQueryChange) {
      options.doWhenQueryChange(queryData.value);
    }
  };

  const init = () => {
    setDataFromQuery();
    handleQueryToData();
  };

  const routeQuery = computed(() => route.query);

  watch(() => routeQuery.value, () => {
    setDataFromQuery();
    execFuncWhenQueryChange();
  }, {
    deep: true,
  });

  init();

  return {
    queryData,
    updateQueryData,
  };
};

export default useSyncQuery;
