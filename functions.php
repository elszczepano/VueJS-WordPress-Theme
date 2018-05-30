<?php
require('posttypes.php');

//enable thumbnails

add_theme_support( 'post-thumbnails' );

//show acf fields in API

add_filter( 'acf/rest_api/field_settings/show_in_rest', '__return_true' );

//disable admin bar

show_admin_bar(false);

//unregister tags

function myprefix_unregister_tags() {
    unregister_taxonomy_for_object_type('post_tag', 'post');
}
add_action('init', 'myprefix_unregister_tags');

//remove redirects

remove_action('template_redirect', 'redirect_canonical');
function remove_redirects() {
    add_rewrite_rule('^/(.+)/?', 'index.php', 'top');
}
add_action('init', 'remove_redirects');

//load scripts

function load_vue_scripts() {

    wp_enqueue_style('roboto', 'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&amp;subset=latin-ext', false, null);
    wp_enqueue_style('icons', 'https://fonts.googleapis.com/icon?family=Material+Icons', false, null);
    wp_enqueue_style('font-awesome', 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', false, null);
    wp_enqueue_script('app', get_template_directory_uri() . '/dist/js/bundle.js', null, null, true);
}
add_action('wp_enqueue_scripts', 'load_vue_scripts', 100);