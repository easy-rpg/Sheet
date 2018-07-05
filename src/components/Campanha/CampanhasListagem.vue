<template>
    <div v-if="loading">
        <p>Loading...</p>
    </div>
    <div v-else>
        <h1>Listagem Campanhas Mestrando</h1>
        <hr>
        {{ campanhas_mestrando }}
        <h1>Listagem Campanhas Jogando</h1>
        <hr>
        {{ campanhas_jogando }}
    </div>
</template>

<script>
const api_config = require('@/api_config');

export default {
    data () {
        return {
            loading: true,
            campanhas_mestrando: [],
            campanhas_jogando: []
        }
    },
    beforeCreate: function () {
        if (!this.$session.exists()) {
            this.$router.push('/login')
        }
        else{
            this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
        }
    },
    created: function () {
        let self = this
        this.$http.get(api_config.campanha)
        .then(function(response) {
            // console.log(response)
            // JSON responses are automatically parsed.
            self.campanhas_mestrando = response.data
        })
        .catch(function(error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log({'data': error.response.data, 'status': error.response.status, 'headers': error.response.headers})
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log({'request': error.request})
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log({'Error': error.message})
            }
            console.log({'config': error.config})
        })
        .then(function() {
            self.$http.get(api_config.campanha_jogando)
            .then(function(response) {
                // console.log(response)
                // JSON responses are automatically parsed.
                self.campanhas_jogando = response.data
                console.log({'msg': 'campanhas loaded!', 'campanhas_mestrando': self.campanhas_mestrando, 'campanhas_jogando': self.campanhas_jogando})
            })
            .catch(function(error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log({'data': error.response.data, 'status': error.response.status, 'headers': error.response.headers})
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log({'request': error.request})
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log({'Error': error.message})
                }
                console.log({'config': error.config})
            })
            .then(function() {
                self.loading = false
            })
        })
    }
}
</script>

<style>
</style>
