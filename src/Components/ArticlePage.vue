<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container">
            <v-layout row wrap>
                <v-flex xs12>
                    <article-header/>
                </v-flex>
                <v-flex xs12>
                    <article-content />
                </v-flex>
                <v-flex xs12>
                    <comments/>
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

    export default {
        components: {
            ArticleContent,
            Comments,
            ArticleHeader,
            MainFooter,
            MainHeader
        },
        name: 'article-page'
    };
</script>

<style scoped>

</style>