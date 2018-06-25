<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container">
            <v-flex xs12 ma-2 >
                <h2 class="display-2 main-page--header text-xs-center">
                    Kategoria:
                    <span class="text__red">{{category}}</span>
                </h2>
                <article-list-sample :details="article" v-for="(article, index) in articles" :key="`${index}`"/>
                <infinite-loading force-use-infinite-wrapper="true" @infinite="infiniteHandler">
                    <span class="headline" v-show="articles.length>5" v-if="articles.length" slot="no-more">Koniec artykułów</span>
                    <span class="headline" v-else slot="no-more">{{message}}</span>
                </infinite-loading>
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
    import InfiniteLoading from 'vue-infinite-loading';
    import router from '../router';
    export default {
        components: {
            ArticleListSample,
            MainHeader,
            MainFooter,
            InfiniteLoading
        },
        name: 'category-articles',
        data: () => ({
            articles: [],
            category: '',
            postsCount: 0,
            categoryId: 0,
            message: ''
        }),
        methods: {
            loadPosts(param) {
                API.get(`categories?slug=${this.$route.params.slug}`)
                    .then(({data}) => {
                        this.categoryId = data[0]['id'];
                        this.category = data[0]['name'];
                    })
                    .then(() => {
                        API.get(`posts?categories=${this.categoryId}&per_page=${param}`)
                            .then(response => {
                                this.postsCount = parseInt(response.headers['x-wp-total'], 10);
                                this.articles = response['data'];
                                if(!this.articles.length) this.message = "Brak wpisów w tej kategorii";
                            })
                    })
                    .catch(() => {
                        router.push({path: '/'});
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
        watch: {
            '$route' () {
                this.loadPosts(5);
            }
        },
        mounted() {
            this.loadPosts(5);
        }
    };
</script>

<style scoped>

</style>