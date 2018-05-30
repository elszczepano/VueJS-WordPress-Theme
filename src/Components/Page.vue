<template>
    <v-app>
        <main-header/>
        <v-layout class="mx-auto default--container" my-5 mx-2>
            <v-layout mt-3 row wrap>
                <v-flex xs12>
                    <h2 class="display-2">{{title}}</h2>
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
    import router from '../router';
    import API from '../api';
    export default {
        components: {
            MainFooter,
            MainHeader
        },
        data:() => ({
            content: '',
            title: ''
        }),
        name: 'page',
        methods: {
            loadContent() {
                API.get(`pages?slug=${this.$route.params.slug}`)
                    .then(response => {
                        this.content = response['data'][0]['content']['rendered'];
                        this.title = response['data'][0]['title']['rendered'];
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
    .article--content {
        font-size: 1.25rem;
    }
    @media only screen and (max-width: 600px) {
        .article--content {
            text-align: justify;
        }
    }
</style>