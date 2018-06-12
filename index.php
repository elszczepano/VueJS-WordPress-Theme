<?php status_header(200); ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="theme-color" content="#263238">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui">
    <?php wp_head(); ?>
    <title><?php if (is_front_page()) bloginfo( 'name' );  else  wp_title();?></title>
</head>
<body>
<div id="app"></div>
<?php wp_footer(); ?>
</body>
</html>