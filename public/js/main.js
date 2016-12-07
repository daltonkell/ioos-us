$(function() {
	const CATALOG_URL = "https://dev-catalog.ioos.us/dataset?q=";

    headerScroll = function () {
    	var scroll = $(this).scrollTop();
        if (scroll > 50) {
        	$('header > div > a').css('visibility', 'hidden');
        	$('header').css('position', 'fixed');
        	if ($('body').width() > 768) {
            	$('header').css('top', '-50px');
            	$('#grid-container').css('margin-top', '200px');
        	}
        } else {
        	$('header > div > a').css('visibility', 'visible');
            $('header').css({'position':'static','top':'0'});
            if ($('body').width() > 768)
				$('#grid-container').css('margin-top', '25px');
        }
    }
	$(document).scroll(headerScroll);
	window.onresize = function (e) {
		if ($('body').width() > 768 && $('hdeader').css('top') === undefined)
			headerScroll();
	}
    $('[data-toggle="tooltip"]').tooltip();
	$('.collapse')
		.collapse('hide')
		.on('show.bs.collapse', () => {
			$('#search-data-button').addClass('open');
			setTimeout(() => {$('#search-input-collapse input').focus()}, 50);
		})
		.on('hide.bs.collapse', () => {
			$('#search-data-button').removeClass('open');
			setTimeout(() => {$('#search-data-button').blur()}, 50);
		});
	function searchCatalog () {
		let query = $('input').val().trim();
		if (query !== "")
			window.open(CATALOG_URL + query, "_blank");
	}
	$('#search-input-collapse input').on('keyup', (e) => {
		if (e.which === 13)
			searchCatalog();
	});
	$('#search-input-collapse button').on('click', searchCatalog);
});