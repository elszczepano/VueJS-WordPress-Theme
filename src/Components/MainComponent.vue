<template>
   <v-app>
      <main-header/>
       <v-layout class="mx-auto default--container">
           <v-flex class="loading-spinner" v-if="!ready" xs12 d-flex justify-center align-center>
               <scale-loader color="#E03C31"></scale-loader>
           </v-flex>
           <v-layout v-show="ready" row wrap>
               <v-flex xs12>
                   <newest-articles @ready="ready = true"/>
               </v-flex>
               <v-flex xs12>
                   <most-popular/>
               </v-flex>
               <v-flex xs12>
                   <main-site-categories-sample :category="promotedCategories[0]"/>
               </v-flex>
               <v-flex xs12>
                   <main-site-categories-sample :category="promotedCategories[1]"/>
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
    import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';
    export default {
        name: 'MainComponent',
        components: {
            MostPopular,
            MainSiteCategoriesSample,
            NewestArticles,
            MainHeader,
            MainFooter,
            ScaleLoader
        },
        data: () => ({
            ready: false,
            promotedCategories: [
                {
                    name: 'Frontend',
                    id: 3
                },
                {
                    name: 'Wordpress',
                    id: 7
                }
            ]
        }),
    }
</script>

<style scoped>
</style>