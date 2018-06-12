<template>
    <v-footer height="auto" class="blue-grey darken-4 white--text pa-2">
        <v-layout row wrap>
            <v-flex xs12 md7>
                <v-list two-line class="blue-grey darken-4" dark>
                    <v-subheader>Kategorie:</v-subheader>
                    <router-link v-for="(category, index) in categories" :key="`${index}`" class="white--text" :to="`/category/${category.slug}`">
                        <v-list-tile @click="">
                            <v-list-tile-action>
                                <i class="material-icons red--marker">chevron_right</i>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{category.name}}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </router-link>
                </v-list>
            </v-flex>
            <v-flex pa-2 xs12 md5>
                <span class="subheading">Zapisz się na newsletter:</span>
                <v-text-field v-validate="'required|email'" name="newsletter" @keyup.enter="subscribe" color="white" v-model="email" :rules="emailRules" label="E-mail" dark required></v-text-field>
                <v-card-actions dark>
                    <v-checkbox :rules="[v => !!v || '']" dark v-model="checkbox"></v-checkbox>
                    <label>Chcę otrzymywać informacje i treści marketingowe z serwisu devszczepaniak.pl (wymagane)</label>
                    <v-btn @click="subscribe" depressed>Zapisz się!</v-btn>
                </v-card-actions>
            </v-flex>
            <v-flex d-flex sm12 md2>
                <v-btn v-for="(item, index) in socialMedia" :key="index" target="blank" rel="nofollow" :href="item.link" icon class="white--text"><v-icon>{{item.icon}}</v-icon></v-btn>
            </v-flex>
            <v-flex sm12 md10 class="align-center">
                <div class="subheading text-xs-center text-md-right pa-2">
                    Copyright &copy; {{ new Date().getFullYear() }}. Made with <v-icon class="red--marker" small>fas fa-heart</v-icon> by Dominik Szczepaniak
                </div>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
    import API from '../api';
    import router from '../router';
    export default {
        name: 'main-footer',
        data: () => ({
            socialMedia: [
                { icon: 'fab fa-facebook', link: 'https://www.facebook.com/dominikszczepaniak98' },
                { icon: 'fab fa-github', link: 'https://github.com/elszczepano'},
                { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/dominik-szczepaniak/' },
                { icon: 'fab fa-stack-overflow', link: 'https://stackoverflow.com/users/8209527/elszczepano' }
            ],
            categories: [],
            email: '',
            valid: false,
            checkbox: false,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ]
        }),
        methods: {
          subscribe() {
              if(!this.checkbox || !this.email || this.errors.has('newsletter')) return;
              API.post('https://devszczepaniak.pl/wp-json/newsletter/v1/subscribe',
                  {
                      email: this.email
                  })
                  .then(() => router.push({ path: '/subscribed'}))
          }
        },
        mounted() {
            API.get('categories')
                .then(({data}) => this.categories = data)
        }
    };
</script>

<style scoped>

</style>