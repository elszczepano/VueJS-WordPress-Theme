<template>
   <v-app>
      <main-header />
      <main-footer />
   </v-app>
</template>

<script>
    import MainHeader from './MainHeader';
    import MainFooter from './MainFooter';
    export default {
        name: "Main",
        components: {
            MainHeader,
            MainFooter
        },
    }
</script>

<style scoped>

</style>