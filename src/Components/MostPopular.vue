<template>
    <v-container grid-list-md>
        <h2 class="display-1 main-page--header">Najpopularniejsze artykuły</h2>
        <v-layout row wrap>
            <v-flex v-for="index in 3" :key="`${index}`" xs12 md4>
                <article-sample :details="articles[index-1]"/>
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
                .then(({data}) => {
                    for(let value of data) {
                        if(value['acf']['promoted'].length) this.articles.push(value)
                    }
                })
        }
    };
</script>

<style scoped>

</style>