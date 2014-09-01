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
        
		
		$("#site-nav li a").each(function(){
			console.log($(this));
			if($(this).attr('href') == window.location.pathname){
				$(this).parent().addClass('current');
			}
		})

    });
    
}(jQuery));