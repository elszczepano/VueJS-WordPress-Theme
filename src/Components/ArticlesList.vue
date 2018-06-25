<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container">
            <v-flex xs12 ma-2>
                <h2 class="display-2 text-xs-center main-page--header">Lista artykułów</h2>
                <article-list-sample :details="articles[index]" v-for="(article, index) in articles" :key="`${index}`" />
                <infinite-loading force-use-infinite-wrapper="true" @infinite="infiniteHandler">
                    <span v-show="articles.length>5" class="headline" slot="no-more">Koniec artykułów...</span>
                </infinite-loading>
            </v-flex>
        </v-layout>
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
            InfiniteLoading,
        },
        name: 'articles-list',
        data: () => ({
            articles: [],
            postsCount: 0
        }),
        methods: {
            loadPosts(param) {
                API.get(`posts?per_page=${param}`)
                    .then(response => {
                        this.postsCount = parseInt(response.headers['x-wp-total'], 10);
                        this.articles = response['data'];
                    });
            },
            infiniteHandler($state) {
                setTimeout(() => {
                    const articles = this.articles.length;
                    this.loadPosts(articles + 5);
                    if(this.articles.length === this.postsCount) $state.complete();
                    $state.loaded();
                }, 1000);
            }
        },
        mounted() {
            this.loadPosts(5);
        }
    };
</script>

<style scoped>

</style>