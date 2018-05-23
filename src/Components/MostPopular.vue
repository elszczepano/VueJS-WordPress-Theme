<template>
    <v-container grid-list-md>
        <h2 class="headline main-page--header"><span class="text__red">N</span>ajpopularniejsze artykuły</h2>
        <v-layout row wrap>
            <v-flex v-for="i in 3" :key="`${i}`" xs12 sm4>
                <article-sample :fetchValue="articles[i]" />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import ArticleSample from './ArticleSample';
    import API from '../api';
    export default {
        components: {ArticleSample},
        name: 'most-popular',
        data: () => ({
            articles: []
        }),
        mounted() {
            API.get('posts?per_page=100')
                .then(response => {
                    for(let value of response['data']) {
                        if(value['acf']['promoted'].length) this.articles.push(value)
                    }
                })
        }
    };
</script>

<style scoped>

</style>