$(function() {

    let navigation = $("#navigation");
    let infoblock = $("#infoblock");
    let infoblockH = infoblock.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load", function() {

        scrollPos = $(this).scrollTop();

        if( scrollPos > infoblockH ) {
            navigation.addClass("fixed")
        } else {
            navigation.removeClass("fixed")
        }

    });
   
});

$('.scrollto a').on('click', function() {

    let href = $(this).attr('href');


    $('html, body').animate({
        scrollTop: $(href).offset().top
        
    }, {
        duration: 500,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});



let nav = $("#nav");
let navToggle = $("#navToggle");

navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show")

    });


