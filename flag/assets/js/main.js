$(document).ready(function(){
    var classes =
    [
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
    "https://uriahgray1.github.io/geo-graphics/cloud-dots.html",
    "https://uriahgray1.github.io/geo-graphics/green.html",
    "https://uriahgray1.github.io/geo-graphics/checkers.html",
    "https://uriahgray1.github.io/geo-graphics/address.html",
    "https://uriahgray1.github.io/geo-graphics/world.html",
    "https://uriahgray1.github.io/geo-graphics/iphone.html",
    "https://uriahgray1.github.io/geo-graphics/user.html"
    ]

    $(".flag").addClass(classes[~~(Math.random()*classes.length)]);

    $("iframe").each(function(){
        $(this).attr('src',urls[~~(Math.random()*urls.length)]); 
    });

   setInterval(function() {
    cache_clear()
   }, 3000);

   function cache_clear() {
  	window.location.reload(true);
	}
});