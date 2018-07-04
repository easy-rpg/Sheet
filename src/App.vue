<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" temporary app>
            <v-toolbar flat>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title class="title">
                            Menu
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list dense class="pt-0">
                <v-list-tile v-for="route in routes" :key="route.title" :to="route.to">
                    <v-list-tile-action>
                        <v-icon>{{ route.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ route.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark fixed>
            <div v-if="loggedIn">
                <v-toolbar-side-icon @click.stop="drawer = !drawer "></v-toolbar-side-icon>
            </div>
            <v-spacer></v-spacer>
            <div v-if="loggedIn">
                <userbar></userbar>
            </div>
            <div v-else>
                <v-btn key='login-button' to="/login">
                    Login
                </v-btn>
            </div>
        </v-toolbar>
        <v-toolbar-side-icon @click.stop="drawer = !drawer "></v-toolbar-side-icon>
        <v-container fluid grid-list-xl>
            <router-view></router-view>
        </v-container>
    </v-app>
</template>

<script>
import auth from '@/auth'
import UserBar from '@/components/UserBar'
export default {
    name: 'app',
    data () {
        return {
            drawer: false,
            loggedIn: this.$session.exists(),
            routes: [
                { title: 'Home', icon: 'fa-home', to: '/' },
                { title: 'Conteúdo', icon: 'fa-user', to:'/content' },
                { title: 'Sobre', icon: 'fa-info-circle', to:'/sobre' },
                { title: 'Hello World', icon: 'fa-home', to:'/hello' },
            ]
        }
    },
    // methods: {
    //     loggedIn: function() {
    //         return auth.loggedIn(this)
    //     }
    // },
    // computed: {
    //     loggedIn: function() {
    //         return this.$session.exists()
    //         return
    //     }
    // },
    components: {
        userbar: UserBar
    },
    beforeUpdate: function () {
        this.loggedIn = this.$session.exists()
    }
}
</script>

<style>
body {
    margin: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
