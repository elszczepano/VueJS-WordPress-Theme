<template>
    <v-content >
        <v-flex xs12 my-3>
            <v-card>
                <v-layout row wrap>
                    <v-flex xs12 sm4>
                        <v-card-media :src="thumbnail" height="200px"></v-card-media>
                    </v-flex>
                    <v-flex xs12 sm8 pa-3>
                        <div class="headline" v-html="title"></div>
                        <div>{{description | slice}}</div>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <router-link :to="`/post/${slug}`"><v-btn flat>Czytaj dalej <i class="material-icons red--marker">chevron_right</i></v-btn></router-link>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
    </v-content>
</template>

<script>
    export default {
        name: 'article-list-sample',
        props: [
            'details'
        ],
        data: () => ({
            slug: '',
            thumbnail: '',
            title: '',
            description: ''
        }),
        filters: {
            slice: function(value) {
                return value.slice(3, 300);
            }
        },
        watch: {
            '$props': {
                handler: function (val) {
                    this.title = val['details']['title']['rendered'];
                    this.thumbnail = val['details']['better_featured_image']['source_url'];
                    this.description = val['details']['excerpt']['rendered'];
                    this.slug = val['details']['slug'];
                },
                deep: true
            }
        },
        created() {
            this.title = this.details['title']['rendered'];
            this.thumbnail = this.details['better_featured_image']['source_url'];
            this.description = this.details['excerpt']['rendered'];
            this.slug = this.details['slug'];
        }
    };
</script>

<style scoped>

</style>