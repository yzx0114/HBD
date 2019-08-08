//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "7 aug 2019 00:00:00",
				format: "on"
	},
			
	function() {
		// callback function
	});

});	