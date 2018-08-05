<template>
    <v-card>
        <v-card-media :src="thumbnail" height="450px"></v-card-media>
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-2" v-html="title"></h3>
                <div v-html="description"></div>
            </div>
        </v-card-title>
        <v-card-actions>
                <v-layout row wrap>
                    <v-flex v-if="source" xs12 d-flex justify-center>
                        <v-icon>fab fa-github</v-icon>
                        <v-btn flat :href="source" target="blank">Źródło</v-btn>
                    </v-flex>
                    <v-flex v-if="preview" xs12 d-flex justify-center>
                        <v-icon>fas fa-link</v-icon>
                        <v-btn flat :href="preview" target="blank">Demo</v-btn>
                    </v-flex>
                </v-layout>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'article-list-sample',
        props: ['details'],
        data: () => ({
            thumbnail: '',
            title: '',
            description: '',
            source: '',
            preview: ''
        }),
        created() {
            this.title = this.details['title']['rendered'];
            this.thumbnail = this.details['better_featured_image']['source_url'];
            this.description = this.details['content']['rendered'];
            this.source = this.details['acf']['source'];
            this.preview = this.details['acf']['preview'];
        }
    };
</script>

<style scoped>

</style>