<template>
    <v-container grid-list-md >
        <v-layout class="mx-auto default--container article--header">
            <v-flex xs12>
                <v-jumbotron src="https://www.w3schools.com/html/img_girl.jpg"></v-jumbotron>
                <v-layout row wrap>
                    <v-flex text-md-center pa-3 xs12>
                        <h3 class="display-1">12 bibliotek Javascript, które koniecznie musisz poznać!</h3>
                    </v-flex>
                    <v-layout text-xs-center row wrap>
                        <v-flex xs12 sm4 class="align-center">
                            <strong><v-btn class="red--marker" icon><v-icon small>fas fa-tags</v-icon></v-btn> Javascript</strong>
                        </v-flex>
                        <v-flex xs12 sm4 class="align-center">
                            <strong><v-btn class="red--marker" icon><v-icon small>fas fa-user</v-icon></v-btn> Dominik Szczepaniak</strong>
                        </v-flex>
                        <v-flex xs12 sm4 class="align-center">
                            <strong><v-btn class="red--marker" icon><v-icon small>fas fa-calendar-alt</v-icon></v-btn> 04/10/2017</strong>
                        </v-flex>
                    </v-layout>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'article-header'
    };
</script>

<style scoped>
    .article--header {
        border-bottom: $default-border;
    }
</style>