<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="dark">
                            <v-toolbar-title>Login form</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-text>
                            <v-text-field v-model="credentials.username" prepend-icon="fa-user" name="username" label="Username" type="text"></v-text-field>
                            <v-text-field v-model="credentials.password" id="password" prepend-icon="fa-lock" name="Password" label="Password" type="password"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn color="info" to="/register">Register</v-btn>
                            or
                            <v-btn color="dark" @click="submit()">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import auth from '../auth'

export default {
    data (){
        return {
            credentials:
            {
                username: '',
                password: '',
            },
            error: ''
        }
    },
    methods: {
        submit() {
            // We need to pass the component's this context
            // to properly make use of http in the auth service
            auth.login(this, this.credentials, '/')
        }
    }
}
</script>

<style lang="css">
</style>
