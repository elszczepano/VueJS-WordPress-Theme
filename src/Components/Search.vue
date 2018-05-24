<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container">
            <v-flex xs12 ma-2 >
                <h2 class="display-2 main-page--header text-xs-center">
                    Wyniki wyszukiwania dla:
                    <span class="text__red">{{this.$route.query.s}}</span>
                </h2>
                <article-list-sample :fetchValue="articles[index]" v-for="(article, index) in articles" :key="`${index}`" />
                <h3 class="text-xs-center" v-show="!articles.length">Brak wyników wyszukiwania...</h3>
            </v-flex>
        </v-layout>
        <main-footer />
    </v-app>
</template>

<script>
    import MainHeader from './MainHeader';
    import MainFooter from './MainFooter';
    import ArticleListSample from './ArticleListSample';
    import API from '../api';
    export default {
        components: {
            ArticleListSample,
            MainFooter,
            MainHeader
        },
        name: 'search',
        data: () => ({
            articles: []
        }),
        methods: {
            loadPosts() {
                API.get(`posts?search=${this.$route.query.s}`)
                    .then(response => this.articles = response['data'])
            }
        },
        watch: {
            '$route' () {
                this.loadPosts();
            }
        },
        mounted() {
            this.loadPosts();
        }
    };
</script>

<style scoped>

</style>