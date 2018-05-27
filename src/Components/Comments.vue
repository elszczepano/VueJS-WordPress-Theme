<template>
    <v-flex mb-5 mx-3>
       <vue-disqus shortname="dszczepaniak" :identifier="this.$route.query.page" :url="this.$route.query.page"></vue-disqus>
    </v-flex>
</template>

<script>
    export default {
        name: 'comments'
    };
</script>

<style scoped>

</style>