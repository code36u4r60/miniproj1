
<script setup lang="ts">
import { ref, watch } from "vue";

var isDarkThemeSelected = ref(false)

watch(isDarkThemeSelected, (value) => {
    document.documentElement.setAttribute('data-theme', value ? 'dark' : 'light');
});

function handleThemeChange() {
    isDarkThemeSelected.value = !isDarkThemeSelected.value;
}
</script>

<template>
    <section class="pageHeader">
        <div class="left">
            <RouterLink to="/" class="link">
                <p class="brand">Eduardo.AFQ</p>
            </RouterLink>

        </div>
        <div class="rigth">
            <div class="links">
                <RouterLink to="/" class="link">Home</RouterLink>
                <RouterLink to="/dailylife" class="link">Daily Life</RouterLink>
                <RouterLink to="/hobbies" class="link">Hobbies</RouterLink>
            </div>
            <div class="theme" @click="handleThemeChange">
                <ph-sun v-if="isDarkThemeSelected" :size="32" class="sun" />
                <ph-moon-stars v-if="!isDarkThemeSelected" :size="32" class="moon" />
            </div>
        </div>
    </section>
</template>

<style lang="stylus" scoped>
.pageHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    
    .left{
        flex: 1;
        display: flex;
        align-items: center;
        
        .brand{
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--color-heading);
        }
    } 
    
    .rigth{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1.5rem;

        .links{
            display: flex;
            gap: 1rem;
        }

        .theme{
            color: var(--color-heading);
            display: flex;
            align-items: center;
            width: 2.5rem;
            cursor: pointer;

            .sun:hover{
                color:gold;
            }
            .moon:hover{
                color:#263238;
            }
        }

    }

    .link{
        color: var(--color-heading);
        font-size: 1.2rem;
        font-weight: 500;
        text-decoration: none !important;
    }

}


</style>

