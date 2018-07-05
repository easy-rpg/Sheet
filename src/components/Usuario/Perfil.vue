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
export default {
    data () {
        return { 
            user: {
                
            }
        }
    },
    beforeCreate: function () {
        if (!this.$session.exists()) {
            this.$router.push('/login')
        }
    },
    mounted: function () {
        this.init()
    },
    methods: {
        init () {
            this.user = {
                id: 5,
                username: "pedro",
                email: "email@gmail.com",
                first_name: "",
                last_name: ""
            }
            // this.loadMe();
        },
        loadMe () {
            let self = this
            this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
            this.$http.get('https://sheet-api.herokuapp.com/user/me/')
                    .then(response => {
                        self.user = response.data
                    })
                    .catch(err => {

                    })
        }
    }
}
</script>

<style>
</style>
