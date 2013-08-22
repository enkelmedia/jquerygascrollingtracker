jQuery - Google Analytics Scolling Tracker
=============

This is a very simple tracker that helps you track if a web page visitor scrolls so an elemen is shown in screen. 

Online demo
-------

Try the online demo here: (http://enkelmedia.github.io/jquerygascrollingtracker/demo/demo.html)

Gettings started
-------

Gettings started is extremly simple, just add a reference to the jquery.ga-scrolltracker.js-file and start the tracking as so:
	
	$(document).ready(function() {
		gaScrollTracker.track();
	});
	

For each element that you want to track, just add a "data-dash" attributed called data-track - set the value to the uniqe label that you want to forward to Google Analytics.

	<h2 data-track="subheader">Sub header</h2>
	
When the visitor scrolls so that this element is visible the script will send a tracking event to GA, like this:

	_gaq.push(['_trackEvent', 'ScollTrack', '%%%data-tracker value goes here%%%%%%', document.location.pathname, '', true]);

### Debugging

If you want to try the script without calling Google Analytics all the time, just override the gaScrollTracker.trackElement()-menthod.

	$(document).ready(function() {
		// override for debugging.
		gaScrollTracker.trackElement = function(strTest){
			alert('Tracked: ' + strTest);
		};
		
		gaScrollTracker.track();
	});


