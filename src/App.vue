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
            <v-toolbar-side-icon @click.stop="drawer = !drawer "></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-menu :nudge-width="100">
                <v-toolbar-title slot="activator">
                    <v-btn flat>
                        <span>{{ nome }}&nbsp;</span>
                        <v-icon>fas fa-caret-down</v-icon>
                    </v-btn>
                </v-toolbar-title>
                <v-list>
                    <v-list-tile key="Perfil" to="/">
                        <v-list-tile-action>
                            <v-icon>fas fa-user</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Perfil</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider ></v-divider>
                    <v-list-tile key="Sair" to="/">
                        <v-list-tile-action>
                            <v-icon>fas fa-sign-out-alt</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Sair</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>
        <v-toolbar-side-icon @click.stop="drawer = !drawer "></v-toolbar-side-icon>
        <v-container fluid grid-list-xl>
            <router-view></router-view>
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            nome: 'rodrigondec',
            drawer: false,
            routes: [
                { title: 'Home', icon: 'fas fa-home', to: '/' },
                { title: 'Conteúdo', icon: 'fas fa-user', to:'/content' },
                { title: 'Sobre', icon: 'info', to:'/sobre' },
                { title: 'Hello World', icon: 'home', to:'/hello' },
            ]
        }
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
