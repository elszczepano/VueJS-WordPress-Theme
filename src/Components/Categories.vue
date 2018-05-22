<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container">
            <v-flex xs12 ma-2>
                <h2 class="display-2 main-page--header">Kategorie</h2>
            </v-flex>
        </v-layout>
        <main-footer/>
    </v-app>
</template>

<script>
    import MainHeader from './MainHeader';
    import MainFooter from './MainFooter';

    export default {
        components: {
            MainFooter,
            MainHeader
        },
        name: 'categories'
    };
</script>

<style scoped>

</style>