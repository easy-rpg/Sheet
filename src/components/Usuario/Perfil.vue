<template>
    <v-content>
        <v-container fluid grid-list-lg>
            <v-layout row wrap align-center justify-center>
                <v-flex xs12 md4 sm8>
                    <v-card class="elevation-12">
                        <v-card color="black" class="white--text">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline">Configurações de perfil</span>
                                </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                        <v-container fluid>
                            <v-layout row>
                                    <v-flex xs5 md12 sm12>
                                        <v-text-field label="Usuário" v-model="user.username">
                                        </v-text-field>
                                    </v-flex>
                                    <v-flex xs7 md12 sm12>
                                        <v-text-field label="Email" v-model="user.email">
                                        </v-text-field>
                                    </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs5 md12 sm12>
                                    <v-text-field label="Primeiro nome" v-model="user.first_name">
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs7 md12 sm12>
                                    <v-text-field label="Último nome" v-model="user.last_name">
                                    </v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
const api_config = require('@/api_config');

export default {
    data () {
        return {
            loading: false,
            user: {
                // id: '';
                // username: '',
                // email: '',
                // password: '',
                // first_name: '',
                // last_name: ''
            }
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
        this.$http.get(api_config.me_url)
        .then(function(response) {
            // console.log(response)
            // JSON responses are automatically parsed.
            self.user = response.data
            console.log({'msg': 'user loaded!', 'user': self.user})
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
            console.log({'config': error.config});
        })
    },
    methods: {
        submit() {
            let self = this
            this.$http.patch(api_config+self.$session.get('id')+'/', self.user)
            .then(function(response) {
                console.log(response)
                // JSON responses are automatically parsed.
                // self.user = response.data
                // console.log({'msg': 'user loaded!', 'user': self.user})
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
                console.log({'config': error.config});
            })
        }
    }
}
</script>

<style>
</style>
