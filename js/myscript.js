$(document).ready(function() {
    slickHeader();
    slidetoggle_header();
    fancybox();
    headerTop();
    //countDown();
    animate();
    loadJsHome();


});




function loadJsHome() {
    $(window).on('load', function() {
        setTimeout(function() {
            $('.loading').addClass('loaded');
        }, 500);
    });

}

function animate() {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
}

function slickHeader() {
    // -----------------slick----------

    $(".header__banner-slide-photo").slick({
        autoplay: false,

        arrows: false,

        dots: true,

        fade: true,

        slidesToShow: 1,

        draggable: false,

        infinite: true,

        pauseOnHover: false,

        swipe: true,

        touchMove: true,

        speed: 1500,

        autoplaySpeed: 3000,

        useTransform: true,

        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",

        adaptiveHeight: true,

        focusOnSelect: true,

    });
}



function slidetoggle_header() {
    // var link_panel = $('.menu-mobile');

    // link_panel.click(function(){

    // 	$(this).parent().find('.main-menu').slideToggle('active');

    // })
    jQuery(".header__bar-button-mobile a").click(function() {
        jQuery(".header__bar-nav").toggleClass("active");

        jQuery("body").toggleClass("show-scroll");
    });
    jQuery(".header-nav__close").click(function() {
        jQuery(".header__bar-nav").removeClass("active");
    });
    jQuery(document).mouseup(function(e) {
        if (!jQuery(".header__bar-button-mobile a, .header__bar-nav.active").is(e.target) &&
            jQuery(".header__bar-button-mobile a, .header__bar-nav.active").has(e.target).length === 0
        ) {
            jQuery(".header__bar-nav").removeClass("active");
            jQuery("body").removeClass("show-scroll");
        }
    });
}

function fancybox() {
    var gallery_row = jQuery(".gallery__collum");

    gallery_row.each(function() {
        jQuery(this)
            .find(".gallery__photo a")

        .attr("data-fancybox", "images");

        jQuery('[data-fancybox="images"]').fancybox({
            thumbs: {
                showOnStart: true,
            },
        });
    });

    if ($(window).width() > 767.5) {
        var itemclass = "img-overlay";
        $(".p__collum-photo").append('<div class="' + itemclass + '"></div>');
    }
}

function headerTop() {
    var header = $(".header__scroll");
    if (header.length) {
        var offset = header.offset().top;
        header_height = $(".header__top").height();
        containerwidth = $(window).width();
        $(window).scroll(function() {
            if ($(window).scrollTop() > header_height) {
                header.addClass("active");
                $("#header").addClass("hide-top");
            } else {
                header.removeClass("active");
                $("#header").removeClass("hide-top");
            }
        });
    }
}