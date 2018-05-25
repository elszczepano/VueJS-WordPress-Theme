<template>
    <noscript>
        Please enable JavaScript to view the
        <a href="https://disqus.com/?ref_noscript" rel="nofollow">
            comments powered by Disqus.
        </a>
    </noscript>
</template>

<script>
    var disqus_config = function () {
        this.page.url = PAGE_URL;
        this.page.identifier = PAGE_IDENTIFIER;
    };
    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://devszczepaniak.disqus.com/embed.js';

        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
    export default {
        name: 'comments'
    };
</script>

<style scoped>

</style>