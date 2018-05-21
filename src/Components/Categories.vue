<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container">

        </v-layout>
        <main-footer/>
    </v-app>
</template>

<script>
    import MainHeader from './MainHeader';
    import MainFooter from './MainFooter';

    export default {
        components: {
            MainFooter,
            MainHeader
        },
        name: 'categories'
    };
</script>

<style scoped>

</style>