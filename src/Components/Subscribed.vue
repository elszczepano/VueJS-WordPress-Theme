<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container" my-5>
            <v-layout row wrap text-xs-center>
                <v-flex xs12 my-5><v-icon class="subscribed--icon red--marker">far fa-envelope</v-icon></v-flex>
                <v-flex xs12 my-5><h2 class="display-2">Dzięki za zapisanie się na mój newsletter!</h2></v-flex>
                <v-flex xs12 my-5><h3 class="subscribed--information__font">Jeśli chcesz, abym usunął Twoje dane osobowe, skorzystaj z zakładki <router-link to="/page/kontakt"><strong> kontakt</strong></router-link></h3></v-flex>
                <v-flex xs12 my-5><router-link to="/"><v-btn color="error">Powrót na stronę główną</v-btn></router-link></v-flex>
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
        name: 'newsletter-thanks'
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
        }
    }
    @media only screen and (max-width: 600px) {
        .subscribed--icon {
            font-size: 12rem;
        }
    }
</style>