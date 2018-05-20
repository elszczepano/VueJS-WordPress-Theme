<template>
    <v-content>
        <v-toolbar class="navbar-menu">
            <v-toolbar-title class="logo"><span class="text__red">dev</span>szczepaniak.pl</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat>Start</v-btn>
                <v-menu offset-y>
                    <v-btn flat slot="activator">Blog <i class="material-icons navbar-menu__icon">expand_more</i></v-btn>
                    <v-list>
                        <v-list-tile v-for="(item, index) in blogItems" :key="index" @click="">
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                <v-menu offset-y>
                    <v-btn flat slot="activator">Współpraca <i class="material-icons navbar-menu__icon">expand_more</i></v-btn>
                    <v-list>
                        <v-list-tile v-for="(item, index) in partnershipItems" :key="index" @click="">
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                <v-menu offset-y>
                    <v-btn flat slot="activator">Autor <i class="material-icons navbar-menu__icon">expand_more</i></v-btn>
                    <v-list>
                        <v-list-tile v-for="(item, index) in authorItems" :key="index" @click="">
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
            <v-btn  class="hidden-md-and-up" flat icon @click.stop="drawer = !drawer"><i class="material-icons">menu</i></v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" temporary absolute>
            <v-list class="pa-1">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg" >
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
                { title: 'Kategorie', link: 'http://reddit.com' },
                { title: 'Artykuły', link: 'http://reddit.com' },
                { title: 'Ostatnio dodane', link: 'http://reddit.com' },
                { title: 'Najpopularniejsze', link: 'http://reddit.com' }
            ],
            partnershipItems: [
                { title: 'Oferta', link: 'http://reddit.com' }
            ],
            authorItems: [
                { title: 'Kontakt', link: 'http://reddit.com' },
                { title: 'O autorze', link: 'http://reddit.com' },
                { title: 'Linki', link: 'http://reddit.com' },
                { title: 'Portfolio', link: 'http://reddit.com' }
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
    .navbar-menu__icon , .text__red{
        color: $primary-red;
    }
</style>