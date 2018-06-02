<template>
    <v-content>
        <v-toolbar class="navbar-menu">
            <v-toolbar-title class="logo">
                <router-link to="/"><span class="red--marker">dev</span>szczepaniak.pl</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-menu offset-y>
                    <v-btn flat slot="activator">Blog <i class="material-icons red--marker">expand_more</i></v-btn>
                    <v-list>
                        <router-link v-for="(item, index) in blogItems" :key="index" :to="item.link">
                            <v-list-tile>
                                <v-list-tile-title>{{item.title}}</v-list-tile-title>
                            </v-list-tile>
                        </router-link>
                    </v-list>
                </v-menu>
                <v-menu offset-y>
                    <v-btn flat slot="activator">Współpraca <i class="material-icons red--marker">expand_more</i></v-btn>
                    <v-list>
                        <router-link v-for="(item, index) in partnershipItems" :key="index" :to="item.link">
                            <v-list-tile>
                                <v-list-tile-title>{{item.title}}</v-list-tile-title>
                            </v-list-tile>
                        </router-link>
                    </v-list>
                </v-menu>
                <v-menu offset-y>
                    <v-btn flat slot="activator">Autor <i class="material-icons red--marker">expand_more</i></v-btn>
                    <v-list>
                        <router-link v-for="(item, index) in authorItems" :key="index" :to="item.link">
                            <v-list-tile>
                                <v-list-tile-title>{{item.title}}</v-list-tile-title>
                            </v-list-tile>
                        </router-link>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
            <v-text-field @keyup.enter="search" v-model="searchPhrase" name="input-1-3" class="hidden-sm-and-down input-group--focused" color="red lighten-1"></v-text-field>
            <v-btn @click="search" class="hidden-sm-and-down" flat icon><i class="material-icons">search</i></v-btn>
            <v-btn class="hidden-md-and-up" flat icon @click.stop="drawer = !drawer"><i class="material-icons">menu</i></v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" temporary absolute>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title text-xs-center logo">
                        <router-link to="/"><span class="red--marker">dev</span>szczepaniak.pl</router-link>
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
            <v-layout row wrap ml-4 mr-3>
                <v-flex xs10>
                    <v-text-field placeholder="Szukaj..." @keyup.enter="search" v-model="searchPhrase" name="input-1-3" class=" input-group--focused" color="red lighten-1"></v-text-field>
                </v-flex>
                <v-flex d-flex align-center justify-center just xs2>
                    <v-btn @click="search" flat icon><i class="material-icons">search</i></v-btn>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-group prepend-icon="school" lazy>
                    <v-list-tile slot="activator">
                        <v-list-tile-title>Blog</v-list-tile-title>
                    </v-list-tile>
                    <router-link v-for="(item, index) in blogItems" :key="index" :to="item.link">
                        <v-list-tile>
                            <v-list-tile-title>{{item.title}}</v-list-tile-title>
                        </v-list-tile>
                    </router-link>
                </v-list-group>
                <v-list-group prepend-icon="group" lazy>
                    <v-list-tile slot="activator">
                        <v-list-tile-title>Współpraca</v-list-tile-title>
                    </v-list-tile>
                    <router-link v-for="(item, index) in partnershipItems" :key="index" :to="item.link">
                        <v-list-tile>
                            <v-list-tile-title>{{item.title}}</v-list-tile-title>
                        </v-list-tile>
                    </router-link>
                </v-list-group>
                <v-list-group prepend-icon="account_circle" lazy>
                    <v-list-tile slot="activator">
                        <v-list-tile-title>Autor</v-list-tile-title>
                    </v-list-tile>
                    <router-link v-for="(item, index) in authorItems" :key="index" :to="item.link">
                        <v-list-tile>
                            <v-list-tile-title>{{item.title}}</v-list-tile-title>
                        </v-list-tile>
                    </router-link>
                </v-list-group>
                <v-list-group prepend-icon="link" lazy>
                    <v-list-tile slot="activator">
                        <v-list-tile-title>Linki</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile target="blank" :href="item.link" v-for="(item, index) in socialMedia" :key="index">
                        <v-list-tile-action>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>{{item.name}}</v-list-tile-title>
                    </v-list-tile>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
    </v-content>
</template>

<script>
    import router from '../router';
    import API from '../api';
    export default {
        name: "main-header",
        data: () => ({
            drawer: null,
            searchPhrase: "",
            blogItems: [
                { title: 'Kategorie', link: '/categories' },
                { title: 'Artykuły', link: '/posts' }
            ],
            partnershipItems: [],
            authorItems: [
                { title: 'Portfolio', link: '/portfolio' }
            ],
            socialMedia: [
                { icon: 'fab fa-facebook', name: 'Facebook', link: 'https://www.facebook.com/dominikszczepaniak98' },
                { icon: 'fab fa-github', name: 'Github', link: 'https://github.com/elszczepano'},
                { icon: 'fab fa-linkedin', name: 'LinkedIn', link: 'https://www.linkedin.com/in/dominik-szczepaniak/' },
                { icon: 'fab fa-stack-overflow', name: 'Stack Overflow', link: 'https://stackoverflow.com/users/8209527/elszczepano' }
            ]
        }),
        props: {
            source: String
        },
        methods: {
            search() {
                if(!this.searchPhrase) return;
                router.push({ path: '/search', query: { s: this.searchPhrase }})
            }
        },
        mounted() {
            API.get('pages')
                .then(({data})=> {
                    this.partnershipItems.push({
                       title: data[2]['title']['rendered'],
                       link: `/page/${data[2]['slug']}`
                    });
                    for(let i=0; i<2; i++) {
                        this.authorItems.push({
                            title: data[i]['title']['rendered'],
                            link: `/page/${data[i]['slug']}`
                        });
                    }
                })
        }
    }
</script>

<style lang="scss" scoped>
    .logo {
        font-family: $logo-font;
        font-size: 2rem;
    }
    .input-group--focused {
        max-width: 250px;
    }
</style>