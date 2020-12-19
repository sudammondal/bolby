$(document).ready(function() {
    // counting ja //
    $('.counting').counterUp({
        delay: 10,
        time: 1000
    });

    // up icon js //
    $('.up_icon a[href^="#"],.main_manu li a[href^="#"],.scroll_down a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 70) {
            $(".up_icon").addClass("up_iconFixd");
        } else {
            $(".up_icon").removeClass("up_iconFixd");
        }
    });


    //=============== latest news ==========//
    $('.slider_main').slick({
        arrows: false,
        autoplay: 1,
        dots: true,
        infinite: true,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    });

    // ========== filtering========== //
    function isoTopActive() {
        // Iso top js
        $('.filtering_item_row').imagesLoaded(function() {
            $(".filtering_item_row").isotope({
                itemSelector: '.filter_items',
                layoutMode: 'fitRows'
            });

            var isOacTive = $('.filter_list').click(function() {
                $(".filter_list").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                $(".filtering_item_row").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        });
    }
    isoTopActive();
    // ========== filtering========== //
    /*---------LIGHT-BOX js-----------*/
    function lightBoxImages() {
        var selectorG = '.icon_link';
        if ($(selectorG).length) {
            var instanceG = $(selectorG).imageLightbox({
                quitOnDocClick: false,
                button: true,
                activity: true,
                overlay: true,
                arrows: true,
                preloadNext: true,
            });
        }
    }
    lightBoxImages();
    /*---------LIGHT-BOX js-----------*/
    /*----------- vedio popup js ------------*/
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
    var soundName;
    var audioElement;

    MagnificPopup
    //======= pop up===== //
    // function videoPopup() {
    //     if ($('.popup-youtube').length) {
    //         $('.popup-youtube').magnificPopup({
    //             type: 'iframe',
    //             gallery: {
    //                 enabled: true
    //             }
    //         });
    //     }
    // }
    // videoPopup();
    // //======= pop up===== //

    // if ($('.progress_bar').length > 0) {
    //     var waypoint = new Waypoint({
    //         element: document.getElementsByClassName('progress_bar'),
    //         handler: function(direction) {

    //             $('.progressbar').each(function() {
    //                 var bar_value = $(this).attr('aria-valuenow') + '%';
    //                 $(this).animate({ width: bar_value }, { easing: 'linear' });
    //             });

    //             this.destroy()
    //         },
    //         offset: '50%'
    //     });
    // }
    // function progressbar() {
    //     $(window).on('scroll', function() {
    //         var windowHeight = $(window).height(),
    //             scrollTop = $(this).scrollTop(),
    //             aboutTop = $('#skill').offset().top,
    //             aboutHeight = $('#skill').outerHeight();
    //         // barfiler
    //         if (scrollTop > (aboutTop + aboutHeight - windowHeight)) {
    //             $('#bar1').barfiller({
    //                 barColor: '#3a3a3a',
    //                 duration: 2000
    //             });
    //             $('#bar2').barfiller({
    //                 barColor: '#3a3a3a',
    //                 duration: 2000
    //             });
    //             $('#bar3').barfiller({
    //                 barColor: '#3a3a3a',
    //                 duration: 2000
    //             });
    //             $('#bar4').barfiller({
    //                 barColor: '#3a3a3a',
    //                 duration: 2000
    //             });


    //         };
    //     });


    // }
    // progressbar();
    // window.onscroll = function() { myFunction() };

    // function myFunction() {
    //     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    //     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //     var scrolled = (winScroll / height) * 100;
    //     document.getElementById("myBar").style.width = scrolled + "%";
    // }



});

try {
    jQuery('#bt-ourskill').appear(function() {
        jQuery('.bt-skillholder,.jgguhh,.btskilto').each(function() {
            jQuery(this).find('.bt-skillbar,.btskil,.btskilto').animate({
                width: jQuery(this).attr('data-percent')
            }, 2500);
        });
    });
} catch (err) {}

function counting_data() {
    var counter = $(".counter");
    if (counter.length) {
        counter.counterUp({
            delay: 10,
            time: 1200
        });
    }
}
counting_data();