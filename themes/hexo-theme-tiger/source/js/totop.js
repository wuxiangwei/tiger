(function($) { 
	// When to show the scroll link
	// higher number = scroll link appears further down the page   
	var upperLimit = 1000;
	
	// Our scroll link element
	var scrollElemTop = $('#totop');
   
	// Scroll to top speed
	var scrollSpeed = 500;
   
	// Show and hide the scroll to top link based on scroll position   
	scrollElemTop.hide();
	$(window).scroll(function () {            
		var scrollTop = $(document).scrollTop();       
		if ( scrollTop > upperLimit ) {
			$(scrollElemTop).stop().fadeTo(300, 1); // fade back in           
		}else{       
			$(scrollElemTop).stop().fadeTo(300, 0); // fade out
			scrollElemTop.hide();
		}
	});
	// Scroll to top animation on click
	$(scrollElemTop).click(function(){
		scrollElemTop.hide();
		$('html, body').animate({scrollTop:0}, scrollSpeed);
	   	return false;
	});
})(jQuery);
