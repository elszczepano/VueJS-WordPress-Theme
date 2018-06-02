<template>
    <v-flex mb-5 mx-3>
       <vue-disqus shortname="devszczepaniak" :identifier="identifier" :url="`https://devszczepaniak.pl${this.$route.fullPath}`"></vue-disqus>
    </v-flex>
</template>

<script>
    export default {
        name: 'comments',
        props: [
            'details'
        ],
        data: () => ({
            identifier: ''
        }),
        watch: {
            '$props': {
                handler: function (val) {
                    this.identifier = val['details']['id'].toString();
                },
                deep: true
            }
        }
    };
</script>

<style scoped>

</style>