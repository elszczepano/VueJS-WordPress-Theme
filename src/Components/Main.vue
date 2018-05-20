<template>
   <v-app>
      <main-header/>
       <v-layout class="mx-auto default--container">
           <v-layout row wrap>
               <v-flex xs12>
                   <newest-articles/>
               </v-flex>
               <v-flex xs12>
                   <most-popular/>
               </v-flex>
               <v-flex xs12>
                   <main-site-categories-sample/>
               </v-flex>
               <v-flex xs12>
                   <main-site-categories-sample/>
               </v-flex>
           </v-layout>
       </v-layout>
      <main-footer />
   </v-app>
</template>

<script>
    import MainHeader from './MainHeader';
    import MainFooter from './MainFooter';
    import NewestArticles from './NewestArticles';
    import MainSiteCategoriesSample from './MainSiteCategoriesSample';
    import MostPopular from './MostPopular';
    export default {
        name: "Main",
        components: {
            MostPopular,
            MainSiteCategoriesSample,
            NewestArticles,
            MainHeader,
            MainFooter
        },
    }
</script>

<style scoped>
    .default--container {
        max-width: $default-width;
    }
</style>