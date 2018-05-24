<template>
    <v-app>
        <main-header/>
        <v-layout row wrap class="mx-auto default--container">
            <v-flex xs12 ma-2>
                <h2 class="display-2 main-page--header">Kategorie</h2>
            </v-flex>
            <v-flex xs12>
                <v-list class="grey lighten-5" three-line>
                    <v-list-tile v-for="i in categories.length" :key="`${i}`" @click="">
                        <v-list-tile-action>
                            <i class="material-icons red--marker">chevron_right</i>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{categories[i-1].name}}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            {{categories[i-1].count | polishGrammar}}
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-flex>
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
        name: 'categories',
        data: () => ({
            categories: []
        }),
        filters: {
            polishGrammar: function(value) {
                switch(value) {
                    case 0:
                        return `brak wpisów`;
                        break;
                    case 1:
                        return `${value} wpis`;
                        break;
                    case 2 :
                    case 3 :
                    case 4 :
                        return `${value} wpisy`;
                        break;
                    default:
                        return `${value} wpisów`;
                        break;
                }
            }
        },
        mounted() {
            API.get('categories')
                .then(response => this.categories = response['data'])
        }
    };
</script>

<style scoped>

</style>