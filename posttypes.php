<?php

add_action( 'init', 'posttype_projects' );
function posttype_projects() {
    $labels = array(
        'name'               => "Projekty",
        'singular_name'      => "Projekt",
        'menu_name'          => "Projekty",
        'name_admin_bar'     => "Projekty",
        'add_new'            => "Dodaj nowe projekty",
        'add_new_item'       => "Dodaj nowy projekt",
        'new_item'           => "Nowy projekt",
        'edit_item'          => "Edytuj projekt",
        'view_item'          => "Podgląd projektu",
        'all_items'          => "Wszystkie projekty",
        'search_items'       => "Wyszukaj projekty",
        'not_found'          => "Nie znaleziono projektów",
        'not_found_in_trash' => "Nie znaleziono projektów w koszu"
    );

    $args = array(
        'labels'             => $labels,
        'description'        => "Projekty",
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'project' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'show_in_rest'       => true,
        'rest_base'          => 'projects-api',
        'rest_controller_class' => 'WP_REST_Posts_Controller',
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt')
    );

    register_post_type( 'projekt', $args );
}