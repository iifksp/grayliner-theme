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
		
		/* archive index */
		var titleIdx = $('.post-content h2');
		if(titleIdx.length > 5){
			var anchor;
			var indexBox = '<div class="archive-index"><ul>';
			for(var i = 0; i < titleIdx.length; i++){
				if(titleIdx.eq(i).attr('id')){
					anchor = titleIdx.eq(i).attr('id');
				}else{
					anchor = "archive-title-index-" + i
					titleIdx.eq(i).attr('id').attr('id', anchor);
				}

				indexBox += '<li id="nav-' + anchor + '"><a href="#' + anchor + '">' + titleIdx.eq(i).html().trim() + '</a></li>';
			}
			indexBox += '</ul></div>';
			$('.post-content').prepend(indexBox);
			$('.archive-index li a').on('click', function(){
				var $this = $(this);
				$(document).scrollTop($($this.attr('href')).offset().top - 65);
				
				//$('html, body').animate({
				//	scrollTop: $($this.attr('href')).offset().top - 65
				//}, 1000);
				
				return false;
			});
			
			var curTit;
			var preTit = titleIdx.eq(0);
			$('#nav-' + preTit.attr('id')).addClass('active');
			
			$(document).on('scroll', function(){
				
				titleIdx.each(function(){
					var $this = $(this);
					if($(document).scrollTop() > $this.offset().top - 300){
						curTit = $this;
					}
					
				});
				
				$('#nav-' + preTit.attr('id')).removeClass('active');
				$('#nav-' + curTit.attr('id')).addClass('active');
				preTit = curTit;
			});
			
			
		}
    });
	
	$(".backtop .lnk").on("click", function(){
		$(document).scrollTop(0);
		return false;
	});
	
	$(document).on('scroll', function(){
		if((document.documentElement.scrollTop || document.body.scrollTop) > 30){
			$('.site-head').addClass('site-head-fixed');
		}else{
			$('.site-head').removeClass('site-head-fixed');
		}
		
		if((document.documentElement.scrollTop || document.body.scrollTop) > 400){
			$('.backtop').fadeIn(300);
		}else{
			$('.backtop').fadeOut(300);
		}
    })
	
	
	
}(jQuery));

(function ($) {
	var images = document.querySelectorAll('.kg-gallery-image img');
	images.forEach(function (image) {
		var container = image.closest('.kg-gallery-image');
		var width = image.attributes.width.value;
		var height = image.attributes.height.value;
		var ratio = width / height;
		container.style.flex = ratio + ' 1 0%';
	})
}(jQuery));