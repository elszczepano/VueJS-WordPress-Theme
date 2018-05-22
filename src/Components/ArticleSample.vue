<template>
    <v-card>
        <v-card-media src="https://www.w3schools.com/html/img_girl.jpg" height="200px"></v-card-media>
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat>Czytaj dalej <i class="material-icons red--marker">chevron_right</i></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'article-sample'
    };
</script>

<style scoped>

</style>