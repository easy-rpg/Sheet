<template>
    <div>
        <personagem></personagem>
    </div>
</template>

<script>
import PersonagemDetalhe from '@/components/Personagem/PersonagemDetalhe'

export default {
        data () {
            return { }
        },
        props: ['id'],
        components: {
            personagem: PersonagemDetalhe
        }
}
</script>

<style>
</style>
