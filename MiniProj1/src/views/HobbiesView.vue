<script setup lang="ts">
import IconUniv from "../components/icons/IconUniv.vue";
import IconMoto from "../components/icons/IconMoto.vue";
import IconMountain from "../components/icons/IconMountain.vue";
</script>

<template>
  <main class="container">

    <div class="hobbies">
      <div class="card">
        <IconUniv class="icon" />
        <p class="description">
          <span class="topic">Estudar</span>
          Gosto de aprender constantemente e aprofundar meus conhecimentos.
        </p>
      </div>

      <div class="card">
        <IconMoto class="icon" />
        <p class="description">
          <span class="topic">Andar de moto</span>
          Sou entusiasta de andar de moto e explorar novos lugares.
        </p>
      </div>

      <div class="card">
        <IconMountain class="icon" />
        <p class="description">
          <span class="topic">Montanhismo e Escalada:</span>
          Tenho paixão por desafios ao ar livre, escalando montanhas e explorando trilhas.
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped lang="stylus">

.hobbies{
  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  .card {
      background-color: var(--color-background-mute) !important;
      border-radius: .5rem;
      padding: 1rem;

      height: 25rem; 
      min-width: 20rem;

      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 1rem;     
      
      .icon {
          height: 4rem;
      }

      .description{
        flex: 1;
        color: var(--color-text);
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        font-size: 1.25rem;
        gap: .5rem;
        font-weight: bold;
        .topic{
          font-weight: bolder;
        }
      }
     
    }
}

@media (max-width: 1200px) {
  .hobbies{
  padding-inline: 2rem;
}
}


@media (max-width: 768px) {
  .hobbies{
    padding-inline: 0rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-inline: 2rem;
}
}

</style>