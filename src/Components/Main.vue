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
    export default {
        name: "Main",
        components: {
            MostPopular,
            MainSiteCategoriesSample,
            NewestArticles,
            MainHeader,
            MainFooter
        },
        data: () => ({
            promotedCategories: [
                {
                    name: "JavaScript",
                    id: 2
                },
                {
                    name: "Frontend",
                    id: 3
                },
            ]
        }),
    }
</script>

<style scoped>
</style>