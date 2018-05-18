<template>
    <v-app>
        <v-toolbar>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="logo">devszczepaniak.pl</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat>Link One</v-btn>
                <v-btn flat>Link Two</v-btn>
                <v-btn flat>Link Three</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </v-app>
</template>

<script>
    export default {
        name: "main-header",
        data: () => ({
            drawer: null
        }),
        props: {
            source: String
        }
    }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Quicksand');
    .logo {
        font-family: 'Quicksand', sans-serif;
    }
</style>