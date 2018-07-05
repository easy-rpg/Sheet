<template>
    <div>
        <campanhas></campanhas>
        <arcos></arcos>
    </div>
</template>

<script>
import CampanhasListagem from '@/components/Campanha/CampanhasListagem'
import ArcosListagem from '@/components/Campanha/ArcosListagem'

export default {
        data () {
            return { }
        },
        components: {
            campanhas: CampanhasListagem,
            arcos: ArcosListagem
        }
}
</script>

<style>
</style>
