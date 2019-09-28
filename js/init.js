//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "11 Sep 2019 00:00:00",
				format: "on"
	},
			
	function() {
		// callback function
	});

});	