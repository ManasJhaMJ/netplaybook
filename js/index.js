document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, false);

jQuery(document).ready(function ($) {

    /**var owl = $('.mainslider');
    owl.owlCarousel({
      margin: 0,
      nav: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 2000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });**/

    $(window).load(function () {
        setTimeout(function () {
            $('.lb_slider .cardsmall').addClass('ani');
            $('.lb_slider .sicard').addClass('ani');
        }, 0);
    });

    $(window).load(function () {
        setTimeout(function () {
            $('.lb_sld_img_player .lb_sld_img_p1').addClass('active');
            setInterval(function () {
                var next = $('.lb_sld_img_player .lb_sld_img_p.active').removeClass('active').next('.lb_sld_img_p');

                if (!next.length) next = next.prevObject.siblings(':first');

                next.addClass('active');
            }, 5000);
        }, 0);
    });


    setInterval(function () {
        $('.lb_walb_img_ball').toggleClass('anim');
        setTimeout(function () {
            $('.lb_walb_img_ball').toggleClass('anim');
        }, 1000);

    }, 2000);


    $(window).load(function () {
        setInterval(function () {
            $('.si, .cardsmall, .sicard').toggleClass('anim');
            setTimeout(function () {
                $('.si, .cardsmall, .sicard').toggleClass('anim');
            }, 1500);

        }, 3000);
    });

    $(window).load(function () {
        setInterval(function () {
            $('.lb_partner_card, .lb_walb_card').toggleClass('anim');
            setTimeout(function () {
                $('.lb_partner_card, .lb_walb_card').toggleClass('anim');
            }, 500);

        }, 1000);
    });

    $('.a_gdid').click(function () {
        $('.flip-box').removeClass('active');
        $(this).parents('.flip-box').addClass('active');
    });

    $(window).on('scroll', function () {
        $(".lb_hiw .hiw_counter li").each(function (i) {
            if (isScrolledIntoView($(this))) {
                var $suS = $(this);
                setTimeout(function () {
                    $suS.addClass('active');
                }, i * 1800);
            }
        });
        $(".step_arrow .sa_img").each(function (i) {
            if (isScrolledIntoView($(this))) {
                var $suS = $(this);
                setTimeout(function () {
                    $suS.addClass('active');
                }, i * 400);
            }
        });
    });

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }


    var celeb = $('.celebslider');
    celeb.owlCarousel({
        nav: true,
        loop: false,
        responsive: {
            0: {
                margin: 40,
                center: true,
                items: 1.5
            },
            767: {
                margin: 20,
                center: false,
                items: 2
            },
            1024: {
                margin: 50,
                items: 3
            }
        }
    });

    $(".a_play").click(function (e) {
        var id = $(this).attr('href');
        $(id).addClass("play");
        $(id).fadeIn();
        $('.play video')[0].play();
        e.preventDefault();
    });

    $(".clb_close").click(function (e) {
        $(".clb_popup").fadeOut();
        $(".clb_popup").removeClass("play");
        $('video').each(function () {
            this.pause();
            this.currentTime = 0;
        });
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.lb_header').addClass('fixed');
        }
        else {
            $('.lb_header').removeClass('fixed');
        };
    });

    $(".lb_header nav ul li a").click(function (e) {
        $(this).parent().addClass('active').siblings().removeClass('active');
        var offset = $($(this).attr('href')).offset().top - 100;
        $('html, body').animate({ scrollTop: offset }, 500);
        e.preventDefault();
    });

    $(".ftr_links a").click(function (e) {
        $(this).parent().addClass('active').siblings().removeClass('active');
        var offset = $($(this).attr('href')).offset().top - 100;
        $('html, body').animate({ scrollTop: offset }, 500);
        e.preventDefault();
    });

    $(".lb_header .lb_logo").click(function (e) {
        $('.lb_header nav ul li').removeClass('active');
        var offset = $($(this).attr('href')).offset().top - 0;
        $('html, body').animate({ scrollTop: offset }, 500);
        e.preventDefault();
    });

    $(".menuburger").click(function () {
        $('.lb_header nav').slideToggle()
    });

    if ($(window).width() < 960) {
        $(".lb_header nav ul li a").click(function () {
            $('.lb_header nav').slideToggle()
        });
    }
    else {
    }


});