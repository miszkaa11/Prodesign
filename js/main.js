$(document).ready(function(){
	addBackgroundColor();
});

$(window).scroll(function(){
	addBackgroundColor();
});



function addBackgroundColor() {
	var navHeight = parseInt($('#main-nav').outerHeight(), 10);
	
	//	console.log(navHeight);
	
	var actualY = parseInt($(window).scrollTop(), 10);
	
	//	console.log(actualY);
	
	if(actualY >= navHeight) {
		$('#main-nav').addClass('transparentBg');
	} else {
		$('#main-nav').removeClass('transparentBg');
	}
}

$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1000);
});