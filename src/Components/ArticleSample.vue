<template>
    <v-card>
        <v-card-media :src="thumbnail" height="200px"></v-card-media>
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0" v-html="title"></h3>
                <div v-html="slice(description)"></div>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-spacer></v-spacer>
            <router-link :to="`/post/${slug}`"><v-btn flat>Czytaj dalej <i class="material-icons red--marker">chevron_right</i></v-btn></router-link>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'article-sample',
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
                return value.slice(3, 100);
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
        }
    };
</script>

<style scoped>

</style>