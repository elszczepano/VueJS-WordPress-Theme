<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container">
            <v-flex class="loading-spinner" v-if="!ready" xs12 d-flex justify-center align-center>
                <scale-loader color="#E03C31"></scale-loader>
            </v-flex>
            <v-layout v-show="ready" mt-3 row wrap>
                <article>
                    <v-flex xs12>
                        <article-header :details="article[0]"/>
                    </v-flex>
                    <v-flex xs12>
                        <article-content :details="article[0]"/>
                    </v-flex>
                    <v-flex xs12>
                        <comments :details="article[0]"/>
                    </v-flex>
                </article>
            </v-layout>
        </v-layout>
        <main-footer/>
    </v-app>
</template>

<script>
    import MainHeader from './MainHeader';
    import MainFooter from './MainFooter';
    import ArticleHeader from './ArticleHeader';
    import Comments from './Comments';
    import ArticleContent from './ArticleContent';
    import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';
    import API from '../api';
    import router from '../router';
    export default {
        components: {
            ArticleContent,
            Comments,
            ArticleHeader,
            MainFooter,
            MainHeader,
            ScaleLoader
        },
        data: () => ({
            article: [],
            ready: false
        }),
        name: 'article-page',
        methods: {
            loadContent() {
                API.get(`posts?slug=${this.$route.params.slug}`)
                    .then(({data}) => {
                        this.article = data;
                        this.ready = true;
                        if(!data.length) router.push({path: '/'});
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
    .default--container {
        max-width: 1000px !important;
    }
</style>