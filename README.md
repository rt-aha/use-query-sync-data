## use-query-sync-data

A composition API that sync url query to data base on Vue3.

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

### Global

In the main file

```js
import { createApp } from 'vue';
import ReTimePicker from 're-time-picker';
import App from './App.vue';
import 're-time-picker/dist/style.css';

const app = createApp(App);
app.component('ReTimePicker', ReTimePicker);
app.mount('#app');
```

### Example

In the SFC(`.vue`)

```vue
<script setup lang="ts">
import useQuerySyncData from 'use-query-sync-data';
import type { Rules } from 'use-query-sync-data';

const opts = ['apple', 'banana', 'orange'];
const langOpts = ['English', 'Chinese'];
const generalOptions = opts.map(
  v => ({
    label: v,
    value: v,
  }),
);

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

const {
  updateQueryData,
  queryData,
} = useSyncQuery(defaultQueryData, rules, { queryChangeCallback });
</script>
```
