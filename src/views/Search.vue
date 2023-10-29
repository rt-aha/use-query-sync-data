<template>
  <div class="page">
    <h3>current page: {{ route.name }}</h3>
    <div class="page-view">
      <div class="test-operate">
        <div class="query-value">
          <pre>
        {{ beautifyQueryData }}
      </pre>
        </div>
      </div>
      <div class="val-watch">
        <n-grid :span="24" :x-gap="24">
          <n-form-item-gi :span="24" label="Input" path="inputValue">
            <n-input v-model:value="queryData.inputValue" />
          </n-form-item-gi>

          <n-form-item-gi :span="24" label="Select" path="selectValue">
            <n-select v-model:value="queryData.selectValue" :options="generalOptions" />
          </n-form-item-gi>
          <n-form-item-gi :span="24" label="Radio" path="language">
            <n-radio-group v-model:value="queryData.radioValue">
              <n-space>
                <n-radio label="English" value="English" />
                <n-radio label="Chinese" value="Chinese" />
              </n-space>
            </n-radio-group>
          </n-form-item-gi>
          <n-form-item-gi :span="24" label="Switch" path="switchValue">
            <n-switch v-model:value="queryData.switchValue" />
          </n-form-item-gi>
        </n-grid>
      </div>
    </div>
    <div>
      <div class="pi-test">
        <h3>test pageIndex change</h3>
        <p>if only want to update specific value, use `updateQueryData` method</p>
        <button class="pi-test-btn" @click="changePageIndex(1)">
          pageIndex = 1
        </button>
        <button class="pi-test-btn" @click="changePageIndex(2)">
          pageIndex = 2
        </button>
        <button class="pi-test-btn" @click="changePageIndex(3)">
          pageIndex = 3
        </button>
      </div>

      <div class="val-test">
        <h3>test change page with specific values</h3>
        <p>since only change page with specifc values, other query value will fallback to default</p>
        <button class="val-test-btn" @click="pushToSameRoute({ inputValue: 'apple' })">
          inputValue = 'apple'
        </button>
        <button class="val-test-btn" @click="pushToSameRoute({ inputValue: 'banana', selectValue: 'orange' })">
          inputValue = 'banana', selectValue = 'orange'
        </button>
        <button class="val-test-btn" @click="pushToSameRoute({ radioValue: 'Chinese', switchValue: false })">
          radioValue: 'Chinese', switchValue: false
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import useSyncQuery from '@/composables/useQuerySyncData';
import type { Rules } from '@/shared/types';

const route = useRoute();
const opts = ['apple', 'banana', 'orange'];
const langOpts = ['English', 'Chinese'];
const generalOptions = opts.map(
  v => ({
    label: v,
    value: v,
  }),
);

const defaultQueryData = {
  inputValue: '',
  selectValue: '',
  rangeData: [0, 0],
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

  language: (val) => {
    if (langOpts.includes(val)) {
      return true;
    }

    return false;
  },

};

const queryChangeCallback = (newQueryData: QueryData) => {
  console.log('queryChangeCallback', newQueryData);
};

const {
  updateQueryData,
  queryData,
} = useSyncQuery(defaultQueryData, rules, { queryChangeCallback });

const beautifyQueryData = computed(() => {
  return JSON.stringify(toRaw(queryData.value), null, 2);
});

const router = useRouter();

const changePageIndex = (num: number) => {
  updateQueryData({ pageIndex: num });
};

const pushToSameRoute = (query: any) => {
  router.push({
    name: 'search',
    query,
  });
};
</script>

<style scoped>
.page {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

}

.page-view {
  display: flex;

}

.test-operate {
  flex: 1;
}

.val-watch {
  flex: 1;
  margin-left: 40px;
}

.val-test {
  /* display: flex; */
  /* flex-direction: column; */
}

.query-value {
  background-color: #ccc;
  box-sizing: border-box;
  padding: 10px;

  pre {
    margin: 0
  }
}

.pi-test-btn {
  border: 0;
  outline: 0;
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 10px;
}

.val-test-btn {
  border: 0;
  outline: 0;
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 10px;
}

button:hover {
  opacity: 0.8;
}
</style>
