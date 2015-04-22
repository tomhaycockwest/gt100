// Custom JS Application Code

// If using JSLint for syntax debugging, include the following
/*global $, console, alert, App*/

// var imageIndex = 0;
// var imagesArray = [
//     "home-bmw.jpg",
//     "home-merc.jpg",
//     "home-car.jpg"
// ];

// function changeBackground(){
//     var index = imageIndex++ % imagesArray.length;
//     // $("#intro").css("background","url('assets/img/"+imagesArray[index] +"')50% 0 fixed");      


// 	$('.slider').fadeTo('slow', 0, function()
// 	{
// 	    $(this).css("background","url('assets/img/"+imagesArray[index] +"')50% 0 no-repeat");
// 	}).fadeTo('slow', 1);
// }

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 10;

    if(y_scroll_pos > scroll_pos_test) {
        $('.navbar-brand > img').attr("src","assets/img/nav-logo-small.png");
        // $('.nav > li:first').removeClass('col-xs-2');

        $('.first-nav').removeClass('margin');
        $('.navbar').addClass('black');
    } else {
        $('.navbar-brand > img').attr("src","assets/img/nav-logo.png");
        // $('.nav > li:first').addClass('col-xs-2');
        $('.first-nav').addClass('margin');
        $('.navbar').removeClass('black');
    }
});

function removeParallax() {
	if( navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPad/i)
	|| navigator.userAgent.match(/iPod/i)
	){
		$('.parallax').addClass('remove-parallax');
	}
}

function fullHeight() {
	var windowHeight = $( window ).height();
	$('.intro-home').css({height:windowHeight+'px'});
	console.log(windowHeight);
}

function detectmob() { 
	if( navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPad/i)
	|| navigator.userAgent.match(/iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i)
	){
		$("#viewport, #footer, .footer-bar").width('125%');
		$(".logo").css({top:'-290px', left: '-85px'});
	console.log('mobile');
		removeParallax();
	}
	else {
	console.log('desktop');
	fullHeight();
	}
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
		detectmob();

	}

};


