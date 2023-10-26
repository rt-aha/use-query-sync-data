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

const pushToSameRoute = (num: number) => {
  router.push({
    name: 'search',
    query: {
      a: num,
    },
  });
};

initDataFromQuery();
</script>

<style scoped>
.footer {
  background-color: #ccc;
}
</style>
