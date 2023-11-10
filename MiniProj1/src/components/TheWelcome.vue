<script setup lang="ts">

</script>

<template>
  <section class="about-me">
    <div class="info">
      <h1 class="title">Eduardo Queirós</h1>
      <h2 class="sub-title">Engenheiro de Software</h2>
    </div>

    <img src="../assets/avatar.jpeg" alt="Eduardo QUeirós avatar" />

    <div class="presentation">
      <p>
        Olá, sou o Eduardo. Seja muito bem-vindo à minha página pessoal. Aqui partilho um pouco do meu mundo, dos meus
        interesses e das minhas histórias. Espero que gostes da visita!
      </p>
    </div>
  </section>
</template>

<style scoped lang="stylus">
.about-me {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .sub-title {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: .5rem;
  }
  .presentation{
    padding-inline: 10rem;
  }

}

</style>
