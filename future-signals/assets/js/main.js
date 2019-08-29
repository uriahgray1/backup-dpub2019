$(document).ready(function() {
   
	// This will add a class .large to any research item that is clicked
    $('.research-item').click(function() {
        $(this).toggleClass('large');
    });

    // This will add the class .active to any nav item that is clicked. 
    // It will also remove any .active class to any other nav item
    $(".nav-item").click(function() {
        $('.nav-item').removeClass('active');
        $(this).addClass("active");
    });

    // This variable will be called later, it hides all research items
    var hideAll = function() {
        $('.research-item').addClass('hide');
    }

    // This .btn-all will reveal all 
    // .research-items by removing .hide from all the divs
    $('.btn-all').click(function() {
        $('.research-item').removeClass('hide');
    });

    // This is an example of a button being clicked. 
    // First it runs the above variable and hides everything
    // Then it finds any div .research-item with .car class and 
    // removes the .hide class
    
    $('.btn-car').click(function() {
        hideAll();
        $('.car').removeClass('hide');
    });

    $('.btn-kinect').click(function() {
        hideAll();
        $('.kinect').removeClass('hide');
    });

    $('.btn-tracking').click(function() {
        hideAll();
        $('.tracking').removeClass('hide');
    });

    // Repeat same pattern for other buttons here



});