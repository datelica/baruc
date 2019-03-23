(function($) {
    "use strict";




    // Home Slider start

    var homeslides = $(".home-slider");

    homeslides.owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        items: 1,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: false,
        animateOut: 'slideOutDown',
        animateIn: 'slideInDown',
        smartSpeed: 1000,
    });

    var mhs = $(".single_slide_item h1"),
        hdes = $(".single_slide_item p"),
        hmbtn = $(".single_slide_item .hero_btns");


    homeslides.on("translate.owl.carousel", function(event) {
        mhs.removeClass("animated fadeInDownBig");
        hdes.removeClass("animated fadeInRight");
        hmbtn.removeClass("animated fadeInUpBig");
    });


    homeslides.on("translated.owl.carousel", function(event) {
        mhs.addClass("animated fadeInDownBig");
        hdes.addClass("animated fadeInRight");
        hmbtn.addClass("animated fadeInUpBig");
    });

    // Home Slider end

    // Sticky Nav js Start

    var stickymenu = $(".header_bottom, .bottom_to_top");

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 120) {
            stickymenu.addClass("sticky");
        } else {
            stickymenu.removeClass("sticky");
        }
    });

    // Sticky Nav js End



    // Smooth scrolling start
    var scrollLink = $(".scroll");

    scrollLink.on('click', function(e) {
        e.preventDefault();
        $("body,html").animate({
            scrollTop: $(this.hash).offset().top
        }, 500, );
    });

    // Active link switching
    $(window).on('scroll', function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 150;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass("active").end().parent().siblings().removeClass("active");
            }
        })
    });
    // Smooth scrolling End

    //    mobile menu
    $(".mobile_menu_btn").click(function() {
        $(".mobile_menu_area").toggleClass('show');
    });
    $(".mobile_menu ul li a").click(function() {
        $(".mobile_menu_area").removeClass('show');
    });
    //    mobile menu





}(jQuery));

