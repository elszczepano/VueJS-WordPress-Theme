<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container" my-5>
            <v-layout row wrap text-xs-center>
                <v-flex xs12 my-5><h2 class="display-1 text-xs-center">Korzystając z tego formularza możesz wypisać się z newslettera</h2></v-flex>
                <v-flex mx-auto xs12 sm6 my-5>
                    <form>
                        <v-text-field
                                color="red lighten-1"
                                name="newsletter"
                                v-validate="'required|email'"
                                @keyup.enter="unsubscribe"
                                v-model="email"
                                label="E-mail"
                                required
                        ></v-text-field>
                        <v-btn @click="unsubscribe">Wypisuję się!</v-btn>
                    </form>
                </v-flex>
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
    import API from '../api';
    export default {
        components: {
            MainFooter,
            MainHeader
        },
        name: 'unsubscribe',
        data: () => ({
            email: '',
            message: '',
            unsubscribed: false,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ]
        }),
        methods: {
            unsubscribe() {
                this.message = '';
                this.unsubscribed = false;
                if(!this.email || this.errors.has('newsletter')) return;
                API.post('https://devszczepaniak.pl/wp-json/newsletter/v1/unsubscribe',
                    {
                        email: this.email
                    })
                    .then(() => {
                        this.message = "Wypisano z newslettera pomyślnie.";
                        this.unsubscribed = true;
                    })
                    .catch(() => {
                        this.message = "Oops... coś poszło nie tak";
                    })
            }
        }
    };
</script>

<style scoped>
    .text__danger {
        color: $primary-red;
    }
    .text__success {
        color: #008800;
    }
</style>