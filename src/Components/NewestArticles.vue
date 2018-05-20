<template>
    <v-container grid-list-md>
        <h2 class="display-2 main-page--header"><span class="text__red">N</span>ajnowsze artykuły</h2>
        <v-layout row wrap>
            <v-flex d-flex xs12 md8>
                <v-card>
                    <v-card-media src="https://www.w3schools.com/html/img_girl.jpg" height="575px">
                    </v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat>Czytaj dalej</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex d-flex xs12 md4>
                <v-layout row wrap>
                    <v-flex d-flex>
                        <article-sample />
                    </v-flex>
                    <v-flex d-flex>
                        <article-sample />
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import ArticleSample from './ArticleSample';
    export default {
        components: {ArticleSample},
        name: 'newest-articles'
    };
</script>

<style scoped>
</style>