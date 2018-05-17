<template>
    <h1>{{ message }}</h1>
</template>

<script>
    console.log(process.env.NODE_ENV);
    export default {
        name: 'app',
        data() {
            return {
                message: 'Hello, Vue!'
            };
        }
    };
</script>