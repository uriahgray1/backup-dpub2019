$(document).ready(function() {
    var classes = [
        "bi-hori",
        "bi-vert",
        "bi-vert",
        "bi-vert",
        "tri-hori",
        "tri-vert",
        "tri-vert2",
        "tri-vert3",
        "quart",
        "quart",
        "quart",
        "quart",
        "canton",
        "border",
        "border-circle",
        "bi-canton"
    ];

    var urls = [
        "https://uriahgray1.github.io/geo-graphics/gafa.html",
        "https://uriahgray1.github.io/geo-graphics/checkers-type.html",
        "https://ameliaclark.github.io/geo-graphics/checkers-type.html",
        "http://naomi-etheridge.github.io/geo-graphics/checkers-type.html",
        "https://uriahgray1.github.io/gg-example/geo-graphics/world.html",
        "https://uriahgray1.github.io/gg-example/geo-graphics/chip.html",
        "https://uriahgray1.github.io/gg-example/geo-graphics/iphone.html",
        "http://naomi-etheridge.github.io/geo-graphics/user.html",
        "https://sarahnbourke.github.io/Geographics/IP.html",
        "https://saml2897.github.io/geo-graphics/ip.html",
        "https://melike-yucel.github.io/geo-graphics/user.html",
        "https://melike-yucel.github.io/geo-graphics/ip.html",
        "https://melike-yucel.github.io/geo-graphics/checkers.html",
        "https://saml2897.github.io/geo-graphics/checkers.html",
        "https://uriahgray1.github.io/geo-graphics/hemisphere.html",
        "https://uriahgray1.github.io/geo-graphics/map.html",
        "https://uriahgray1.github.io/geo-graphics/blocks.html",
        "https://nicolechin.github.io/starter-kit-v1.09/checkers.html",
        "https://james-highfield.github.io/geo-graphics/circles.html",
        "https://taylahsinead.github.io/geo-graphics/checkers-type.html",
        "https://gabbyparish.github.io/geo-graphics/checkers-type.html",
        "https://bingyu-zhou.github.io/Geo-graphics/circles.html",
        "https://linachan98.github.io/geo-graphics/circles.html ",
        "https://uriahgray1.github.io/gg-example/geo-graphics/blue.html"
    ]

    $(".flag").addClass(classes[~~(Math.random() * classes.length)]);

    $("iframe").each(function() {
        $(this).attr('src', urls[~~(Math.random() * urls.length)]);
    });

    setInterval(function() {
        loadGraphics()
    }, 5000);

    function loadGraphics() {
        $('.flag').attr('class', 'flag');
        $('.flag').css("display", "none");
        $("iframe").each(function() {
            $(this).attr('src', 'clean');
        });

        $(".flag").addClass(classes[~~(Math.random() * classes.length)]);
        setTimeout(function() {
            $('.flag').css("display", "flex");
        }, 1000);

        $("iframe").each(function() {
            $(this).attr('src', urls[~~(Math.random() * urls.length)]);
            var framesrc = $(this).attr("src");
             $(".urls").append(framesrc);
             var objDiv = document.querySelector(".urls");
            objDiv.scrollTop = objDiv.scrollHeight;
        });

    }
});