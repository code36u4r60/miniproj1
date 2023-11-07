<script setup lang="ts">
defineProps<{
    linkedinUrl: string
    githubUrl: string
    mailUrl: string
}>()
</script>

<template>
    <div class="pageHeader">

        <div class="left">
            <a :href="linkedinUrl" target="_blank">
                <ph-linkedin-logo :size="32" />
            </a>
            <a :href="githubUrl" target="_blank">
                <ph-github-logo :size="32" />
            </a>
        </div>

        <div class="rigth">

            <a :href="'mailto:' + mailUrl">
                <ph-envelope :size="32" />
                <span>
                    Send me an email
                </span>
            </a>

        </div>

    </div>
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
        gap: 1rem;
    } 
    
    .rigth{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;

        a{
            display: flex;
            flex-direction: row;
            gap: .5rem;
            align-items: center;

            span{
                font-size: 1rem;
                font-weight: 500;
            }
        }
    }
}


</style>



