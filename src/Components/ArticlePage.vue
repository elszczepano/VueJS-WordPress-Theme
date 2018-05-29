<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container">
            <v-layout row wrap>
                <v-flex xs12>
                    <article-header :details="article[0]"/>
                </v-flex>
                <v-flex xs12>
                    <article-content :details="article[0]"/>
                </v-flex>
                <v-flex xs12>
                    <comments />
                </v-flex>
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
    import API from '../api';
    import router from '../router';
    export default {
        components: {
            ArticleContent,
            Comments,
            ArticleHeader,
            MainFooter,
            MainHeader
        },
        data: () => ({
            article: []
        }),
        name: 'article-page',
        methods: {
            loadContent() {
                API.get(`posts?slug=${this.$route.params.slug}`)
                    .then(response => this.article = response['data'])
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