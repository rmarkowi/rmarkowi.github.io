var fadeTime = 2000;
var photoHoldTime = 4000;
var changeStackThresholdW = 1345;
var viewportWidth = $(window).width();
var viewportHeight = $(window).height();

var main = function(){
	setTimeout(nextPhoto, photoHoldTime);
};

var nextPhoto = function(){
	var currentPhoto = $('.active-photo');
	var nextPhoto = $('.active-photo').next();
	
	if(nextPhoto.length < 1){
		nextPhoto = $('.photo').first();
	}
	
	currentPhoto.fadeOut(fadeTime).removeClass('active-photo');
	nextPhoto.fadeIn(fadeTime).addClass('active-photo');
	setTimeout(this.nextPhoto, photoHoldTime);
};

$(document).ready(main);