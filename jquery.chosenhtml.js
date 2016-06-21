/*!
chosenHtml
by Jochen Kremer, https://github.com/jokredev/

Version 0.0.2
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
    			$(e).tooltip();
    		}
    	}, htmlOptions);
    	
    	var chosenOptions = $.extend( {}, {
    	}, chosenOptions);
    	
    	$(this).each(function() {			
			$(this)
				.chosen(chosenOptions)
				.on('chosen:showing_dropdown', function(e, data) {
					$.each(data.chosen.results_data, function(i, x) {
						var opt  = $(data.chosen.form_field).find('option:eq('+x.array_index+')');
						var li   = $(data.chosen.dropdown).find('li[data-option-array-index="'+x.array_index+'"]');

						// Add HTML-Support
						if($(opt).attr(htmlOptions.attr_html)) {
							$(li).html($(opt).attr(htmlOptions.attr_html));							
						} 				

						// Add Tooltip
						if($(opt).attr(htmlOptions.attr_tooltip)) {
							$(li).attr(htmlOptions.attr_tooltip_to, $(opt).attr(htmlOptions.attr_tooltip));
							htmlOptions.init_tooltip($(li));
						}
					});
			});
    	});
    	return this;
	};
}( jQuery ));
