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
        "http://openforpublic.com/dpub/geo-graphics/cap.html",
        "http://openforpublic.com/dpub/geo-graphics/grid.html",
        "http://openforpublic.com/dpub/geo-graphics/grid.html",
        "http://openforpublic.com/dpub/geo-graphics/grid.html",
        "http://openforpublic.com/dpub/geo-graphics/grid-button.html",
        "http://openforpublic.com/dpub/geo-graphics/heat.html",
        "http://nomes-designs.me/dpub/geo-graphics-work/flags/xeno.html",
        "http://nomes-designs.me/dpub/geo-graphics-work/flags/speaker.html",
        "http://nomes-designs.me/dpub/geo-graphics-work/flags/barcode.html",
        "http://nomes-designs.me/dpub/geo-graphics-work/flags/whole.html",
        "http://nomes-designs.me/dpub/geo-graphics-work/flags/URL.html",
        "http://nomes-designs.me/dpub/geo-graphics-work/flags/spot.html",
        "http://nomes-designs.me/dpub/geo-graphics-work/flags/solIII.html",
        "http://nomes-designs.me/dpub/geo-graphics-work/flags/bluetooth.html",
        "https://gabbyparish.com/geo-graphics/http.html",
        "https://gabbyparish.com/geo-graphics/faces.html",
        "https://gabbyparish.com/geo-graphics/clouds.html",
        "https://gabbyparish.com/geo-graphics/location.html",
        "https://gabbyparish.com/geo-graphics/ip.html",
        "https://saigebirrell.com/dpub/geo-graphics/address-email.html",
        "https://saigebirrell.com/dpub/geo-graphics/address-scanning.html",
        "https://saigebirrell.com/dpub/geo-graphics/earth-alien.html",
        "https://saigebirrell.com/dpub/geo-graphics/earth-battery.html",
        "https://saigebirrell.com/dpub/geo-graphics/earth-oceans.html",
        "https://saigebirrell.com/dpub/geo-graphics/earth-rotation.html",
        "http://www.rchprk.com/dpub/geo-graphics/like.html",
        "http://www.rchprk.com/dpub/geo-graphics/number-plate.html",
        "http://www.rchprk.com/dpub/geo-graphics/peek.html",
        "http://www.rchprk.com/dpub/geo-graphics/smiley.html",
        "http://www.rchprk.com/dpub/geo-graphics/command.html",
        "http://www.rchprk.com/dpub/geo-graphics/blurred-circles.html",
        "http://www.rchprk.com/dpub/geo-graphics/cctv.html",
        "http://www.rchprk.com/dpub/geo-graphics/window.html",
        "http://www.rchprk.com/dpub/geo-graphics/scan.html",
        "http://www.rchprk.com/dpub/geo-graphics/outer-movement.html",
        "http://www.rchprk.com/dpub/geo-graphics/satellite.html",
        "http://www.rchprk.com/dpub/geo-graphics/wifi.html",
        "http://www.rchprk.com/dpub/geo-graphics/wifi-logo.html",
        "http://podcasts4creatives.club/dpub/geo-graphics/QRcode",
        "http://podcasts4creatives.club/dpub/geo-graphics/yellowpages",
        "http://podcasts4creatives.club/dpub/geo-graphics/roomba",
        "http://podcasts4creatives.club/dpub/geo-graphics/captcha",
        "http://podcasts4creatives.club/dpub/geo-graphics/captcha",
        "http://podcasts4creatives.club/dpub/geo-graphics/hotspot",
        "http://podcasts4creatives.club/dpub/geo-graphics/barcode",
        "http://podcasts4creatives.club/dpub/geo-graphics/ip",
        "http://clubscene.online/dpub/geo-graphics/cannot-view.html",
        "http://clubscene.online/dpub/geo-graphics/gaia.html",
        "http://clubscene.online/dpub/geo-graphics/grassblock.html",
        "http://clubscene.online/dpub/geo-graphics/seconds.html",
        "http://clubscene.online/dpub/geo-graphics/sphere.html",
        "http://clubscene.online/dpub/geo-graphics/trending.html",
        "http://clubscene.online/dpub/geo-graphics/url.html",
        "http://clubscene.online/dpub/geo-graphics/url.html",
        "http://clubscene.online/dpub/geo-graphics/waves.html",
        "http://clubscene.online/dpub/geo-graphics/weather.html",
        "http://clubscene.online/dpub/geo-graphics/username.html",
        "https://dpub.bailouni.com/geo-graphics/chip.html",
        "https://dpub.bailouni.com/geo-graphics/firewall.html",
        "https://dpub.bailouni.com/geo-graphics/loading.html",
        "https://clazmcg.github.io/dpub/geo-graphics/google",
        "https://clazmcg.github.io/dpub/geo-graphics/torrents",
        "https://clazmcg.github.io/dpub/geo-graphics/social-format",
        "https://clazmcg.github.io/dpub/geo-graphics/screen-dimensions",
        "https://clazmcg.github.io/dpub/geo-graphics/rgb",
        "https://clazmcg.github.io/dpub/geo-graphics/pin",
        "https://clazmcg.github.io/dpub/geo-graphics/ocean",
        "http://lydiagillard.com/dpub/geo-graphics/buffering.html",
        "http://lydiagillard.com/dpub/geo-graphics/onlythreeg.html",
        "http://lydiagillard.com/dpub/geo-graphics/play.html",
        "http://lydiagillard.com/dpub/geo-graphics/qwerty.html",
        "http://lydiagillard.com/dpub/geo-graphics/secure.html",
        "http://lydiagillard.com/dpub/geo-graphics/tapon.html",
        "https://melike-yucel.github.io/geographics/assets/flags/boron.html",
        "https://melike-yucel.github.io/geographics/assets/flags/checkers.html",
        "https://melike-yucel.github.io/geographics/assets/flags/checkers.html",
        "https://melike-yucel.github.io/geographics/assets/flags/ip.html",
        "https://melike-yucel.github.io/geographics/assets/flags/russian.html",
        "https://melike-yucel.github.io/geographics/assets/flags/testcard.html",
        "https://melike-yucel.github.io/geographics/assets/flags/testcard2.html",
        "https://melike-yucel.github.io/geographics/assets/flags/user.html",
        "https://melike-yucel.github.io/geographics/assets/flags/water.html",
        "https://melike-yucel.github.io/geographics/assets/flags/widget1.html",
        "https://melike-yucel.github.io/geographics/assets/flags/heatmap.html",
        "https://melike-yucel.github.io/geographics/assets/flags/globe.html",
        "https://linachan98.github.io/linachan98.github.io/geo-graphics/blur.html",
        "https://linachan98.github.io/linachan98.github.io/geo-graphics/torrent.html",
        "https://linachan98.github.io/linachan98.github.io/geo-graphics/save.html",
        "https://linachan98.github.io/linachan98.github.io/geo-graphics/grey.html",
        "https://linachan98.github.io/linachan98.github.io/geo-graphics/perlin.html",
        "https://linachan98.github.io/linachan98.github.io/geo-graphics/Facebook.html",
        "https://linachan98.github.io/linachan98.github.io/geo-graphics/password.html",
        "https://linachan98.github.io/linachan98.github.io/geo-graphics/Ellen.html",
        "https://linachan98.github.io/linachan98.github.io/geo-graphics/JK.html",
        "https://linachan98.github.io/linachan98.github.io/geo-graphics/passport.html",
        "https://taylahsinead.github.io/geo-graphics/bluetooth.html",
        "https://taylahsinead.github.io/geo-graphics/coordinates.html",
        "https://taylahsinead.github.io/geo-graphics/social-media.html",
        "https://ameliaclark.github.io/dpub/geo-graphics/misty.html",
        "https://ameliaclark.github.io/dpub/geo-graphics/elevator.html",
        "https://ameliaclark.github.io/dpub/geo-graphics/4G.html",
        "https://ameliaclark.github.io/dpub/geo-graphics/heat.html",
        "http://under-represented.xyz/dpub/geo-graphics/ip.html",
        "http://under-represented.xyz/dpub/geo-graphics/passcode.html",
        "http://altx.space/dpub/geo-graphics/ip.html",
        "http://altx.space/dpub/geo-graphics/metro.html",
        "http://altx.space/dpub/geo-graphics/review.html",
        "http://altx.space/dpub/geo-graphics/satellite.html",
        "http://altx.space/dpub/geo-graphics/smiley.html",
        "http://altx.space/dpub/geo-graphics/trafficlight.html",
        "http://oliviawolbers.work/dpub/geo-graphics/error.html",
        "http://oliviawolbers.work/dpub/geo-graphics/google.html",
        "http://oliviawolbers.work/dpub/geo-graphics/ip.html",
        "http://oliviawolbers.work/dpub/geo-graphics/screens.html",
        "http://oliviawolbers.work/dpub/geo-graphics/surveillance.html",
        "http://oliviawolbers.work/dpub/geo-graphics/warning.html",
        "https://sarahjmackey.github.io/geo-graphics/ip.html",
        "https://sarahjmackey.github.io/geo-graphics/lithium.html",
        "https://sarahjmackey.github.io/geo-graphics/specks.html",
        "http://opentoaliens.monster/dpub/geo-graphics/flux.html",
        "http://opentoaliens.monster/dpub/geo-graphics/id.html",
        "http://opentoaliens.monster/dpub/geo-graphics/pin.html",
        "http://opentoaliens.monster/dpub/geo-graphics/fingerprint.html",
        "http://opentoaliens.monster/dpub/geo-graphics/eye.html",
        "http://opentoaliens.monster/dpub/geo-graphics/watchtower.html",
        "http://opentoaliens.monster/dpub/geo-graphics/face.html",
        "http://opentoaliens.monster/dpub/geo-graphics/blue.html",
        "http://opentoaliens.monster/dpub/geo-graphics/blue.html",
        "http://opentoaliens.monster/dpub/geo-graphics/mountains.html",
        "http://opentoaliens.monster/dpub/geo-graphics/save.html",
        "http://opentoaliens.monster/dpub/geo-graphics/home.html",
        "https://shiyayuan.github.io/geo-graphics/404-2.html",
        "https://shiyayuan.github.io/geo-graphics/alien.html",
        "https://shiyayuan.github.io/geo-graphics/circles.html",
        "https://shiyayuan.github.io/geo-graphics/coordinates1.html",
        "https://shiyayuan.github.io/geo-graphics/credit-card.html",
        "https://shiyayuan.github.io/geo-graphics/credit-card2.html",
        "https://shiyayuan.github.io/geo-graphics/diqiu.html",
        "https://shiyayuan.github.io/geo-graphics/diqiu2.html",
        "https://shiyayuan.github.io/geo-graphics/earth-layers.html",
        "https://shiyayuan.github.io/geo-graphics/earth-surface.html",
        "https://shiyayuan.github.io/geo-graphics/email-address.html",
        "https://shiyayuan.github.io/geo-graphics/exchange.html",
        "https://shiyayuan.github.io/geo-graphics/exchange3.html",
        "https://shiyayuan.github.io/geo-graphics/fingerprint2.html",
        "https://shiyayuan.github.io/geo-graphics/gps-route.html",
        "https://shiyayuan.github.io/geo-graphics/gps-turn.html",
        "https://shiyayuan.github.io/geo-graphics/gps.html",
        "https://shiyayuan.github.io/geo-graphics/hotspot.html",
        "https://shiyayuan.github.io/geo-graphics/metals.html",
        "https://shiyayuan.github.io/geo-graphics/planet.html",
        "https://shiyayuan.github.io/geo-graphics/url.html",
        "https://meikingwell.github.io/geoflags/RGB.html",
        "https://meikingwell.github.io/geoflags/bluescreen.html",
        "https://meikingwell.github.io/geoflags/play.html",
        "https://meikingwell.github.io/geoflags/loading.html",
        "https://meikingwell.github.io/geoflags/emojis.html",
        "http://ferguseaton.com/dpub/geo-graphics/circles.html",
        "http://ferguseaton.com/dpub/geo-graphics/wifi.html",
        "http://ferguseaton.com/dpub/geo-graphics/string.html",
        "http://ferguseaton.com/dpub/geo-graphics/chip.html",
        "http://ferguseaton.com/dpub/geo-graphics/chip.html",
        "http://ferguseaton.com/dpub/geo-graphics/chip.html",
        "https://callumdouglas.github.io/geo-graphics/earth4.html",
        "https://callumdouglas.github.io/geo-graphics/earth5.html",
        "https://callumdouglas.github.io/geo-graphics/earth6.html",
        "https://callumdouglas.github.io/geo-graphics/earth7.html",
        "https://callumdouglas.github.io/geo-graphics/earth8.html",
        "https://callumdouglas.github.io/geo-graphics/earth9.html",
        "https://callumdouglas.github.io/geo-graphics/earth10.html",
        "https://callumdouglas.github.io/geo-graphics/user4.html",
        "https://callumdouglas.github.io/geo-graphics/user5.html",
        "http://gradshow2019.show/Geo-graphics/myki-3.html",
        "http://gradshow2019.show/Geo-graphics/qrcode-1.html",
        "http://sarahnbourke.com/scan.html",
        "http://sarahnbourke.com/tfn.html",
        "http://sarahnbourke.com/blur.html",
        "http://qing9.xyz/geo-graphics/6.html",
        "http://tess-stavely.com/geo-graphics/compass.html",
        "http://tess-stavely.com/geo-graphics/earth-layers.html",
        "http://tess-stavely.com/geo-graphics/email.html",
        "http://tess-stavely.com/geo-graphics/wifi.html",
        "http://tess-stavely.com/geo-graphics/debate.html",
        "http://tess-stavely.com/geo-graphics/ip.html",
        "http://tess-stavely.com/geo-graphics/solar-system.html",
        "http://tess-stavely.com/geo-graphics/wifi-address.html",
        "https://yzho364.github.io/geo-graphic/batteries.html",
        "https://yzho364.github.io/geo-graphic/material%20resources%20power%20consumption.html",
        "https://yzho364.github.io/geo-graphic/book-covers.html"

    ]

    $(".flag").addClass(classes[~~(Math.random() * classes.length)]);

    $("iframe").each(function() {
        $(this).attr('src', urls[~~(Math.random() * urls.length)]);
    });

    setInterval(function() {
        loadGraphics()
    }, 6000);

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