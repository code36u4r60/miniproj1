<script setup lang="ts">
</script>

<template>
    <div class="card">
        <div class="title">
            <ph-briefcase :size="64" />
            <h1>Profissão</h1>
        </div>

        <p class="description">
            Sou engenheiro de software na CEiiA, onde me dedico ao desenvolvimento de aplicativos para Android e iOS com ênfase em mobilidade urbana sustentável. O meu trabalho envolve a criação de soluções que promovem alternativas de transporte amigas do ambiente. Estou comprometido em contribuir para tornar as cidades mais sustentáveis por meio da inovação tecnológica.
        </p>
    </div>
</template>

<style scoped lang="stylus">
.card {
    background-color: var(--color-background-mute);
    border-radius: .5rem;
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .title {
        display: flex;
        flex-direction: row;
        gap: .5rem;
        align-items: center;
        color: var(--color-heading);
    
        h1{
            font-size: 1.5rem;
            font-weight: 600;
        }
    }


    
    .description {
        padding: .5rem;
        text-align: justify;
     
     a{
         color: #009688;
         font-weight: bold;
    }
 }
}




</style>
