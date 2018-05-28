<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container">
            <v-flex xs12 ma-2 >
                <h2 class="display-2 main-page--header text-xs-center">
                    Wyniki wyszukiwania dla:
                    <span class="text__red">{{this.$route.query.s}}</span>
                </h2>
                <article-list-sample :details="articles[index]" v-for="(article, index) in articles" :key="`${index}`" />
                <infinite-loading force-use-infinite-wrapper="true" @infinite="infiniteHandler">
                    <span v-show="articles.length>10" class="headline" slot="no-more">Koniec artykułów...</span>
                    <h3 v-show="!articles.length" class="text-xs-center">Brak wyników wyszukiwania...</h3>
                </infinite-loading>
            </v-flex>
        </v-layout>a
        <main-footer />
    </v-app>
</template>

<script>
    import MainHeader from './MainHeader';
    import MainFooter from './MainFooter';
    import ArticleListSample from './ArticleListSample';
    import InfiniteLoading from 'vue-infinite-loading';
    import API from '../api';
    export default {
        components: {
            ArticleListSample,
            MainFooter,
            MainHeader,
            InfiniteLoading
        },
        name: 'search',
        data: () => ({
            articles: [],
            postsCount: 0
        }),
        methods: {
            loadPosts(param) {
                API.get(`posts?search=${this.$route.query.s}&per_page=${param}`)
                    .then(response => {
                        this.postsCount = parseInt(response.headers['x-wp-total'], 10);
                        this.articles = response['data'];
                    });
            },
            infiniteHandler($state) {
                setTimeout(() => {
                    const articles = this.articles.length;
                    this.loadPosts(articles + 10);
                    if(this.articles.length === this.postsCount) $state.complete();
                    $state.loaded();
                }, 500);
            }
        },
        watch: {
            '$route' () {
                this.loadPosts(10);
            }
        },
        mounted() {
            this.loadPosts(10);
        }
    };
</script>

<style scoped>

</style>