<template>
    <v-container grid-list-md >
        <v-layout class="mx-auto default--container article--header">
            <v-flex xs12>
                <v-jumbotron :src="thumbnail"></v-jumbotron>
                <v-layout row wrap>
                    <v-flex text-md-center pa-3 xs12>
                        <h3 class="display-1" v-html="title"></h3>
                    </v-flex>
                    <v-layout text-xs-center row wrap>
                        <v-flex xs12 sm4 class="align-center">
                            <strong v-for="(category, index) in categoriesNames" :key="`${index}`">
                                <v-btn class="red--marker" icon><v-icon small>fas fa-tags</v-icon></v-btn>
                                <router-link :to="`/category/${categoriesIds[index]}`"><span>{{category}}</span></router-link>
                            </strong>
                        </v-flex>
                        <v-flex xs12 sm4 class="align-center">
                            <strong><v-btn class="red--marker" icon><v-icon small>fas fa-user</v-icon></v-btn> {{author}}</strong>
                        </v-flex>
                        <v-flex xs12 sm4 class="align-center">
                            <strong><v-btn class="red--marker" icon><v-icon small>fas fa-calendar-alt</v-icon></v-btn> {{date | slice}}</strong>
                        </v-flex>
                    </v-layout>
                </v-layout>
            </v-flex>
        </v-layout>
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
            categoriesIds: [],
            categoriesNames: [],
        }),
        methods: {
            getAuthor() {
                API.get(`users/${this.authorId}`)
                    .then(response => this.author = response['data']['name']);
            },
            getCategories() {
                for(let index of this.categoriesIds) {
                    API.get(`categories/${index}`)
                        .then(response => this.categoriesNames.push(response['data']['name']));
                }
            }
        },
        filters: {
            slice: function(value) {
                return value.slice(0, 10);
            }
        },
        watch: {
            '$props': {
                handler: function (val) {
                    this.categoriesNames = [];
                    this.title = val['details']['title']['rendered'];
                    this.thumbnail = val['details']['better_featured_image']['source_url'];
                    this.date = val['details']['date'];
                    this.authorId = val['details']['author'];
                    this.categoriesIds = [...val['details']['categories']];
                    this.getAuthor();
                    this.getCategories();
                },
                deep: true
            }
        }
    };
</script>

<style scoped>
    .article--header {
        border-bottom: $default-border;
    }
</style>