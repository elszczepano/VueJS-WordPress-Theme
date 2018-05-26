<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container">
            <v-flex xs12 ma-2 >
                <h2 class="display-2 main-page--header text-xs-center">
                    Kategoria:
                    <span class="text__red">{{category}}</span>
                </h2>
                <article-list-sample :fetchValue="articles[index]" v-for="(article, index) in articles" :key="`${index}`"/>
                <h3 class="text-xs-center" v-show="!articles.length">Brak wpisów w tej kategorii...</h3>
            </v-flex>
        </v-layout>
        <main-footer/>
    </v-app>
</template>

<script>

    import MainFooter from './MainFooter';
    import MainHeader from './MainHeader';
    import API from '../api';
    import ArticleListSample from './ArticleListSample';
    import router from '../router';
    export default {
        components: {
            ArticleListSample,
            MainHeader,
            MainFooter
        },
        name: 'category-articles',
        data: () => ({
            articles: [],
            category: ''
        }),
        methods: {
            loadPosts() {
                API.get(`posts?categories=${this.$route.params.id}`)
                    .then(response => this.articles = response['data'])
            },
            getCategory() {
                API.get(`categories/${this.$route.params.id}`)
                    .then(response => this.category = response['data']['name'])
                    .catch(error => {
                        router.push({path: '/'});
                    });
            }
        },
        watch: {
            '$route' () {
                this.loadPosts();
                this.getCategory();
            }
        },
        mounted() {
            this.loadPosts();
            this.getCategory();
        }
    };
</script>

<style scoped>

</style>