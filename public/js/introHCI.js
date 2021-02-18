'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeBtn').click((e) => {
		e.preventDefault();
		ga('create', 'UA-190125629-1', 'auto');
		ga('send', 'event', 'signup', 'click');
	})
}