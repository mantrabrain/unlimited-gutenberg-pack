/* eslint-disable */

( function( $ ) {
	$( document ).ready( function() {
		const titleWrap = '.wp-block-gutenbergpack-content-toggle-accordion-title-wrap';
		const indicator = '.wp-block-gutenbergpack-content-toggle-accordion-state-indicator';
		const contentWrap = '.wp-block-gutenbergpack-content-toggle-accordion-content-wrap';
		$( document )
			.on( 'click', titleWrap, function() {
				$( this ).find( indicator ).toggleClass( 'open' );
				const contentWrapEl = $( this ).siblings( contentWrap );
				if ( $( this ).find( indicator ).hasClass( 'open' ) ) {
					contentWrapEl.slideDown( 500 );
				} else {
					contentWrapEl.slideUp( 500 );
				}
			} );
	} );
}( jQuery ) );
