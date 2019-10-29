$( document ).ready(function() {
    
    var colours = [
    'red', 
    'green',
    'blue',    
    'yellow',
    'purple',];

	$('.fc').each(function() {
    $(this).css('color', colours[Math.floor(Math.random() * colours.length)]);
	});

	$( ".fc" ).mouseover(function() {
  		$(this).css('color', colours[Math.floor(Math.random() * colours.length)]);
  		$('.tc').css('color', colours[Math.floor(Math.random() * colours.length)]);
	});
});