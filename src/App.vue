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
                <v-list-tile v-for="item in items" :key="item.title" :to="item.to">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark fixed>
            <v-toolbar-side-icon @click.stop="drawer = !drawer "></v-toolbar-side-icon>
            <v-toolbar-title>Aula SPA</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-container fluid grid-list-xl>
            <router-view></router-view>
        </v-container>
    </v-app>
</template>

<script>
/* eslint-disable */

export default {
    name: 'app',
    data () {
        return {
            drawer: false,
            items: [
                { title: 'Home', icon: 'dashboard', to: '/' },
                { title: 'Sobre', icon: 'info', to:'/sobre' },
            ]
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
