<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container">
            <v-container grid-list-md mb-5>
                <h2 class="display-2 text-xs-center main-page--header">Portfolio</h2>
                <v-layout row wrap>
                    <v-flex v-for="(project, index) in projects" :key="`${index}`" xs12 sm6>
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
    import API from '../api';
    export default {
        components: {
            PortfolioSample,
            MainFooter,
            MainHeader
        },
        name: 'portfolio',
        data: () => ({
            projects: []
        }),
        mounted() {
            API.get('projects?per_page=100')
                .then(response => this.projects = response['data'])
        }
    };

</script>

<style scoped>

</style>