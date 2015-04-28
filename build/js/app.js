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
}

function detectmob() { 
	if( navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPad/i)
	|| navigator.userAgent.match(/iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	){
		$("#viewport, #footer, .footer-bar").width('125%');
		$(".logo").css({top:'-290px', left: '-85px'});
		removeParallax();
	}
	else {
	fullHeight();
	}
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	var isWindowsPhone = ua.indexOf("mobile") > -1;
	var isWindowsTablet = ua.indexOf("dssfs") > -1;
	if(isWindowsPhone || isAndroid || isWindowsTablet) {
		$("#viewport, #footer, .footer-bar").width('125%');
		$(".logo").css({top:'-290px', left: '-85px'});
		removeParallax();
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




function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function MathRound(number) {
    return Math.round(number * 100) / 100;
}

function roundtwo(crtlname) {

    var ctrlval = 0.00;

    if (isNumber(document.getElementById(crtlname).value.replace(/[^\d\.\-\ ]/g, ''))) {
        ctrlval = parseFloat(document.getElementById(crtlname).value.replace(/[^\d\.\-\ ]/g, ''))
    }


    document.getElementById(crtlname).value = ctrlval.toFixed(2);
}

function roundzero(crtlname) {
    var ctrlval = 0.00;

    if (isNumber(document.getElementById(crtlname).value.replace(/[^\d\.\-\ ]/g, ''))) {
        ctrlval = parseFloat(document.getElementById(crtlname).value.replace(/[^\d\.\-\ ]/g, ''));
    }


    document.getElementById(crtlname).value = ctrlval.toFixed(0);

}

function CalcTotals(inno) {
    var ctrlval = 0.00;


    if (isNumber(document.getElementById('repCars_txtWeekdays_' + inno).value)) {

        ctrlval = parseFloat(document.getElementById("repCars_txtWeekdays_" + inno).value);
    }

    ctrlval = ctrlval.toFixed(0);

    document.getElementById('repCars_txtWeekdays_' + inno).value = ctrlval


    var ctrlval = 0.00;


    if (isNumber(document.getElementById('repCars_txtWeekend1_' + inno).value)) {

        ctrlval = parseFloat(document.getElementById("repCars_txtWeekend1_" + inno).value);
    }

    ctrlval = ctrlval.toFixed(0);

    document.getElementById('repCars_txtWeekend1_' + inno).value = ctrlval


    var ctrlval = 0.00;


    if (isNumber(document.getElementById('repCars_txtWeekend2_' + inno).value)) {

        ctrlval = parseFloat(document.getElementById("repCars_txtWeekend2_" + inno).value);
    }

    ctrlval = ctrlval.toFixed(0);

    document.getElementById('repCars_txtWeekend2_' + inno).value = ctrlval



    var ctrlvalqty = document.getElementById('repCars_txtWeekdays_' + inno).value
    var ctrlPoints = document.getElementById('repCars_lblPointsWeekdays_' + inno).value;

    document.getElementById('repCars_lblTotalWeekdays_' + inno).value = ctrlvalqty * ctrlPoints

    var ctrlvalqty = document.getElementById('repCars_txtWeekend1_' + inno).value
    var ctrlPoints = document.getElementById('repCars_lblPointsWeekends1_' + inno).value;

    document.getElementById('repCars_lblTotalWeekends1_' + inno).value = ctrlvalqty * ctrlPoints

    var ctrlvalqty = document.getElementById('repCars_txtWeekend2_' + inno).value
    var ctrlPoints = document.getElementById('repCars_lblPointsWeekends2_' + inno).value;

    document.getElementById('repCars_lblTotalWeekends2_' + inno).value = ctrlvalqty * ctrlPoints


    var txtTotal = 0

    $(".calcpoints").each(function (index, value) {
        var val = value.value;
        val = val.replace(",", ".");

        if (val == '') { val = 0 }
        if (isNumber(val)) {

            txtTotal = MathRound(parseFloat(txtTotal) + parseFloat(val));
        }
    });


    document.getElementById('cmdCars').style.display = 'normal'

    if (txtTotal < 1) {
        document.getElementById('cmdCars').style.display = 'none'
    }

    if (txtTotal <= 1000 && txtTotal > 0) {
        document.getElementById('cmdCars').innerHTML = 'Tier 1';
        document.getElementById('cmdCars').innerText = 'Tier 1'
        document.getElementById('cmdCars').innerContent = 'Tier 1'
    }

    if (txtTotal <= 3000 && txtTotal > 1001) {
        document.getElementById('cmdCars').innerHTML = 'Tier 2';
        document.getElementById('cmdCars').innerText = 'Tier 2'
        document.getElementById('cmdCars').innerContent = 'Tier 2'
    }

    if (txtTotal > 3000 ) {
        document.getElementById('cmdCars').innerHTML = 'Tier 3';
        document.getElementById('cmdCars').innerText = 'Tier 3'
        document.getElementById('cmdCars').innerContent = 'Tier 3'
    }


    document.getElementById('lblPointsTotal').innerHTML = txtTotal.toFixed(0);




}