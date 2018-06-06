<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container">
            <v-flex class="loading-spinner" v-if="!ready" xs12 d-flex justify-center align-center>
                <scale-loader color="#E03C31"></scale-loader>
            </v-flex>
            <v-container v-show="ready" grid-list-md mb-5>
                <h2 class="display-2 text-xs-center main-page--header">Portfolio</h2>
                <v-layout row wrap>
                    <v-flex mb-4 v-for="(project, index) in projects" :key="`${index}`" xs12 sm6>
                        <portfolio-sample :details="project"/>
                    </v-flex>
                    <h3 v-if="!projects.length" class="display-1 text-xs-center main-page--header">Brak projektów</h3>
                </v-layout>
            </v-container>
        </v-layout>
        <main-footer/>
    </v-app>
</template>

<script>
    import MainHeader from './MainHeader';
    import MainFooter from './MainFooter';
    import PortfolioSample from './PortfolioSample';
    import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';
    import API from '../api';
    export default {
        components: {
            PortfolioSample,
            MainFooter,
            MainHeader,
            ScaleLoader
        },
        name: 'portfolio',
        data: () => ({
            projects: [],
            ready: false
        }),
        mounted() {
            API.get('projects?per_page=100')
                .then(({data}) => {
                    this.projects = data;
                    this.ready = true
                })
        }
    };

</script>

<style scoped>

</style>