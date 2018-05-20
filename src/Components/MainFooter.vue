<template>
    <v-footer  height="auto" class="blue-grey darken-4 white--text pa-2">
        <v-layout row wrap>
            <v-flex xs12 md7>
                <v-list two-line class="blue-grey darken-4" dark>
                    <v-subheader>Kategorie:</v-subheader>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <i class="material-icons list--icon">chevron_right</i>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Kategoria</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <i class="material-icons list--icon">chevron_right</i>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Kategoria</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-flex>
            <v-flex pa-2 xs12 md5>
                <span class="subheading">Zapisz się na newsletter:</span>
                <v-text-field dark v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn depressed>Zapisz się!</v-btn>
                </v-card-actions>
            </v-flex>
            <v-flex d-flex sm12 md2>
                <v-btn icon class="white--text"><v-icon>fab fa-facebook</v-icon></v-btn>
                <v-btn icon class="white--text"><v-icon>fab fa-github</v-icon></v-btn>
                <v-btn icon class="white--text"><v-icon>fab fa-linkedin</v-icon></v-btn>
                <v-btn icon class="white--text"><v-icon>fab fa-stack-overflow</v-icon></v-btn>
            </v-flex>
            <v-flex sm12 md10 class="align-center">
                <div class="subheading text-xs-center text-md-right pa-2">
                    Copyright &copy; {{ new Date().getFullYear() }} Dominik Szczepaniak
                </div>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
    export default {
        name: 'main-footer',
        data: () => ({
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ]
        })
    };
</script>

<style scoped>
    .list--icon {
        color: $primary-red;
    }
</style>