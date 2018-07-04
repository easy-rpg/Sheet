<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="dark">
                            <v-toolbar-title>Registration form</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-text>
                            <v-text-field v-model="credentials.username" prepend-icon="fa-user" name="username" label="Username" type="text"></v-text-field>
                            <v-text-field v-model="credentials.password" id="password" prepend-icon="fa-lock" name="password" label="Password" type="password"></v-text-field>
                            <v-text-field v-model="credentials.email" prepend-icon="fa-at" name="email" label="Email" type="text"></v-text-field>
                            <v-text-field v-model="credentials.first_name" prepend-icon="fa-info" name="first_name" label="First name" type="text"></v-text-field>
                            <v-text-field v-model="credentials.last_name" prepend-icon="fa-info" name="last_name" label="Last name" type="text"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="dark" @click="submit()">Register</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import auth from '@/auth'

export default {
    data (){
        return {
            credentials:
            {
                username: '',
                password: '',
                emaill: '',
                first_name: '',
                last_name: '',
            },
            error: ''
        }
    },
    methods: {
        submit() {
            // We need to pass the component's this context
            // to properly make use of http in the auth service
            auth.register(this, this.credentials, '/')
        }
    }
}
</script>

<style>
</style>
