<template>
    <v-content >
        <v-flex xs12 my-3>
            <v-card>
                <v-layout row wrap>
                    <v-flex xs12 sm4>
                        <v-card-media src="https://www.w3schools.com/html/img_girl.jpg" height="200px"></v-card-media>
                    </v-flex>
                    <v-flex xs12 sm8 pa-3>
                        <div class="headline">Unlimited music now</div>
                        <div>
                            Listen to your favorite artists and albums whenever and wherever, online and offline.
                            Listen to your favorite artists and albums whenever and wherever, online and offline.
                            Listen to your favorite artists and albums whenever and wherever, online and offline.
                            Listen to your favorite artists and albums whenever and wherever, online and offline.
                            Listen to your favorite artists and albums whenever and wherever, online and offline.
                        </div>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat>Czytaj dalej <i class="material-icons red--marker">chevron_right</i></v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>

            </v-card>
        </v-flex>
    </v-content>
</template>

<script>
    export default {
        name: 'article-list-sample'
    };
</script>

<style scoped>

</style>