$('.menu-toggle').click(function() {
	$('.start-nav').toggleClass('start-nav--open', 500);
	$(this).toggleClass('open');
});