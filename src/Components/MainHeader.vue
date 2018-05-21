<template>
    <v-content>
        <v-toolbar class="navbar-menu">
            <v-toolbar-title class="logo">
                <router-link to="/"><span class="text__red">dev</span>szczepaniak.pl</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-menu offset-y>
                    <v-btn flat slot="activator">Blog <i class="material-icons navbar-menu__icon">expand_more</i></v-btn>
                    <v-list>
                        <v-list-tile v-for="(item, index) in blogItems" :key="index" @click="">
                            <v-list-tile-title><router-link :to="item.link">{{item.title}}</router-link></v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                <v-menu offset-y>
                    <v-btn flat slot="activator">Współpraca <i class="material-icons navbar-menu__icon">expand_more</i></v-btn>
                    <v-list>
                        <v-list-tile v-for="(item, index) in partnershipItems" :key="index" @click="">
                            <v-list-tile-title><router-link :to="item.link">{{item.title}}</router-link></v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                <v-menu offset-y>
                    <v-btn flat slot="activator">Autor <i class="material-icons navbar-menu__icon">expand_more</i></v-btn>
                    <v-list>
                        <v-list-tile v-for="(item, index) in authorItems" :key="index" @click="">
                            <v-list-tile-title><router-link :to="item.link">{{item.title}}</router-link></v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
            <v-text-field name="input-1-3" class="hidden-sm-and-down input-group--focused" color="red lighten-1"></v-text-field>
            <v-btn class="hidden-sm-and-down" flat icon><i class="material-icons navbar-menu__icon">search</i></v-btn>
            <v-btn class="hidden-md-and-up" flat icon @click.stop="drawer = !drawer"><i class="material-icons">menu</i></v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" temporary absolute>
            <v-list class="pa-1">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>John Leider</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </v-content>
</template>

<script>
    export default {
        name: "main-header",
        data: () => ({
            drawer: null,
            blogItems: [
                { title: 'Kategorie', link: '/categories' },
                { title: 'Artykuły', link: '/posts' }
            ],
            partnershipItems: [
                { title: 'Oferta', link: '/page/oferta' }
            ],
            authorItems: [
                { title: 'Kontakt', link: '/page/kontakt' },
                { title: 'O autorze', link: '/page/autor' },
                { title: 'Linki', link: '/page/linki' },
                { title: 'Portfolio', link: '/portfolio' }
            ]
        }),
        props: {
            source: String
        }
    }
</script>

<style lang="scss" scoped>
    .logo {
        font-family: $logo-font;
        font-size: 2rem;
    }
    .navbar-menu__icon , .text__red {
        color: $primary-red;
    }
    .input-group--focused {
        max-width: 250px;
    }
</style>