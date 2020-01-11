$(document).ready(function() {
    var classes = [
        "g1",
        "g2",
        "g3",
        "g4",
        "g5",
        "g6",
        "g7",
        "g8",
        "g9",
        "g10",
        "g11",
        "g12",
        "g13",
        "g14",
        "g15",
        "g16",
        "g17"
    ];

    var invert = [
        "invert",
        "br",
        "i-1",
        "i1",
        "i2",
        "i3"
    ];

    $(".a").addClass(classes[~~(Math.random() * classes.length)]);
    $(".b").addClass(classes[~~(Math.random() * classes.length)]);
    $(".c").addClass(classes[~~(Math.random() * classes.length)]);
    $(".d").addClass(classes[~~(Math.random() * classes.length)]);
    $(".e").addClass(classes[~~(Math.random() * classes.length)]);
    $(".f").addClass(classes[~~(Math.random() * classes.length)]);
    $(".g").addClass(classes[~~(Math.random() * classes.length)]);
    $(".h").addClass(classes[~~(Math.random() * classes.length)]);
    $(".i").addClass(classes[~~(Math.random() * classes.length)]);

    $(".a").addClass(invert[~~(Math.random() * invert.length)]);
    $(".b").addClass(invert[~~(Math.random() * invert.length)]);
    $(".c").addClass(invert[~~(Math.random() * invert.length)]);
    $(".d").addClass(invert[~~(Math.random() * invert.length)]);
    $(".e").addClass(invert[~~(Math.random() * invert.length)]);
    $(".f").addClass(invert[~~(Math.random() * invert.length)]);
    $(".g").addClass(invert[~~(Math.random() * invert.length)]);
    $(".h").addClass(invert[~~(Math.random() * invert.length)]);
    $(".i").addClass(invert[~~(Math.random() * invert.length)]);


    // setInterval(function() {
    //     loadGraphics()
    // }, 80000);
    //
    // function loadGraphics() {
    //     $('.flag').attr('class', 'flag');
    //     $('.flag').css("display", "none");
    //     $("iframe").each(function() {
    //         $(this).attr('src', 'clean');
    //     });
    //
    //     $(".flag").addClass(classes[~~(Math.random() * classes.length)]);
    //     setTimeout(function() {
    //         $('.flag').css("display", "flex");
    //     }, 1000);
    //
    //     $("iframe").each(function() {
    //         $(this).attr('src', urls[~~(Math.random() * urls.length)]);
    //         var framesrc = $(this).attr("src");
    //          $(".urls").append(framesrc);
    //          var objDiv = document.querySelector(".urls");
    //         objDiv.scrollTop = objDiv.scrollHeight;
    //     });
    //
    // }
});
