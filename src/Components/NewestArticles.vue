<template>
    <v-container grid-list-md>
        <h2 class="display-2 main-page--header"><span class="text__red">N</span>ajnowsze artykuły</h2>
        <v-layout row wrap>
            <v-flex d-flex xs12 md8>
                <v-card>
                    <v-card-media :src="thumbnail" height="575px">
                    </v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{title}}</h3>
                            <div>{{description | slice}}...</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat>Czytaj dalej <i class="material-icons red--marker">chevron_right</i></v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex d-flex xs12 md4>
                <v-layout row wrap>
                    <v-flex v-for="i in 2" :key="`${i}`">
                        <article-sample :fetchValue="articles[i]"  />
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import ArticleSample from './ArticleSample';
    import API from '../api';
    export default {
        components: {ArticleSample},
        name: 'newest-articles',
        data: () => ({
            articles: [],
            thumbnail: '',
            title: '',
            description: ''
        }),
        filters: {
            slice: function(value) {
                return value.slice(3, 225);
            }
        },
        mounted() {
            API.get('posts?per_page=3')
                .then(response => this.articles = response['data'])
                .then(() => this.title = this.articles[0]['title']['rendered'])
                .then(() => this.thumbnail = this.articles[0]['better_featured_image']['source_url'])
                .then(() => this.description = this.articles[0]['excerpt']['rendered'])
        }
    };
</script>

<style scoped>
    @media only screen and (max-width: 600px) {
        .main-page--header {
            font-size: 3rem !important;
        }
    }
</style>