<template>
    <div>
        <personagens></personagens>
    </div>
</template>

<script>
import ListagemPersonagens from '@/components/Personagem/ListagemPersonagens'

export default {
        data () {
            return { }
        },
        components: {
            personagens: ListagemPersonagens
        }
}
</script>

<style>
</style>
