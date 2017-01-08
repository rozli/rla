(function () {
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var fullHeight = function () {
        if (!isMobile.any()) {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function () {
                $('.js-fullheight').css('height', $(window).height());
            });
        }
    };

    // iPad and iPod detection
    var isiPad = function () {
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function () {
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };

    // Main Menu Superfish
    var mainMenu = function () {
        $('#rozli-primary-menu').superfish({
            delay: 0,
            animation: {
                opacity: 'show'
            },
            speed: 'fast',
            cssArrows: true,
            disableHI: true
        });

    };

    var sliderMain = function () {
        $('#rozli-hero .flexslider').flexslider({
            animation: "fade",
            slideshowSpeed: 5000,
            directionNav: true,
            start: function () {
                setTimeout(function () {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            },
            before: function () {
                setTimeout(function () {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            }
        });

        $('#rozli-hero .flexslider .slides > li').css('height', $(window).height());
        $(window).resize(function () {
            $('#rozli-hero .flexslider .slides > li').css('height', $(window).height());
        });
    };

    // Offcanvas and cloning of the main menu
    var offcanvas = function () {

        var $clone = $('#rozli-menu-wrap').clone();

        $clone.attr({
            'id': 'offcanvas-menu'
        });

        $clone.find('> ul').attr({
            'class': '',
            'id': ''
        });

        $('#rozli-page').prepend($clone);

        // click the burger
        $('.js-rozli-nav-toggle').on('click', function () {

            if ($('body').hasClass('rozli-offcanvas')) {
                $('body').removeClass('rozli-offcanvas');
            } else {
                $('body').addClass('rozli-offcanvas');
            }
        });

        $('#offcanvas-menu').css('height', $(window).height());

        $(window).resize(function () {
            var w = $(window);

            $('#offcanvas-menu').css('height', w.height());

            if (w.width() > 769) {
                if ($('body').hasClass('rozli-offcanvas')) {
                    $('body').removeClass('rozli-offcanvas');
                }
            }
        });
    };

    // Click outside of the Mobile Menu
    var mobileMenuOutsideClick = function () {
        $(document).click(function (e) {
            var container = $("#offcanvas-menu, .js-rozli-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('rozli-offcanvas')) {
                    $('body').removeClass('rozli-offcanvas');
                }
            }
        });
    };

    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            el.addClass('fadeInUp animated');
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };

    // Document on load.
    $(function () {
        mainMenu();
        offcanvas();
        mobileMenuOutsideClick();
        contentWayPoint();
        sliderMain();
        fullHeight();
    });

    var initialize = function () {
        contentWayPoint();
        sliderMain();
        fullHeight();
    };

    var initializeZoom = function (elementId) {
        if ($(document).width() > 992) {
            $('#' + elementId).ezPlus({
                zoomType: 'inner',
                scrollZoom: true,
                cursor: 'pointer'
            });
        }
    };

    var initializeGallery = function (elementId) {
        if ($(document).width() > 975) {
            var selector = '#' + elementId;
            $(selector).ezPlus({
                zoomType: 'inner',
                scrollZoom: true,
                cursor: 'pointer',
                gallery: 'gallery_01',
                galleryActiveClass: 'active',
                imageCrossfade: true,
                loadingIcon: '/images/squares.gif'
            });

            //pass the images to Fancybox
            $(selector).bind('click', function (e) {
                var ez = $(selector).data('ezPlus');
                $.fancyboxPlus(ez.getGalleryList());
                return false;
            });
        }
    };

    rozLiJs = {
        isMobile: isMobile,
        mainMenu: mainMenu,
        sliderMain: sliderMain,
        contentWayPoint: contentWayPoint,
        fullHeight: fullHeight,
        mobileMenuOutsideClick: mobileMenuOutsideClick,
        offcanvas: offcanvas,
        initialize: initialize,
        initializeZoom: initializeZoom,
        initializeGallery: initializeGallery
    };
}());