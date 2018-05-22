<template>
    <v-container grid-list-md>
        <h2 class="headline main-page--header"><span class="text__red">K</span>ategoria - ostatnio dodane</h2>
        <v-layout row wrap>
            <v-flex v-for="i in 4" :key="`4${i}`" xs12 md3 sm6>
                <article-sample />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import ArticleSample from './ArticleSample';

    export default {
        components: {ArticleSample},
        name: 'main-site-categories-sample'
    };
</script>

<style scoped>

</style>