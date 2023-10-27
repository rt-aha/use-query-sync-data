import { cloneDeep, isObjectLike } from 'lodash-es';
import { useRoute, useRouter } from 'vue-router';

type UseSyncQuery = () => {

};

const useSyncQuery = <T>(defaultValue: T, rules: any, options: any) => {
  const defaultQueryData = ref(defaultValue);
  const queryData = ref<T>(cloneDeep(defaultValue));
  const route = useRoute();
  const router = useRouter();
  const validationRules = ref(rules);

  const updateQuery = (routerMethod: 'push' | 'replace' = 'push', tempQuery: Object = {}) => {
    const formattedQueryData = options.formatDataBeforeUpdate(tempQuery);
    // console.log('formattedQueryData', formattedQueryData);
    const query = {
      // ...formattedQueryData,
      ...queryData.value,
      ...formattedQueryData,
      // random: Date.now(),
    };

    // console.log('%cquery -->', 'color: #059669; background-color: #D1FAE5', query);

    router[routerMethod]({
      name: route.name as string,
      query,
    });
  };

  const queryDataKeys = Object.keys(defaultValue);

  const setDataFromQuery = () => {
    queryDataKeys.forEach((key) => {
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
        queryData.value[key] = route.query[key] || defaultQueryData.value[key];
      }
    });

    const tempQuery = queryDataKeys.reduce((obj, key) => {
      const currVal = queryData.value[key];
      // 檢查是物件或陣列，且不為陣列，不然會進入無限迴圈
      if (isObjectLike(defaultValue[key]) && typeof currVal !== 'string') {
        console.log('key', key);
        obj[key] = JSON.stringify(currVal);
      }
      else {
        obj[key] = currVal;
      }

      return obj;
    }, {});

    console.log('%ctempQuery -->', 'color: #059669; background-color: #D1FAE5', tempQuery);

    updateQuery('replace', tempQuery);
  };

  const updateQueryData = (val: any) => {
    queryData.value = {
      ...queryData.value,
      ...val,
    };
    updateQuery();
  };

  const execFuncWhenQueryChange = () => {
    // queryData.value.a = a;
    console.log('queryData.value', queryData.value);

    console.log('%cdefaultQueryData.value -->', 'color: #059669; background-color: #D1FAE5', defaultValue);
    const data = queryDataKeys.reduce((obj, key) => {
      const currVal = queryData.value[key];

      if (isObjectLike(defaultValue[key])) {
        obj[key] = JSON.parse(currVal);
      }
      else {
        obj[key] = currVal;
      }

      return obj;
    }, {});

    console.log('data', data);
    queryData.value = data;

    options.doWhenQueryChange(queryData.value);
  };

  const routeQuery = computed(() => route.query);

  watch(() => routeQuery.value, () => {
    console.log('rq change', route.query);
    setDataFromQuery();
    execFuncWhenQueryChange();
  }, {
    deep: true,
  });

  // watch(() => queryData.value, (newVal) => {
  //   console.log('%cnewVal -->', 'color: #059669; background-color: #D1FAE5', newVal);
  // }, {
  //   deep: true,
  //   immediate: true,
  // });

  // watch(() => defaultQueryData.value, () => {
  //   console.log('%cdefaultQueryData.value -->', 'color: #059669; background-color: #D1FAE5', defaultQueryData.value);
  // }, {
  //   deep: true,
  //   immediate: true,
  // });

  setDataFromQuery();

  return {
    queryData,
    updateQueryData,
  };
};

export default useSyncQuery;
