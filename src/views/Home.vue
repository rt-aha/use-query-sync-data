<template>
  <div class="">
    <button @click="toSearch('apple')">
      apple
    </button>
    <button @click="toSearch('banana')">
      banana
    </button>
    <button @click="toSearch('orange')">
      orange
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const toSearch = (fruit: string) => {
  router.push({
    name: 'search',
    query: {
      inputValue: fruit,
      selectValue: fruit,
    },
  });
};
</script>

<style lang="scss" scoped>

</style>
