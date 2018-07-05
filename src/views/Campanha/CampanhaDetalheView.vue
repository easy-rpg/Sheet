<template>
    <div>
        <campanha></campanha>
    </div>
</template>

<script>
import CampanhaDetalhe from '@/components/Campanha/CampanhaDetalhe'

export default {
        data () {
            return { }
        },
        props: ['id'],
        components: {
            campanha: CampanhaDetalhe
        }
}
</script>

<style>
</style>
