$(document).ready(function(){
	$(".garment-container").mouseover(function(){
		$(this).children('img').addClass("fade");
		$(this).children('button').addClass('visible')
	});

	$(".garment-container").mouseout(function(){
		$(this).children('img').removeClass("fade");
		$(this).children('button').removeClass('visible')
	});

	$(".garment-select-button").click(function(){
		$(".garment-gallery").fadeOut("fast");
		$(".photo-upload").fadeIn("fast");
		$(".nav-2").addClass("active");
	});
	
	$(".file-submit").click(function(){
		$(".photo-upload").fadeOut("fast");
		$(".email").fadeIn("fast");
		$(".nav-3").addClass("active");
	});

	$(".swap-submit").click(function(){
		$(".email").fadeOut("fast");
		$(".thank-u").fadeIn("fast");
	});

	console.log("Hey Brian!");
});
