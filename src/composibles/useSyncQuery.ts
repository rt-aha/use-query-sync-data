import { cloneDeep, isObjectLike } from 'lodash-es';
import type { LocationQueryRaw } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';
import type { Rules } from '@/shared/types';

const useSyncQuery = <T extends Record<string, any>, K extends keyof T>(
  defaultQueryData: T,
  rules: Rules<T>,
  options: {
    queryChangeCallback?: (queryData: T) => void
  } = {},
): { queryData: Ref<T>
    updateQueryData: (val: Record<string, unknown>) => void
  } => {
  const queryData = ref<T>(cloneDeep(defaultQueryData)) as Ref<T>;
  const route = useRoute();
  const router = useRouter();
  const queryDataKeys = Object.keys(defaultQueryData) as K[];

  const updateQuery = (routerMethod: 'push' | 'replace' = 'push') => {
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
          queryData.value[key] = routeQueryValue;
        }
        else {
          queryData.value[key] = defaultQueryData[key];
        }
      }
      else {
        queryData.value[key] = routeQueryValue || defaultQueryData[key];
      }
    });

    updateQuery('replace');
  };

  const updateQueryData = (val: Record<string, unknown>) => {
    queryData.value = {
      ...queryData.value,
      ...val,
    };

    updateQuery();
  };

  const handleQueryToData = () => {
    const data = queryDataKeys.reduce((obj, key: K) => {
      const currVal = queryData.value[key];
      const defaultVal = defaultQueryData[key];

      if (isObjectLike(defaultQueryData[key]) && typeof currVal === 'string') {
        console.log('currVal', currVal);
        obj[key] = JSON.parse(currVal as string);
      }
      else if (typeof defaultVal === 'number') {
        obj[key] = +currVal;
      }
      else if (typeof defaultVal === 'boolean') {
        // As currVal are always be string, manually compare string 'true' here
        const isTrue = currVal === 'true';
        obj[key] = Boolean(isTrue);
      }
      else {
        obj[key] = currVal;
      }

      return obj;
    }, {} as any);

    queryData.value = data;
  };

  const execFuncWhenQueryChange = () => {
    handleQueryToData();

    if (options.queryChangeCallback) {
      options.queryChangeCallback(queryData.value);
    }
  };

  const routeQuery = computed(() => route.query);

  watch(() => routeQuery.value, () => {
    setDataFromQuery();
    execFuncWhenQueryChange();
  });

  const init = () => {
    setDataFromQuery();
    handleQueryToData();
  };

  init();

  return {
    queryData,
    updateQueryData,
  };
};

export default useSyncQuery;
