<template>
    <v-container grid-list-md>
        <h2 class="display-1 main-page--header">{{this.category.name}} - ostatnio dodane</h2>
        <v-layout row wrap>
            <v-flex v-for="i in 4" :key="`${i}`" xs12 lg3 sm6>
                <article-sample :details="articles[i-1]"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import ArticleSample from './ArticleSample';
    import API from '../api';
    export default {
        components: {ArticleSample},
        name: 'main-site-categories-sample',
        props: ['category'],
        data: () => ({
            articles: []
        }),
        mounted() {
            API.get(`posts?categories=${this.category.id}&per_page=4`)
                .then(({data}) => this.articles = data)
        }
    };
</script>

<style scoped>

</style>