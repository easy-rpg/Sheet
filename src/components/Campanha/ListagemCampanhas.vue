<template>
    <div>
        <h1>Listagem Campanhas</h1>
        <hr>
        <ul>
            <li>Campanha 1</li>
        </ul>
    </div>
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

<style>
</style>
