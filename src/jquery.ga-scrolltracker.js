
(function($){
   $.fn.inScreen = function() {
	  var elem = $(this);
	  var docViewTop = $(window).scrollTop();
	  var docViewBottom = docViewTop + $(window).height();

	  var elemTop = $(elem).offset().top;
	  var elemBottom = elemTop + $(elem).height();

	  var res = ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	
	  return res;
   }; 
})(jQuery);

	
var gaScrollTracker = {
	callBackTime: 100,
	arrTracked : [],
	timer : 0,
	track: function () {
		
		$(window).scroll(function() {
			
			if (gaScrollTracker.timer) {
				clearTimeout(gaScrollTracker.timer);
			}
			
			gaScrollTracker.timer = setTimeout(gaScrollTracker.runTracker, gaScrollTracker.callBackTime);
				
		});
	},
	runTracker : function(){
		
		// Get all elements with data-track-attributes and loop over them.
		$("[data-track]").each(function(index) {
		
		  // is the element already tracked?
		  if($.inArray(index, gaScrollTracker.arrTracked) == -1 && $(this).inScreen())
		  {
			// log
			//console.log('Tracked: ' + $(this).data('track'));
			
			// add to array
			gaScrollTracker.arrTracked.push(index);
			gaScrollTracker.trackElement($(this).data('track'));
			
		  }
		});
	}, 
	trackElement : function(strLabel){
		var p = document.location.pathname;
		if(typeof _gaq != 'undefined')
			_gaq.push(['_trackEvent', 'ScollTrack', strLabel, p, 0, true]);
			
	}
}