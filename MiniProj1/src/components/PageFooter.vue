
<script setup lang="ts">

</script>

<template>
    <footer class="page-footer">
        <div class="left">
            <p>@2023 Eduardo Queirós</p>
            <small>Todos os diretos reservados</small>
        </div>
        <div class="rigth">
            <div class="links">
                <a href="mailto:eduardo.afq@hotmail.com">
                    <ph-envelope :size="32" />
                </a>
                <a href="https://www.linkedin.com/in/eduardoqueiros/" target="_blank" class="link"><ph-linkedin-logo
                        :size="32" /></a>
                <a href="https://www.facebook.com/code36u4r60/" target="_blank" class="link"><ph-facebook-logo
                        :size="32" /></a>
                <a href="https://twitter.com/eduardo27929195" target="_blank" class="link"><ph-twitter-logo
                        :size="32" /></a>
                <a href="https://github.com/code36u4r60" target="_blank" class="link"><ph-github-logo :size="32" /></a>
            </div>
        </div>
    </footer>
</template>

<style lang="stylus" scoped>
.page-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    
    .left{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: left;
    } 
    
    .rigth{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1.5rem;

        .links{
            display: flex;
            gap: .5rem;

            a{
                display: flex;
                align-items: center;
                color: inherit;
            }

        }

    }
}

@media (max-width: 768px) {
        .page-footer{
            flex-direction: column-reverse;
            align-items: center;
            gap: 2rem;

        }
    }

</style>

