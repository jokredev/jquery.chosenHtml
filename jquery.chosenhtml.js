/*!
chosenHtml
by Jochen Kremer, https://github.com/jokredev/

Version 0.0.3
Full source at https://github.com/jokredev/jquery.chosenHtml/
Copyright (c) 2016 Jochen Kremer https://github.com/jokredev/

MIT License, https://github.com/jokredev/jquery.chosenHtml/LICENSE.md
*/
(function ( $ ) {	 
    $.fn.chosenHtml = function(chosenOptions, htmlOptions) {
    	var htmlOptions = $.extend( {}, {
    		attr_html: 'data-html',
    	    attr_tooltip: 'data-tooltip',
    		attr_tooltip_to: 'title',
    		init_tooltip: function(e) {
    			$(e).tooltip({container:'body'});
    		}
    	}, htmlOptions);
    	
    	var chosenOptions = $.extend( {}, {
    	}, chosenOptions);
    	
    	$(this).each(function() {			
			$(this)
				.on('chosen:showing_dropdown chosen:ready', function(e, data) {
					$.each(data.chosen.results_data, function(i, x) {
						var opt  = $(data.chosen.form_field).find('option:eq('+x.array_index+')');
						var li   = $(data.chosen.dropdown).find('li[data-option-array-index="'+x.array_index+'"]');
						var ch   = $(data.chosen.search_choices).find('li.search-choice a[data-option-array-index="'+x.array_index+'"]');

						// Add HTML-Support
						if(opt.attr(htmlOptions.attr_html)) {
							li.html($(opt).attr(htmlOptions.attr_html));
							ch.prev().html(opt.attr(htmlOptions.attr_html));							
						} 				

						
						// Add Tooltip
						if(opt.attr(htmlOptions.attr_tooltip)) {
							li.attr(htmlOptions.attr_tooltip_to, opt.attr(htmlOptions.attr_tooltip));
							ch.prev().html(opt.attr(htmlOptions.attr_html));
						}
						htmlOptions.init_tooltip($(data.chosen.container).find('[title]'));						
					});
			});
			$(this).chosen(chosenOptions);
    	});
    	return this;
	};
}( jQuery ));
