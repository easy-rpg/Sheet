<template>
    <div>
        <campanhas></campanhas>
        <arcos></arcos>
    </div>
</template>

<script>
import Campanha from '@/components/Campanha/Deta'

export default {
        data () {
            return { }
        },
        components: {
            campanhas: ListagemCampanhas,
            arcos: ListagemArcos
        }
}
</script>

<style>
</style>
