/**
 * Main JS file for Liner
 */

/* highlight.js init */
hljs.initHighlightingOnLoad();



/* globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
        $("#nav-drawer").click(function(){
            $('#wrapper').toggleClass("drawer-open");
        })
    });
	
	$(document).scroll(function(){
		if((document.documentElement.scrollTop || document.body.scrollTop) > 30){
			$('.site-head').addClass('site-head-fixed');
		}else{
			$('.site-head').removeClass('site-head-fixed');
		}	
    })
}(jQuery));