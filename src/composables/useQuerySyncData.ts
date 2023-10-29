import { cloneDeep, isNull, isObjectLike } from 'lodash-es';
import type { LocationQueryRaw } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';
import type { Rules, UpdateQueryData } from '@/shared/types';

const useQuerySyncData = <T extends Record<string, any>, K extends keyof T>(
  defaultQueryData: T,
  rules: Rules<T>,
  options: {
    queryChangeCallback?: (queryData: T) => void
    initCallback?: (queryData: T) => void
    mountedCallback?: (queryData: T) => void
  } = {},
): {
    queryData: Ref<T>
    updateQueryData: (val: UpdateQueryData<T>) => void
  } => {
  const route = useRoute();
  const router = useRouter();
  const queryData = ref<T>(cloneDeep(defaultQueryData)) as Ref<T>;
  const currPage = ref(route.name) as Ref<string>;
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

    if (route.name === currPage.value) {
      router[routerMethod]({
        path: route.path,
        query,
      });
    }
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

  const updateQueryData = (val: UpdateQueryData<T>) => {
    queryData.value = {
      ...queryData.value,
      ...val,
    };

    updateQuery();
  };

  const parsedValue = (val: string, key: K) => {
    try {
      const parsedData = JSON.parse(val as string);
      return parsedData;
    }
    catch {
      return defaultQueryData[key];
    }
  };

  const handleQueryToData = () => {
    const data = queryDataKeys.reduce((obj, key: K) => {
      const currVal = queryData.value[key];
      const defaultVal = defaultQueryData[key];

      if (isObjectLike(defaultQueryData[key]) && typeof currVal === 'string') {
        obj[key] = parsedValue(currVal, key);
      }
      else if (isNull(defaultVal)) {
        obj[key] = null;
      }
      else if (typeof defaultVal === 'number') {
        obj[key] = +currVal;
      }
      else if (typeof defaultVal === 'boolean') {
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
  const routeParams = computed(() => route.params);

  watch(() => [routeQuery.value, routeParams.value], () => {
    setDataFromQuery();
    execFuncWhenQueryChange();
  });

  const init = () => {
    setDataFromQuery();
    handleQueryToData();

    if (options.initCallback) {
      options.initCallback(queryData.value);
    }
  };

  onMounted(() => {
    if (options.mountedCallback) {
      options.mountedCallback(queryData.value);
    }
  });

  init();

  return {
    queryData,
    updateQueryData,
  };
};

export default useQuerySyncData;
