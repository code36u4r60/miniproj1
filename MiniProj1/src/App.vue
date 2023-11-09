<script setup lang="ts">
import { RouterView } from 'vue-router'

import  PageHeader  from './components/PageHeader.vue'
import  PageFooter  from './components/PageFooter.vue'

</script>

<template>
  <div class="view">
    <PageHeader />
    <RouterView />
    <PageFooter />
  </div>
</template>

<style scoped>
.view {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (min-width: 1024px) {}
</style>
