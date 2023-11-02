import { cloneDeep, isArray, isNull, isPlainObject } from 'lodash-es';
import type { LocationQueryRaw, RouteLocationNormalizedLoaded, Router } from 'vue-router';
import type { Rules, UpdateQueryData } from '@/shared/types';

const useQuerySyncData = (routerInstance: {
  useRoute: () => RouteLocationNormalizedLoaded
  useRouter: () => Router
}) => {
  return <T extends Record<string, any>, K extends keyof T>(
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
    const { useRouter, useRoute } = routerInstance;
    const route = useRoute();
    const router = useRouter();
    const queryData = ref<T>(cloneDeep(defaultQueryData)) as Ref<T>;
    const currPage = ref(route?.name) as Ref<string>;
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

    const parseJSON = (val: any, type: 'object' | 'array') => {
      try {
        const result = JSON.parse(val);
        return result;
      }
      catch (e) {
        console.log('e...', e);
        if (type === 'object') {
          return {};
        }
        if (type === 'array') {
          return [];
        }
      }
    };

    const realValue = (routeQueryValue: any, key: K) => {
      if (typeof defaultQueryData[key] === 'number') {
        return +routeQueryValue;
      }

      if (typeof defaultQueryData[key] === 'string') {
        return routeQueryValue;
      }

      if (typeof defaultQueryData[key] === 'boolean') {
        const boolVal = routeQueryValue === 'true';
        return boolVal;
      }

      if (isPlainObject(defaultQueryData[key])) {
        return parseJSON(routeQueryValue, 'object');
      }

      if (isArray(defaultQueryData[key])) {
        return parseJSON(routeQueryValue, 'array');
      }

      if (isNull(defaultQueryData[key])) {
        return null;
      }

      return routeQueryValue;
    };

    const setDataFromQuery = () => {
      queryDataKeys.forEach((key: K) => {
        const routeQueryValue = route.query[key] as any;
        if (routeQueryValue === undefined) {
          queryData.value[key] = defaultQueryData[key];
        }
        else if (!(key in rules)) {
          queryData.value[key] = realValue(routeQueryValue, key);
        }
        else {
          const isValid = rules[key](realValue(routeQueryValue, key));

          if (isValid) {
            queryData.value[key] = realValue(routeQueryValue, key);
          }
          else {
            queryData.value[key] = defaultQueryData[key];
          }
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

    const execFuncWhenQueryChange = () => {
      if (options.queryChangeCallback) {
        options.queryChangeCallback(queryData.value);
      }
    };

    const routeQuery = computed(() => route.query);
    const routeParams = computed(() => route.params);

    watch(() => [routeQuery.value, routeParams.value], () => {
      console.log('watch');
      setDataFromQuery();
      execFuncWhenQueryChange();
    });

    const init = () => {
      setDataFromQuery();

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
};
export default useQuerySyncData;
