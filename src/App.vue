<template>
    <v-app>
        <toolbar></toolbar>
        <v-container fluid grid-list-xl>
            <router-view></router-view>
        </v-container>
    </v-app>
</template>

<script>
import auth from '@/auth'
import ToolBar from '@/components/Toolbar/ToolBar'

export default {
    name: 'app',
    components: {
        toolbar: ToolBar
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
