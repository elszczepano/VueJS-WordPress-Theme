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
                if(value.length < 3600) return '1 minuta'
                else if(value.length < 9000) return `${Math.ceil(value.length/1800)} minuty`
                else return `${Math.ceil(value.length/1800)} minut`
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