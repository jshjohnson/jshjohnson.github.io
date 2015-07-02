(function($, window, document, undefined) {

    'use strict';
    window.App = (function() {
        var app = {};

        var _init = 0;

        app.init = function() {
            if (_init++) {
                return;
            }
            app.general.init();
            app.smoothScroll.init();
            app.backToTop.init();
        };

        return app;
    })();
})(jQuery, window, window.document);



(function($, window, document, app, undefined) {
    
    app.general = (function() {
    	var module = {};

    	module.init = function() {

    		// HTML5 placeholder support
    		$("input, textarea").placeholder();
    		// Target radios / checkboxes
    		$("input[type=radio]").parents('li').addClass('radio');
    		$("input[type=checkbox]").parents('li').addClass('checkbox');
    		// FitVids
    		$(".container").fitVids();
    		// Tweak required labels (Gravity Forms)
    		$(".gform_wrapper .gfield_required").html("(required)");
    		// Sanitise WP content
    		$("p:empty").remove();
    		$(".wp-caption").removeAttr("style");
    		$(".wp-content img, .wp-post-image, .wp-post-thumb").removeAttr("width").removeAttr("height");

    	};
    	return module;
    })();
})(jQuery, window, window.document, window.App);


(function($, window, document, app, undefined) {
    
    app.smoothScroll = (function() {
    	var module = {};

    	module.init = function() {
    		smoothScroll.init({
    			speed: 1000,
    			easing: 'easeInOutCubic',
    			offset: 0,
    			updateURL: false
    		});
    	};
    	return module;
    })();

})(jQuery, window, window.document, window.App);

(function($, window, document, app, undefined) {
    
    app.backToTop = (function() {
    	var module = {};

    	module.init = function() {
    		var $backToTop = $('.back-to-top');

    		var maxWidth = Modernizr.mq('only screen and (max-width: 640px)');
    		var offset = 600;

    		var backToTopController = function() {
    			if (maxWidth === true) {             
	    			if ($(this).scrollTop() > offset) {
	    				$backToTop.addClass('back-to-top--active');
	    			} else {
	    				$backToTop.removeClass('back-to-top--active');
	    			}
    			}
    		}

    		$(window).scroll(function() {
    			backToTopController();
    		});

    		backToTopController();

    	};
    	return module;
    })();
})(jQuery, window, window.document, window.App);

jQuery(document).ready(function() {
    window.App.init();
});