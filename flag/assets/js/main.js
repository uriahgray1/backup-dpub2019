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
        "https://hannahguyer.github.io/geo-flags/smiley.html",
        "https://rchprk/geo-graphics/cctv.html",
        "https://Shiyayuan.github.io/geo-graphics/404.html",
        "https://Shiyayuan.github.io/geo-graphics/alien.html",
        "https://Shiyayuan.github.io/geo-graphics/circles.html",
        "https://Shiyayuan.github.io/geo-graphics/cloud.html",
        "https://Shiyayuan.github.io/geo-graphics/credit-card.html",
        "https://Shiyayuan.github.io/geo-graphics/credit-card2.html",
        "https://Shiyayuan.github.io/geo-graphics/diqiu.html",
        "https://Shiyayuan.github.io/geo-graphics/earth-layers.html",
        "https://Shiyayuan.github.io/geo-graphics/earth-surface.html",
        "https://Shiyayuan.github.io/geo-graphics/email-address.html",
        "https://Shiyayuan.github.io/geo-graphics/fingerprint.html",
        "https://Shiyayuan.github.io/geo-graphics/fingerprint2.html",
        "https://Shiyayuan.github.io/geo-graphics/gps-route.html",
        "https://Shiyayuan.github.io/geo-graphics/gps-turn.html",
        "https://Shiyayuan.github.io/geo-graphics/gps.html",
        "https://Shiyayuan.github.io/geo-graphics/hotspot.html",
        "https://Shiyayuan.github.io/geo-graphics/ip.html",
        "https://Shiyayuan.github.io/geo-graphics/metals.html",
        "https://Shiyayuan.github.io/geo-graphics/planet.html",
        "https://Shiyayuan.github.io/geo-graphics/qr-code.html",
        "https://Shiyayuan.github.io/geo-graphics/url.html",
        "https://Shiyayuan.github.io/geo-graphics/water.html",
        "https://Shiyayuan.github.io/geo-graphics/wind-farm.html",
        "https://Shiyayuan.github.io/geo-graphics/yellow-page.html",
        "https://gabbyparish.github.io/geo-graphics/clouds.html",
        "https://gabbyparish.github.io/geo-graphics/cd.html",
        "https://gabbyparish.github.io/geo-graphics/chip.html",
        "https://gabbyparish.github.io/geo-graphics/404-error.html",
        "https://rchprk/geo-graphics/cityscape-animate.html",
        "https://rchprk/geo-graphics/ping.html",
        "https://rchprk/geo-graphics/like.html",
        "https://rchprk/geo-graphics/blurred-circles.html",
        "https://rchprk/geo-graphics/blurred-circles.html",
        "https://rchprk/geo-graphics/blurred-circles.html",
        "https://hannahguyer.github.io/geo-flags/smiley.html",
        "https://hannahguyer.github.io/geo-flags/smiley.html",
        "https://james-highfield.github.io/geo-graphics/triangle.html",
        "https://gabbyparish.github.io/geo-graphics/netflix.html",
        "https://gabbyparish.github.io/geo-graphics/notifs.html",
        "https://gabbyparish.github.io/geo-graphics/big4.html",
        "https://dpub.bailouni.com/geo-graphics/captchas.html",
        "https://uriahgray1.github.io/geo-graphics/gafa.html",
        "https://james-highfield.github.io/geo-graphics/flux.html",
        "https://james-highfield.github.io/geo-graphics/pin.html",
        "https://james-highfield.github.io/geo-graphics/blur.html",
        "https://gabbyparish.github.io/geo-graphics/stamp.html",
        "https://gabbyparish.github.io/geo-graphics/documents.html",
        "https://gabbyparish.github.io/geo-graphics/barcode.html",
        "https://shiyayuan.github.io/geo-graphics/earth-layers.html",
        "https://maryherten.github.io/geo-graphics/barcode",
        "https://maryherten.github.io/geo-graphics/networksniffing",
        "https://maryherten.github.io/geo-graphics/hotspot",
        "ameliaclark.github.io/geo-graphics/elevator.html",
        "https://ameliaclark.github.io/geo-graphics/find-myself.html",
        "https://reginerocero.github.io/pr2-geo-graphics/aroundtheglobe.html",
        "https://naomi-etheridge.github.io/geo-graphics-work/404.html",
        "https://naomi-etheridge.github.io/geo-graphics-work/speaker.html",
        "https://naomi-etheridge.github.io/geo-graphics-work/xeno.html",
        "https://uriahgray1.github.io/geo-graphics/map2.html",
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