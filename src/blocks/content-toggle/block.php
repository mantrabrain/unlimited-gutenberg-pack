<?php

/**
 * Enqueue frontend script for content toggle block
 *
 * @return void
 */
function gutenbergpack_content_toggle_add_frontend_assets() {
	wp_enqueue_script(
		'gutenberg_pack-content-toggle-front-script',
		plugins_url( 'content-toggle/front.js', dirname( __FILE__ ) ),
		array( 'jquery' ),
		'1.0',
		true
	);
}

add_action( 'wp_enqueue_scripts', 'gutenbergpack_content_toggle_add_frontend_assets' );
