## use-query-sync-data

A composition API that sync url query to data base on Vue3 with typescript.

Sync your url query to data when first time enter in to page and query change.


## Installation

### npm

```
npm install use-query-sync-data
```

### yarn

```
yarn add use-query-sync-data
```

### pnpm

```
pnpm install use-query-sync-data
```

## Usage

[Demo](https://codesandbox.io/p/sandbox/solitary-bush-c9t6vx) here.

In the SFC(`.vue`)

### javascript example
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

### typescript example

```ts
<script setup lang="ts">
import useQuerySyncData from 'use-query-sync-data';
import type { Rules } from 'use-query-sync-data';
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

type QueryData = typeof defaultQueryData;

const rules: Rules<QueryData> = {
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

const queryChangeCallback = (newQueryData: QueryData) => {
  console.log('queryChangeCallback', newQueryData);
};

const initCallback = (newQueryData: QueryData) => {
  console.log('initCallback', newQueryData);
};

const mountedCallback = (newQueryData: QueryData) => {
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

## type `useQuerySyncData`

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
## Values return from `useQuerySyncData`

### queryData

type: `Ref<T>` (T = what you pass into `defaultQueryData`)

default: `{}`,

The lastest data.

### updateQueryData

type: `Function`

default: `(object) => {}`,

pass the value you want to change. always update value by this method.

e.g. `updateQueryData({ inputValue: 'grape', selectValue: 'apple' })`

## Arguments

There are two brackets here. 

### first bracket
It needs to pass the `useRoute` and `useRouter` from your own app in the first one, since the `useRoute` and `useRouter` get its own vue-router from it's build file which will get `undefined`.

### sceond bracket

#### `defaultQueryData`(required)

type: `Object`

default: `{}`

Given a default value what your data have. It will be used for validate the properties type from the object. Additionally, the value will fallback to the default value when the query didnt' given, getting illegal value (validate by the `rules` result).

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
|queryChangeCallback|((value) => void)|called when the query change, usually triggered when query change. it will be triggered  after `updateQueryData` call as well. |
|initCallback|((value) => void)|called when first time query has been handle|
|mountedCallback|((value) => void)|called in the `onMounted` life cycle|