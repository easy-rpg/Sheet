<template>
    <div>
        <campanhas></campanhas>
        <arcos></arcos>
    </div>
</template>

<script>
import ListagemCampanhas from '@/components/Campanha/ListagemCampanhas'
import ListagemArcos from '@/components/Campanha/ListagemArcos'

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
