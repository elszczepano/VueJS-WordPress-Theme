<template>
   <v-app>
      <main-header/>
       <v-layout class="mx-auto default--container">
           <v-layout row wrap>
               <v-flex xs12 class="hidden-md-and-up">
                   <v-layout ml-4 mr-1 justify-center row wrap>
                       <v-flex xs10 sm11>
                           <v-text-field placeholder="Wyszukaj na blogu" @keyup.enter="search" v-model="searchPhrase" class="input-group--focused" color="red lighten-1"></v-text-field>
                       </v-flex>
                       <v-flex d-flex align-center justify-center just xs2 sm1>
                           <v-btn @click="search" flat icon><i class="material-icons">search</i></v-btn>
                       </v-flex>
                   </v-layout>
               </v-flex>
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
    import router from '../router';
    export default {
        name: "Main",
        components: {
            MostPopular,
            MainSiteCategoriesSample,
            NewestArticles,
            MainHeader,
            MainFooter
        },
        methods: {
            search() {
                if(!this.searchPhrase) return;
                router.push({ path: '/search', query: { s: this.searchPhrase }})
            }
        },
        data: () => ({
            searchPhrase: "",
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