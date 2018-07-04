<template lang="html">
    <h1>Listagem Personagens</h1>
    <hr>
    <ul>
        <li>Personagem 1</li>
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
