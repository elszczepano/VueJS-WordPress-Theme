<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container">
            <v-flex class="loading-spinner" v-if="!ready" xs12 d-flex justify-center align-center>
                <scale-loader color="#E03C31"></scale-loader>
            </v-flex>
            <v-layout v-show="ready" mt-3 row wrap mx-2 my-5>
                <v-flex xs12 mt-3 mb-5>
                    <h1 class="display-2">{{title}}</h1>
                </v-flex>
                <v-flex xs12>
                    <div class="article--content" v-html="content"></div>
                </v-flex>
            </v-layout>
        </v-layout>
        <main-footer/>
    </v-app>
</template>

<script>
    import MainHeader from './MainHeader';
    import MainFooter from './MainFooter';
    import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';
    import router from '../router';
    import API from '../api';
    export default {
        components: {
            MainFooter,
            MainHeader,
            ScaleLoader
        },
        data:() => ({
            content: '',
            title: '',
            ready: false
        }),
        name: 'page',
        methods: {
            loadContent() {
                API.get(`pages?slug=${this.$route.params.slug}`)
                    .then(({data}) => {
                        this.content = data[0]['content']['rendered'];
                        this.title = data[0]['title']['rendered'];
                        this.ready = true;
                    })
                    .catch(() => {
                        router.push({path: '/'});
                    });
            }
        },
        watch: {
            '$route' () {
                this.loadContent();
            }
        },
        mounted() {
            this.loadContent();
        }
    };
</script>

<style scoped>
</style>