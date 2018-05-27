<template>
    <v-layout my-5 mx-3 class="mx-auto default--container">
        <div class="article--content" v-html="content"></div>
    </v-layout>
</template>

<script>
    export default {
        name: 'article-content',
        props: [
            'details'
        ],
        data: () => ({
            content: ''
        }),
        watch: {
            '$props': {
                handler: function (val) {
                    this.content = val['details']['content']['rendered'];
                },
                deep: true
            }
        }
    };
</script>

<style scoped>
    .article--content {
        font-size: 1.25rem;
    }
    @media only screen and (max-width: 600px) {
        .article--content {
            text-align: justify;
        }
    }
</style>