<?php
/**
 * The main template file.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package vanilla
 */

get_header(); ?>

	<?php

	$config = [
		'pageOnFront' => intval( get_option('page_on_front') ),
	];
	$config['postType'] = get_post_type_object(get_post_type())->rest_base;
	if( is_singular() ) {
		$config['postId'] = get_the_ID();
	}

	if(is_category() or is_tag() or is_tax()) {
		$term = get_queried_object();
		$tax = get_taxonomy($term->taxonomy);
		$config['taxonomy'] = $tax->rest_base;
		$config['termId'] = get_queried_object_id();
	}

	?>
	<script>
		window.WPInitData = <?php echo json_encode( $config ) ;?>
	</script>
	<div id="app"></div>
<?php
get_footer();
