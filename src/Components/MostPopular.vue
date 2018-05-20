<template>
    <v-container grid-list-md text-xs-center>
        <h2 class="headline main-page--header"><span class="text__red">N</span>ajpopularniejsze artykuły</h2>
        <v-layout row wrap>
            <v-flex v-for="i in 3" :key="`4${i}`" xs12 sm4>
                <v-card>
                    <v-card-media src="https://www.w3schools.com/html/img_girl.jpg" height="200px">
                    </v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequatur esse est, hic ipsum iste quis quisquam recusandae similique voluptatem! Ab, doloribus eveniet ex iste laborum praesentium quia sequi voluptates.Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'most-popular'
    };
</script>

<style scoped>

</style>