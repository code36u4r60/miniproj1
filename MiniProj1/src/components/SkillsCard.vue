<script setup lang="ts">
import IconAndroid from "./icons/IconAndroid.vue";
import IconAndroidStudio from "./icons/IconAndroidStudio.vue";
import IconC from "./icons/IconC.vue";
import IconIOS from "./icons/IconIOS.vue";
import IconJS from "./icons/IconJS.vue";
import IconJava from "./icons/IconJava.vue";
import IconKotlin from "./icons/IconKotlin.vue";
import IconNodeJs from "./icons/IconNodeJs.vue";
import IconPython from "./icons/IconPython.vue";
import IconR from "./icons/IconR.vue";
import IconReact from "./icons/IconReact.vue";
import IconTailwind from "./icons/IconTailwind.vue";
import IconVueJs from "./icons/IconVueJs.vue";
</script>

<template>
    <div class="card">

        <div class="title">
            <ph-barbell :size="64" />
            <h1>Skills</h1>
        </div>

        <div class="hard-skills">
            <h1 class="title">
                Hard-Skills
            </h1>
            <div class="skills">
                <IconAndroid class="skill" />
                <IconAndroidStudio class="skill" />
                <IconC class="skill" />
                <IconIOS class="skill" />
                <IconJS class="skill" />
                <IconJava class="skill" />
                <IconKotlin class="skill" />
                <IconNodeJs class="skill" />
                <IconPython class="skill" />
                <IconR class="skill" />
                <IconReact class="skill" />
                <IconTailwind class="skill" />
                <IconVueJs class="skill" />
            </div>
        </div>

        <div class="soft-skills">
            <h1 class="title">
                Hard-Skills
            </h1>
            <div class="skills">
                <p class="skill"><ph-users-three :size="24"/>Trabalho em Equipe</p>
                <p class="skill"><ph-baby :size="24" />Empatia</p>
                <p class="skill"><ph-bandaids :size="24" />Resolução de Problemas</p>
                <p class="skill"><ph-steps :size="24" />Pensamento Crítico</p>
                <p class="skill"><ph-equalizer :size="24" />Adaptabilidade</p>
                <p class="skill"><ph-steps :size="24" />Resiliência</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="stylus">
.card {
    background-color: #D9D9D9;
    border-radius: .5rem;
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .5rem;

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

    
    .hard-skills {
        padding-inline: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        .title{
            font-size: 1.25rem;
            font-weight: bold;
        }
        .skills{
            display: flex;
            flex-direction: row;
           justify-content: space-around;


            .skill{
                width: 48px;
                height: 48px;
            }

        }
    }

    
    .soft-skills {
        padding-inline: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        .title{
            font-size: 1.25rem;
            font-weight: bold;
        }
        .skills{
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            .skill{
                display: flex;
                gap: 0.5rem;
            }

        }
    }
}


</style>
