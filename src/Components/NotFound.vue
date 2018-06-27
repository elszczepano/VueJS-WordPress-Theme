<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container" my-5>
            <v-layout row wrap text-xs-center>
                <v-flex xs12 my-5><h2 class="text-xs-center display-4 red--marker">404</h2></v-flex>
                <v-flex xs12 my-5><p class="display-1">Strony nie znaleziono,<br> kliknij przycisk poniżej, aby powrócić na stronę główną</p></v-flex>
                <v-flex xs12 my-2><router-link to="/"><v-btn color="error">Powrót na stronę główną</v-btn></router-link></v-flex>
                <v-flex class="title" mx-auto xs12>
                    <strong :class="{ 'text__success': unsubscribed, 'text__danger': !unsubscribed }">{{message}}</strong>
                </v-flex>
            </v-layout>
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
        name: 'not-found',
        mounted() {
            document.title = '404 - Nie znaleziono - devszczepaniak.pl';
        }
    };
</script>

<style scoped>
    h2 {
        font-weight: 600;
    }
</style>