<template>
    <v-container grid-list-md>
        <h2 class="display-1 main-page--header">Zobacz także</h2>
        <v-layout row wrap>
            <v-flex v-for="i in 3" :key="`${i}`" xs12 md4>
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
        name: 'recommended-articles',
        data: () => ({
            articles: []
        }),
        methods: {
            loadContent() {
                API.get(`posts?per_page=100`)
                    .then(({data}) => this.articles = data)
                    .then(() => {
                        const randomArticles = [];
                        for(let i = 0; i< 3; i++) {
                            const randomItemIndex = Math.floor(Math.random()*this.articles.length)
                            const randomItem = this.articles[randomItemIndex];
                            this.articles.splice(randomItemIndex, 1);
                            randomArticles.push(randomItem);
                        }
                        this.articles = [...randomArticles];
                    })
                    .catch(() => {
                        router.push({path: '/'});
                    });
            }
        },
        watch: {
            '$route' () {
                this.loadContent();
            }
        },
        mounted() {
            this.loadContent();
        }
    };
</script>

<style scoped>

</style>