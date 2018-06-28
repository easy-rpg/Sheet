<template>

</template>

<script>
export default {
    name: 'Login',
    methods: {
        login: function () {
            this.$http.post('http://somehost/user/login',
            username: this.username,
            password: this.password
        }).then(function (response) {
            if (response.status === 200 && 'token' in response.body) {
                this.$session.start()
                this.$session.set('jwt', response.body.token)
                Vue.http.headers.common['Authorization'] = 'Token ' + response.body.token
                this.$router.push('/')
            }
        }, function (err) {
            console.log('err', err)
        })
    }
}
}
</script>

<style lang="css">
</style>
