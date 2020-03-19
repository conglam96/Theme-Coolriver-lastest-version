require([
	'jquery',
	'owlCarousel'],
	function($){
		$(document).ready(function(){
			var width=$( window ).width();
			if(width < 768){
				$('.page-footer .ft-menu h3').click(function(){
						$(this).toggleClass('open');
						$(this).next().slideToggle();
					});
			}
		});
	});