<template>
  <div class="">
    search
    <div>
      <button @click="updateQueryA">
        updateQueryA
      </button>

      <button @click="updateFormVal">
        updateFormVal
      </button>
    </div>
    <div>
      <input v-model="formVal.a">
    </div>
    <div>
      {{ queryData }}
    </div>

    <div>
      <n-grid :span="24" :x-gap="24">
        <n-form-item-gi :span="12" label="Input" path="inputValue">
          <n-input v-model:value="queryData.inputValue" placeholder="Input" />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="Select" path="selectValue">
          <n-select
            v-model:value="queryData.selectValue"
            placeholder="Select"
            :options="generalOptions"
          />
        </n-form-item-gi>
      </n-grid>
    </div>

    <div>
      <button @click="changePageIndex(1)">
        1
      </button>
      <button @click="changePageIndex(2)">
        2
      </button>
      <button @click="changePageIndex(3)">
        3
      </button>
    </div>

    <footer class="footer">
      footer

      <button @click="pushToSameRoute(1)">
        push A As 1
      </button>
      <button @click="pushToSameRoute(2)">
        push A As 2
      </button>
      <button @click="pushToSameRoute(3)">
        push A As 3
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import useSyncQuery from '@/composibles/useSyncQuery';

// const model = ref({
//   inputValue: null,
//   selectValue: null,
//   pageIndex: 1,
// });

const options = ['apple', 'banana', 'orange'];
const generalOptions = options.map(
  v => ({
    label: v,
    value: v,
  }),
);

const rules = {
  inputValue: (val: any) => {
    if (val) {
      return true;
    }

    return false;
  },
  selectValue: (val: any) => {
    if (options.includes(val)) {
      return true;
    }

    return false;
  },
};

const doWhenQueryChange = (newQueryData) => {
  console.log('doWhenQueryChange', newQueryData);
};

const {
  updateQueryData,
  queryData,
} = useSyncQuery({ inputValue: '', selectValue: '' }, rules, doWhenQueryChange);

const router = useRouter();
const formVal = reactive({
  a: 2,
});

const updateFormVal = () => {
  updateQueryData({ pageIndex: 1 });
};

const updateQueryA = () => {
  router.push({
    name: 'search',
    query: {
      a: String(Date.now()),
    },
  });
};

const changePageIndex = (num: number) => {
  updateQueryData({ pageIndex: num });
};

const pushToSameRoute = (num: number) => {
  router.push({
    name: 'search',
    query: {
      a: num,
    },
  });
};
</script>

<style scoped>
.footer {
  background-color: #ccc;
}
</style>
