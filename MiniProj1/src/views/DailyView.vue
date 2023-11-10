<script setup lang="ts">
import AcademicCard from '../components/AcademicCard.vue'
import JobCard from '../components/JobCard.vue'
import SkillsCard from '../components/SkillsCard.vue'
</script>

<template>
  <main class="container">

    <div class="resume">
      <AcademicCard />
      <JobCard />
    </div>

    <div class="skills">
      <SkillsCard />
    </div>

  </main>
</template>


<style lang="stylus" scoped>

main.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
    .resume {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      gap: 2rem;
    }
  }
</style>