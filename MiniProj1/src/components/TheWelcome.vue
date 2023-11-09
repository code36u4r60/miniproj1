<script setup lang="ts">

</script>

<template>
  <section>
    <div class="info">
      <h1 class="title">Eduardo Queirós</h1>
      <h2 class="sub-title">Engenheiro de Software</h2>
    </div>

    <img src="../assets/avatar.jpeg" alt="Eduardo QUeirós avatar" />

    <div class="presentation">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, quibusdam, quia, quae voluptatem voluptatum quas
        voluptates quos doloribus quod voluptate. Quisquam voluptatibus,
        quibusdam, quia, quae voluptatem voluptatum quas voluptates quos
        doloribus quod voluptate.
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

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

img {
  width: 200px;
  height: 200px;
  border-radius: .5rem;
}

.presentation{
  padding-inline: 10rem;
}

</style>
