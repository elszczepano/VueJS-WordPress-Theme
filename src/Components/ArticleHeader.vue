<template>
    <v-container grid-list-md >
        <header class="mx-auto default--container article--header">
            <v-flex xs12>
                <v-card tile>
                    <v-card-media class="thumbnail" :src="thumbnail" height="500px"></v-card-media>
                </v-card>
                <v-layout row wrap>
                    <v-flex text-xs-center pa-3 xs12>
                        <h1 class="display-2" v-html="title"></h1>
                    </v-flex>
                    <v-layout text-xs-center row wrap>
                        <v-flex xs12 sm6 md3 class="align-center">
                            <strong v-for="(category, index) in categories" :key="`${index}`">
                                <v-btn class="red--marker" icon><v-icon small>fas fa-tags</v-icon></v-btn>
                                <router-link :to="`/category/${category.slug}`"><span>{{category.name}}</span></router-link>
                            </strong>
                        </v-flex>
                        <v-flex xs12 sm6 md3 class="align-center">
                            <strong><v-btn class="red--marker" icon><v-icon small>fas fa-user</v-icon></v-btn> {{author}}</strong>
                        </v-flex>
                        <v-flex xs12 sm6 md3 class="align-center">
                            <strong><v-btn class="red--marker" icon><v-icon small>fas fa-calendar-alt</v-icon></v-btn> {{date | slice}}</strong>
                        </v-flex>
                        <v-flex xs12 sm6 md3>
                            <strong><v-btn class="red--marker" icon><v-icon small>far fa-clock</v-icon></v-btn>{{content | time}} czytania</strong>
                        </v-flex>
                    </v-layout>
                </v-layout>
            </v-flex>
        </header>
    </v-container>
</template>

<script>
    import API from '../api';
    export default {
        name: 'article-header',
        props: [
            'details'
        ],
        data: () => ({
            id: 0,
            thumbnail: '',
            title: '',
            authorId: '',
            author: '',
            date: '',
            content: '',
            categoriesIds: [],
            categories: [],
        }),
        methods: {
            getAuthor() {
                API.get(`users/${this.authorId}`)
                    .then(response => this.author = response['data']['name']);
            },
            getCategories() {
                for(let index of this.categoriesIds) {
                    API.get(`categories/${index}`)
                        .then(response => this.categories.push(response['data']));
                }
            }
        },
        filters: {
            slice: function(value) {
                return value.slice(0, 10);
            },
            time: function(value) {
                const val = Math.ceil(value.length/1200);
                if(val === 1) return '1 minuta'
                else if(val <= 4) return `${val} minuty`
                else if(val >= 22 && (!((val-2)%10)||!((val-3)%10)||!((val-4)%10))) return `${val} minuty`
                else return `${val} minut`
            }
        },
        watch: {
            '$props': {
                handler: function (val) {
                    this.categoriesNames = [];
                    this.title = val['details']['title']['rendered'];
                    this.content = val['details']['content']['rendered'];
                    this.thumbnail = val['details']['better_featured_image']['source_url'];
                    this.date = val['details']['date'];
                    this.authorId = val['details']['author'];
                    this.categoriesIds = [...val['details']['categories']];
                    this.getAuthor();
                    this.getCategories();
                    document.title = `${this.title.replace('&#8211;', '–')} – devszczepaniak.pl`;
                },
                deep: true
            }
        }
    };
</script>

<style scoped>
    @media only screen and (max-width: 600px) {
        .thumbnail {
            height: 200px !important;
        }
    }
    .article--header {
        border-bottom: $default-border;
    }
</style>