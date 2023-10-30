## use-query-sync-data

A composition API that sync url query to data base on Vue3.

To sync url query to your data. 

## Installation

### NPM

```
npm install use-query-sync-data
```

### YARN

```
yarn add use-query-sync-data
```

### PNPM

```
pnpm install use-query-sync-data
```

## Usage

[Demo](https://c9t6vx-5173.csb.app/search) here.

### Example

In the SFC(`.vue`)

```js
<script setup>
import useQuerySyncData from 'use-query-sync-data';

const opts = ['apple', 'banana', 'orange'];
const langOpts = ['English', 'Chinese'];

const defaultQueryData = {
  inputValue: 'search',
  selectValue: '',
  checkboxGroupValue: ['opt1'],
  person: {
    name: 'Allen',
    age: 30,
    marriage: true,
  },
  pageIndex: 1,
  switchValue: true,
  radioValue: 'English',
  nullValue: null,
};

const rules = {
  inputValue: (val) => {
    if (val) {
      return true;
    }

    return false;
  },
  selectValue: (val) => {
    if (opts.includes(val)) {
      return true;
    }

    return false;
  },

  radioValue: (val) => {
    if (langOpts.includes(val)) {
      return true;
    }

    return false;
  },
};

const queryChangeCallback = (newQueryData) => {
  console.log('queryChangeCallback', newQueryData);
};

const initCallback = (newQueryData) => {
  console.log('initCallback', newQueryData);
};

const mountedCallback = (newQueryData) => {
  console.log('mountedCallback', newQueryData);
};

const {
  updateQueryData,
  queryData,
} = useQuerySyncData({ useRoute, useRouter })(defaultQueryData, rules, {
  queryChangeCallback,
  initCallback,
  mountedCallback
});
</script>
```

## typeof useQuerySyncData

```ts
declare const useQuerySyncData: (routerInstance: {
  useRoute: () => RouteLocationNormalizedLoaded
  useRouter: () => Router
}) => <T extends Record<string, any>, K extends keyof T>(defaultQueryData: T, rules: Rules<T>, options?: {
  queryChangeCallback?: ((queryData: T) => void) | undefined
  initCallback?: ((queryData: T) => void) | undefined
  mountedCallback?: ((queryData: T) => void) | undefined
}) => {
  queryData: globalThis.Ref<T>
  updateQueryData: (val: UpdateQueryData<T>) => void
};
```

## Arguments

### first bracket
There are two brackets here. It needs to pass the `useRoute` and `useRouter` from your own app in the first one, since the `useRoute` and `useRouter` get its own vue-router from it's build file which will get undefined.

### sceond bracket

#### `defaultQueryData`(required)

type: `Object`

default: `{}`

Given a default value of all your query. Firstly, it will be use for judge the value type in the object. Secondly, the value will fallback to default value when getting illegal value (validate by the `rules` result) or the query didnt' given.

#### `rules`(required)

type: `Object`

default: `{}`

A Object that judging if value is legal. The properties of `rules` should match the defaultQueryData.


#### `options`(optional)

type: `Object`

default: `{}`

callbacks.

|property|type|description|
|-|-|-|
|queryChangeCallback|((value) => void)|called when the query change|
|initCallback|((value) => void)|called when first time query has been handle|
|mountedCallback|((value) => void)|called in the `onMounted` life cycle|