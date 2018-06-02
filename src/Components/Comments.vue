<template>
    <v-flex mb-5 mx-3>
       <vue-disqus shortname="devszczepaniak" :identifier="this.details.id" :url="`https://devszczepaniak.pl${this.$route.fullPath}`"></vue-disqus>
    </v-flex>
</template>

<script>

    export default {
        name: 'comments',
        props: [
            'details'
        ],
    };
</script>

<style scoped>

</style>