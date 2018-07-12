<template>
    <v-container grid-list-md>
        <h2 class="display-2 main-page--header"><span class="text__red">N</span>ajnowsze artykuły</h2>
        <v-layout row wrap>
            <v-flex d-flex xs12 md8>
                    <v-card>
                        <router-link :to="`/post/${slug}`">
                        <v-card-media class="first-article--picture" :src="thumbnail" height="605px">
                        </v-card-media>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0" v-html="title"></h3>
                                <div class="subheading">{{description | charReplace | sliceText(225)}}...</div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <router-link :to="`/post/${slug}`"><v-btn flat>Czytaj dalej <i class="material-icons red--marker">chevron_right</i></v-btn></router-link>
                        </v-card-actions>
                        </router-link>
                    </v-card>
            </v-flex>
            <v-flex d-flex xs12 md4>
                <v-layout row wrap>
                    <v-flex v-for="i in 2" :key="`${i}`">
                        <article-sample :details="articles[i]"  />
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import ArticleSample from './ArticleSample';
    import API from '../api';
    import { sliceText } from './mixins/sliceText';
    import { charReplace } from './mixins/charReplace';

    export default {
        components: {ArticleSample},
        name: 'newest-articles',
        mixins: [sliceText, charReplace],
        data: () => ({
            articles: [],
            slug: 0,
            thumbnail: '',
            title: '',
            description: ''
        }),
        mounted() {
            API.get('posts?per_page=3')
                .then(({data}) => this.articles = data)
                .then(() => {
                    this.title = this.articles[0]['title']['rendered'];
                    this.thumbnail = this.articles[0]['better_featured_image']['source_url'];
                    this.description = this.articles[0]['excerpt']['rendered'];
                    this.slug = this.articles[0]['slug'];
                    this.$emit('ready');
                });
        }
    };
</script>

<style scoped>
    @media only screen and (max-width: 600px) {
        .main-page--header {
            font-size: 3rem !important;
        }
        .first-article--picture {
            height: 200px !important;
        }
    }
</style>