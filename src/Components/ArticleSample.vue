<template>
    <v-card>
        <v-card-media :src="thumbnail" height="200px"></v-card-media>
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{title}}</h3>
                <div>{{description | slice}}...</div>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-spacer></v-spacer>
            <router-link :to="`/post/${id}`"><v-btn flat>Czytaj dalej <i class="material-icons red--marker">chevron_right</i></v-btn></router-link>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'article-sample',
        props: [
            'fetchValue'
        ],
        data: () => ({
            id: 0,
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
                    this.title = val['fetchValue']['title']['rendered'];
                    this.thumbnail = val['fetchValue']['better_featured_image']['source_url'];
                    this.description = val['fetchValue']['excerpt']['rendered'];
                    this.id = val['fetchValue']['id'];
                },
                deep: true
            }
        }
    };
</script>

<style scoped>

</style>