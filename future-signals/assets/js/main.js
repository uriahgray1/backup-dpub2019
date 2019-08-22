$(document).ready(function(){
	console.log("hey im ready");
});


$(document).ready(function(){


	var hideAll = function() {
    	$('.research-item').addClass('hide');
  	}

	$(".research-item").click(function(){
		$(this).toggleClass("large");
	});

	$(".btn-tracking").click(function(){
		hideAll();
  		$('.tracking').removeClass('hide');
	});

	$(".btn-car").click(function(){		
		hideAll();
		$('.car').removeClass('hide');
	});	

	$(".btn-kinect").click(function(){		
		hideAll();
		$('.kinect').removeClass('hide');
	});

	$(".btn-echo").click(function(){		
		hideAll();
		$('.echo').removeClass('hide');
	});		

	$(".nav-item").click(function(){
		$('.nav-item').removeClass('active');
  		$(this).addClass("active");
  	});
});