<template>
  <div class="home">
    <h3>to search page with inputValue and selectValue</h3>
    <button class="btn" @click="toSearch('apple')">
      apple
    </button>
    <button class="btn" @click="toSearch('banana')">
      banana
    </button>
    <button class="btn" @click="toSearch('orange')">
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

<style  scoped>
.btn {
  display: inline-block;
  border: 0;
  outline: 0;
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #efefef;
  text-decoration: none;
  color: #000;
}
</style>
