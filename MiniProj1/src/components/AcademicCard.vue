<script setup lang="ts">
</script>

<template>
    <div class="card">

        <div class="title">
            <ph-graduation-cap :size="64" />
            <h1>Formação</h1>
        </div>

        <p class="description">

            Estou atualmente a frequentar o último ano do curso de Engenharia Informática e Tecnologias Web, uma
            colaboração entre a UTAD e a UAb. Se quiser saber mais detalhes sobre o programa, pode clicar no seguinte
            link: <a href="https://www.utad.pt/estudar/cursos/eng-info-tec-web/" target="_blank">Curso</a>.
            Esta experiência tem sido enriquecedora, proporcionando-me conhecimentos sólidos em tecnologia e web,
            preparando-me para enfrentar desafios empolgantes e contribuir para o mundo da tecnologia. Estou ansioso
            para concluir esta etapa para poder abraçar novos desafios.
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
        padding: 1rem;
        text-align: justify;
        color: var(--color-text);

     a{
         color: #4DB6AC;
         font-weight: bold;
    }
 }
}


</style>
