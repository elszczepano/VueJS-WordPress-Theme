<template>
    <v-app>
        <main-header/>
        <v-layout row wrap class="mx-auto default--container">
            <v-flex xs12 my-4>
                <h2 class="display-2 main-page--header text-xs-center">Kategorie</h2>
            </v-flex>
            <v-flex class="loading-spinner" v-if="!ready" xs12 d-flex justify-center align-center>
                <scale-loader color="#E03C31"></scale-loader>
            </v-flex>
            <v-flex xs12 v-show="ready">
                <v-list class="grey lighten-5" three-line>
                    <router-link v-for="(category, index) in categories" :key="`${index}`" :to="`/category/${category.slug}`">
                        <v-list-tile  @click="">
                            <v-list-tile-action>
                                <i class="material-icons red--marker">chevron_right</i>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{category.name}}</v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                {{category.count | polishGrammar}}
                            </v-list-tile-action>
                        </v-list-tile>
                    </router-link>
                </v-list>
            </v-flex>
        </v-layout>
        <main-footer/>
    </v-app>
</template>

<script>
    import MainHeader from './MainHeader';
    import MainFooter from './MainFooter';
    import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';
    import API from '../api';
    export default {
        components: {
            MainFooter,
            MainHeader,
            ScaleLoader
        },
        name: 'categories',
        data: () => ({
            categories: [],
            ready: false
        }),
        filters: {
            polishGrammar: function(value) {
                if(value > 11 && value < 15) return `${value} wpisów`;
                if(!((value-2)%10)||!((value-3)%10)||!((value-4)%10)) return `${value} wpisy`;
                switch(value) {
                    case 0:
                        return `brak wpisów`;
                        break;
                    case 1:
                        return `${value} wpis`;
                        break;
                    default:
                        return `${value} wpisów`;
                        break;
                }
            }
        },
        mounted() {
            API.get('categories')
                .then(({data}) => {
                    this.categories = data;
                    this.ready = true;
                    document.title = 'Kategorie - devszczepaniak.pl';
                })
        }
    };
</script>

<style scoped>

</style>