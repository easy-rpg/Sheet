<template>
    <div>
        <arco></arco>
    </div>
</template>

<script>
import ArcoDetalhe from '@/components/Campanha/ArcoDetalhe'

export default {
        data () {
            return { }
        },
        props: ['id'],
        components: {
            arco: ArcoDetalhe
        }
}
</script>

<style>
</style>
