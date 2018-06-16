<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container" my-5>
            <v-layout row wrap text-xs-center>
                <v-flex xs12 my-4><v-icon class="subscribed--icon red--marker">far fa-envelope</v-icon></v-flex>
                <v-flex xs12 my-2><h2 class="display-2">Dzięki za zapisanie się na mój newsletter!</h2></v-flex>
                <v-flex xs12 my-2><h3 class="subscribed--information__font">Jeśli chcesz, abym usunął Twoje dane osobowe, skorzystaj z zakładki <router-link to="/kontakt"><strong>kontakt</strong></router-link></h3></v-flex>
                <v-flex xs12 my-2><h3 class="subscribed--information__font">Jeśli chcesz, wypisać się z newslettera możesz to zrobić <router-link to="/unsubscribe"><strong>tutaj</strong></router-link></h3></v-flex>
                <v-flex xs12 my-2><router-link to="/"><v-btn color="error">Powrót na stronę główną</v-btn></router-link></v-flex>
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
        name: 'subscribed'
    };
</script>

<style scoped>
    .subscribed--icon {
        font-size: 25rem;
    }
    .subscribed--information__font {
        font-weight: 300;
        strong {
            font-weight: 600;
            color: $primary-red;
            text-transform: uppercase;
        }
    }
    @media only screen and (max-width: 600px) {
        .subscribed--icon {
            font-size: 12rem;
        }
    }
</style>