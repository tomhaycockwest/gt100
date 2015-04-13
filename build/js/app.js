// Custom JS Application Code

// If using JSLint for syntax debugging, include the following
/*global $, console, alert, App*/

var imageIndex = 0;
var imagesArray = [
    "home-bmw.jpg",
    "home-merc.jpg",
    "home-car.jpg"
];

function changeBackground(){
    var index = imageIndex++ % imagesArray.length;
    // $("#intro").css("background","url('assets/img/"+imagesArray[index] +"')50% 0 fixed");      


	$('#intro').fadeTo('slow', 0, function()
	{
	    $(this).css("background","url('assets/img/"+imagesArray[index] +"')50% 0 no-repeat");
	}).fadeTo('slow', 1);
}


$(function() { 
	App.init();
});

var App = { 

	settings: { 
		name: "The GT100 Club",	
		version: "1.0.0",
		ga: {
			urchin: "UA-XXXXXX-XX",
			url: "yourdomain.com"
		}
	},

	listen: function() { 
		// Application Listeners can be loaded here for easy configuration		
		console.log("Ready and Listening");
	},	

	init: function() {
		// Kick off the listeners
		this.listen();
		// Application has been initalized
		console.log(this.settings.name + "(v" + this.settings.version + ") Started");	
		// setInterval(changeBackground, 3000);

	}

};


