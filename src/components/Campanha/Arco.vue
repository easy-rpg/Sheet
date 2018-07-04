<template lang="html">
    <h1>Arco X</h1>
    <hr>
    <p>Info</p>
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
