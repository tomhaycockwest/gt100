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

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 10;

    if(y_scroll_pos > scroll_pos_test) {
        $('.navbar-brand > img').addClass('small', 'col-md-1');
        $('li:first').removeClass('col-md-2');
        $('.navbar').addClass('black');
    } else {
        $('.navbar-brand > img').removeClass('small', 'col-md-1');
        $('li:first').addClass('col-md-2');
        $('.navbar').removeClass('black');
    }
});


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
		setInterval(changeBackground, 3000);

	}

};


