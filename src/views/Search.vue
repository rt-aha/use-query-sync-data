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
      {{ recordData }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import useSyncQuery from '@/composibles/useSyncQuery';

const doWhenQueryChange = () => {
  console.log('doWhenQueryChange');
};

const {
  initDataFromQuery,
  recordData,
  updateRecordData,
} = useSyncQuery(doWhenQueryChange);

const router = useRouter();
const formVal = reactive({
  a: 2,
});

const updateFormVal = () => {
  updateRecordData(formVal);
};

const updateQueryA = () => {
  router.push({
    name: 'search',
    query: {
      a: String(Date.now()),
    },
  });
};

initDataFromQuery();
</script>

<style lang="scss" scoped>

</style>
