<template>
    <router-link :to="`/post/${slug}`">
        <v-card>
            <v-card-media :src="thumbnail" height="200px"></v-card-media>
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0" v-html="title"></h3>
                    <div class="subheading">{{description | slice}}...</div>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <router-link :to="`/post/${slug}`"><v-btn flat>Czytaj dalej <i class="material-icons red--marker">chevron_right</i></v-btn></router-link>
            </v-card-actions>
        </v-card>
    </router-link>
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
                let desc = value.slice(3, 85);
                const length = desc.length;
                for(let i = length; i>=0; i--) {
                    if(desc[i-1] === " ") {
                        desc = desc.slice(0, i-1);
                        if([',','.'].includes(desc[i-2])) desc = desc.slice(0, i-2);
                        return desc;
                    }
                    desc = desc.slice(0, i-1);
                }
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