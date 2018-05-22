<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container">
            <v-flex xs12 ma-2>
                <h2 class="display-2 text-xs-center main-page--header"><span class="text__red">L</span>ista artykułów</h2>
                <article-list-sample/>
                <article-list-sample/>
                <article-list-sample/>
                <article-list-sample/>
            </v-flex>
        </v-layout>
        <main-footer />
    </v-app>
</template>

<script>
    import MainHeader from './MainHeader';
    import MainFooter from './MainFooter';
    import ArticleListSample from './ArticleListSample';

    export default {
        components: {
            ArticleListSample,
            MainFooter,
            MainHeader
        },
        name: 'articles-list'
    };
</script>

<style scoped>

</style>