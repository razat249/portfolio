$(function() {
	smoothScrool(300);
	workBelt();
	workload();
	clientStuff();
});

function smoothScrool(duration) {
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length ) {
			event.preventDefault();
			$( 'html, body' ).animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}

function workBelt() {
	$('.thumb-unit').click(function(){
		$('.work-belt').css('left','-100%');
		$('.work-container').show();
	});

	$('.work-return').click(function(){
		$('.work-belt').css('left', '0%');
		$('.work-container').hide(800);
	});
}

function workload() {
	$.ajaxSetup({ cache: true });
	$('.thumb-unit').click(function() {
		var spinner = '<div class="loader">Loading...</div>'
			newHTML = 'work/work-1.html';
		$('.project-load').html(spinner).load(newHTML);
	});
}

function clientStuff() {
	$('.client-unit').first().addClass('active-client');
	$('.client-logo').first().addClass('active-client');
	$('.client-logo').click(function() {
		var $this = $(this),
			$siblings = $this.parent().children(),
			position = $siblings.index($this);
		$('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
		$siblings.removeClass('active-client');
		$this.addClass('active-client');
	});

	$('.client-control-next, .client-control-prev').click(function() {

		var $this = $(this),
		curActiveClient = $('.client-belt').find('.active-client'),
		position = $('.client-belt').children().index(curActiveClient),
		clientNum = $('.client-unit').length;

		if( $this.hasClass('client-control-next') ) {
			if(position < (clientNum-1)){
				$('.active-client').removeClass('active-client').next().addClass('active-client');
			} else {
				$('.client-unit').removeClass('active-client').first().addClass('active-client');
				$('.client-logo').removeClass('active-client').first().addClass('active-client');
			}
		} else {
			if (position === 0) {
				$('.client-unit').removeClass('active-client').last().addClass('active-client');
				$('.client-logo').removeClass('active-client').last().addClass('active-client');
			}else{
				$('.active-client').removeClass('active-client').prev().addClass('active-client');
			}
		}
	});
}