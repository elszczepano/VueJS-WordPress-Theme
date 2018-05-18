<?php
show_admin_bar(false);

remove_action('template_redirect', 'redirect_canonical');

function remove_redirects() {
    add_rewrite_rule('^/(.+)/?', 'index.php', 'top');
}
add_action('init', 'remove_redirects');

function load_vue_scripts() {

    wp_enqueue_style('roboto', 'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&amp;subset=latin-ext', false, null);
    wp_enqueue_style('icons', 'https://fonts.googleapis.com/icon?family=Material+Icons', false, null);
    wp_enqueue_style('style', get_template_directory_uri() . '/dist/style.css', false, null);
    wp_enqueue_script('app.js', get_template_directory_uri() . '/dist/js/bundle.js', null, null, true);
}
add_action('wp_enqueue_scripts', 'load_vue_scripts', 100);