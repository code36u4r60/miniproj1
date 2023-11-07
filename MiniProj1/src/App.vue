<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue'

</script>

<template>
  <main>
    <PageHeader github-url="https://github.com/code36u4r60" linkedin-url="https://www.linkedin.com/in/eduardoqueiros/" mail-url="eduardo.afq@hotmail.com" />

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>
