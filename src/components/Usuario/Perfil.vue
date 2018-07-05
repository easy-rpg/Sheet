<template>
    <v-content>
        <v-container fluid grid-list-lg>
            <v-layout row wrap align-center justify-center>
                <v-flex xs12 md4 sm8>
                    <v-card class="elevation-12">
                        <v-container fluid grid-list-lg>
                            <v-layout row>
                                <v-flex >
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
