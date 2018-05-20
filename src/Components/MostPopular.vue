<template>
    <v-container grid-list-md>
        <h2 class="headline main-page--header"><span class="text__red">N</span>ajpopularniejsze artykuły</h2>
        <v-layout row wrap>
            <v-flex v-for="i in 3" :key="`4${i}`" xs12 sm4>
                <article-sample/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import ArticleSample from './ArticleSample';

    export default {
        components: {ArticleSample},
        name: 'most-popular'
    };
</script>

<style scoped>

</style>