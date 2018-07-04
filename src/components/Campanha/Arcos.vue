<template lang="html">
    <h1>Listagem Arcos</h1>
    <hr>
    <ul>
        <li>Arco 1</li>
    </ul>
</template>

<script>
export default {
    data () {
        return { }
    },
    beforeCreate: function () {
        if (!this.$session.exists()) {
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="css">
</style>
