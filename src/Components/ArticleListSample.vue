<template>
    <v-content >
        <v-flex xs12 my-3>
            <v-card>
                <v-layout row wrap>
                    <v-flex xs12 sm4>
                        <v-card-media :src="thumbnail" height="200px"></v-card-media>
                    </v-flex>
                    <v-flex xs12 sm8 pa-3>
                        <div class="headline">{{title}}</div>
                        <div>{{description | slice}}...</div>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat>Czytaj dalej <i class="material-icons red--marker">chevron_right</i></v-btn>
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
            'fetchValue'
        ],
        data: () => ({
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
                    this.title = val['fetchValue']['title']['rendered'];
                    this.thumbnail = val['fetchValue']['better_featured_image']['source_url'];
                    this.description = val['fetchValue']['excerpt']['rendered']
                },
                deep: true
            }
        },
        created() {
            this.title = this.fetchValue['title']['rendered'];
            this.thumbnail = this.fetchValue['better_featured_image']['source_url'];
            this.description = this.fetchValue['excerpt']['rendered'];
        }
    };
</script>

<style scoped>

</style>