<template>
    <v-app>
        <main-header/>
        <main-footer/>
    </v-app>
</template>

<script>
    import MainHeader from './MainHeader';
    import MainFooter from './MainFooter';

    export default {
        components: {
            MainFooter,
            MainHeader},
        name: 'newsletter-thanks'
    };
</script>

<style scoped>

</style>