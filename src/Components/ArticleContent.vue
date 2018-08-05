<template>
    <v-layout mt-2 mb-5 mx-3 class="mx-auto default--container">
        <section class="article--content" v-html="content"></section>
    </v-layout>
</template>

<script>
    export default {
        name: 'article-content',
        props: ['details'],
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

</style>