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
        "https://uriahgray1.github.io/gg-example/geo-graphics/cloud-dots.html",
        "https://hannahguyer.github.io/geo-graphics/ip.html",
        "https://rochelleoh.github.io/geo-graphics/circles.html",
        "https://taylahsinead.github.io/geo-graphics/checkers-type.html",
        "https://uriahgray1.github.io/gg-example/geo-graphics/world.html",
        "https://uriahgray1.github.io/gg-example/geo-graphics/iphone.html",
        "https://uriahgray1.github.io/gg-example/geo-graphics/user.html",
        "https://uriahgray1.github.io/gg-example/geo-graphics/green.html",
        "https://uriahgray1.github.io/gg-example/geo-graphics/blue.html",
        "https://uriahgray1.github.io/gg-example/geo-graphics/chip.html",
        "https://uriahgray1.github.io/gg-example/geo-graphics/terra-tv.html",
        "https://tessstavely.github.io/geo-graphics/ip.html",
        "https://ferguseaton.github.io/geo-graphics/ip.html",
        "https://tessstavely.github.io/geo-graphics/checkers.html",
        "https://tessstavely.github.io/geo-graphics/checkers.html",
        "https://clazmcg.github.io/geo-graphics/checkers-type",
        "https://james-highfield.github.io/geo-graphics/circles.html"

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
        });

    }
});