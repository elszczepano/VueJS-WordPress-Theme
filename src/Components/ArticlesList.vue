<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container">
            <v-flex xs12 ma-2>
                <h2 class="display-2 text-xs-center main-page--header">Lista artykułów</h2>
                <article-list-sample :fetchValue="articles[index]" v-for="(article, index) in articles" :key="`${index}`" />
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
        name: 'articles-list',
        data: () => ({
            articles: []
        }),
        mounted() {
            API.get(`posts?per_page=10`)
                .then(response => this.articles = response['data'])
        }
    };
</script>

<style scoped>

</style>