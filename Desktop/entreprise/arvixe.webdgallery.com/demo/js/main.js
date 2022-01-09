(function ($) {
    'use strict';
    // Page Loader Script
    var window_box = $(window),
        document_func = $(document),
        html = $('html'),                               // Html Selector
        body = $('body'),                               // Body Selector
        htmlBody = $(html.selector+','+body.selector),  // Html,Body Selector
        pageScroll = $("a.page-scroll"),                // Page Scroll Selector
        nav = $('nav'),                                 // Header nav height selector
        responsiveMenuClick = $('.navbar-collapse ul li a'),        // Responsive Menu Click
        offsetMainNav = $('.site_header, .site_header_blog'),       // Offsite Menu
        scrollUp = $('.scrollup'),                      // Scroll Up Selector
        home_slider = $(".home_slider"),                // Full Screen Owl Slider
        homeSliderSingle = $('.slingle_home_slider'),   // Full screen Slider Single Item
        slider_home_item = $(''+homeSliderSingle.selector+' > .slider_area_inner > .container > .row > .col-xs-12 > *'),
        homeNormalSlider = $('.home_slider_normal'),    // Normal Owl Slider
        homeSingleNormalSlider = $('.slingle_normal_home_slider'),  // Normal Slider Single Item
        testimonialSlider = $('.testimonial_slider'),   // Testimonial Owl Slider
        testimonialItem = $('.testimonial_item'),       // Testimonial Single Item
        nivoSliderCont = $('#nivoslider'),              // Nevo Slider
        profileWrapContainer = $('#profile_gallery_warp'),          // Portfolio Gallery
        skillBarItem = $('.skillbar'),                  // Skill Bar script
        couterNumber = $('.counter'),                   // Counter Up Script
        youtubeVideo = $('#video_player'),              //Youtube Video Player
        selectPickerSelector = $('.selectpicker');      // Select Style.
    window_box.on('load', function () {
        body.addClass('loaded');
    });
    // PreventDefault a click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    window_box.on('resize', function () {
        if (window_box.width() <= 767) { } else {
            pageScroll.on('click', function (event) {
                var height = nav.height() - 50;
                event.preventDefault();
                htmlBody.animate({
                    scrollTop: $(this.hash).offset().top - height
                }, 1250, 'easeInOutExpo');
            });
        }
    });
    // Highlight the top nav as scrolling occurs
    body.scrollspy({
        target: '.navbar-fixed-top',
        offset: 50
    });
    // Closes the Responsive Menu on Menu Item Click
    responsiveMenuClick.on('click', function () {
        $('.navbar-toggle:visible').click();
    });
    // Offset for Main Navigation
    offsetMainNav.affix({
        offset: {
            top: 100
        }
    });
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        document_func.on('click', pageScroll.selector, function (event) {
            var $anchor = $(this);
            htmlBody.stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    // Header Search Bar
    function arvixeHeaderSearch () {
        $(function () {
            $('a[href="#search_box"]').on('click', function (event) {
                event.preventDefault();
                $('#search_box').addClass('open');
                $('#search_box > form > input[type="search"]').focus();
            });
            $('#search_box, #search_box button.close').on('click keyup', function (event) {
                if (event.target === this || event.target.className === 'close' || event.keyCode === 27) {
                    $(this).removeClass('open');
                }
            });
            $('form').submit(function (event) {
                event.preventDefault();
                return false;
            });
        });
    }
    // Back To Top Script
    function arvixeBacktoTop () {
        window_box.on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                scrollUp.fadeIn();
            } else {
                scrollUp.fadeOut();
            }
        });
        scrollUp.on('click', function () {
            htmlBody.animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    }
    // Fullscreen Home Slider
    function arvixeFullscreenSlider () {
        window_box.on('resizeEnd', function () {
            home_slider.height(window_box.height());
        });
        window_box.on('resize', function () {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                $(this).trigger('resizeEnd');
            }, 300);
        }).trigger("resize");
        var totalItems = homeSliderSingle.length,
            slideItem = (( totalItems == 1 ) ? false : true);
        home_slider.owlCarousel({
            items: 1,
            margin: 0,
            loop: slideItem,
            dots: slideItem,
            nav: slideItem,
            navSpeed: 1300,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: true,
            animateOut: 'fadeOut',
            smartSpeed: 450
        });
        $('.hs_image').hide();
        $(''+home_slider.selector+' '+homeSliderSingle.selector+'').each(function () {
            var itmeImg = $(this).find('.hs_image').attr('src');
            $(this).css({
                backgroundImage: 'url(' + itmeImg + ')'
            });
        });
        home_slider.on('translate.owl.carousel', function () {
            slider_home_item.hide();
        });
        home_slider.on('translated.owl.carousel', function () {
            slider_home_item.show();
        });
    }
    // Home Normal Slider
    function arvixeNormalSlider () {
        var totalItemsNS = homeSingleNormalSlider.length,
            slideItemNS = (( totalItemsNS == 1 ) ? false : true);
        homeNormalSlider.owlCarousel({
            loop: slideItemNS,
            nav: slideItemNS,
            dots: slideItemNS,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplayHoverPause: true,
            navSpeed: 1300,
            autoplaySpeed: 1300,
            items: 1,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            animateOut: 'fadeOut',
            smartSpeed: 450
        });
    }
    // Nivo Slider
    function arvixeNivoSLider () {
        if ($.fn.nivoSlider) {
            nivoSliderCont.nivoSlider({
                effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
                slices: 15, // For slice animations
                boxCols: 8, // For box animations
                boxRows: 4, // For box animations
                animSpeed: 500, // Slide transition speed
                pauseTime: 3000, // How long each slide will show
                startSlide: 0, // Set starting Slide (0 index)
                directionNav: true, // Next & Prev navigation
                controlNav: true, // 1,2,3... navigation
                controlNavThumbs: false, // Use thumbnails for Control Nav
                pauseOnHover: true, // Stop animation while hovering
                manualAdvance: false, // Force manual transitions
                prevText: '<i class="fa fa-angle-left"></i>', // Prev directionNav text
                nextText: '<i class="fa fa-angle-right"></i>', // Next directionNav text
                randomStart: false // Start on a random slide
            });
        }
    }
    //mixitup script
    function arvixeMixitup (){
        if ($.fn.mixItUp) {
            $(function () {
                profileWrapContainer.mixItUp({
                    controls: {
                        enable: true,
                        live: false,
                        toggleFilterButtons: false,
                        toggleLogic: 'or',
                        activeClass: 'active'
                    },
                    layout: {
                        display: 'block',
                        containerClass: '',
                        containerClassFail: 'fail'
                    },
                    load: {
                        filter: 'all'
                    },
                    selectors: {
                        target: '.mix',
                        filter: '.filter'
                    }
                });
            });
        }
    }
    // Portfolio Pop Script
    if ($.fn.magnificPopup) {
        profileWrapContainer.magnificPopup({
            delegate: 'a',
            type: 'image',
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function () {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            closeOnContentClick: true,
            midClick: true,
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });
    }
    // Skill Bar Script
    skillBarItem.each(function () {
        var skilldata = $(this).attr('data-percent');
        $(this).find('.skillbar-bar').animate({
            width: skilldata
        }, {
            duration: 3500,
            easing: 'easeOutCirc'
        });
        $(this).find('.skill-bar-percent').css('marginLeft', '-32px').animate({
            left: skilldata
        }, {
            duration: 3500,
            easing: 'easeOutCirc'
        });
        $(this).find('.counter_second').html(skilldata);
    });
    // CounterUp script
    couterNumber.counterUp({
        delay: 10,
        time: 1000
    });
    // Testimonial Slider
    function arvixeTestimonialSlider () {
        var totalItemsts = testimonialItem.length,
        slideItemTS = (( totalItemsts == 1 ) ? false : true);
    testimonialSlider.owlCarousel({
        loop: slideItemTS,
        nav: false,
        navSpeed: 1300,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        items: 1,
        animateOut: 'fadeOut',
        smartSpeed: 450
    });
    }
    // YouTube video active code
    if ($.fn.mb_YTPlayer) {
        youtubeVideo.mb_YTPlayer();
    }
    // Bootstrap Custom Select
    if ($.fn.selectpicker) {
        selectPickerSelector.selectpicker();
    }
    // WOW Script
    if( $('.wow').length ){
        new WOW().init();
    }
    function arvixeGoogleMap () {
        // LOAD GOOGLE MAP
        var map;
        var latlng = new google.maps.LatLng(37.8136, 144.9631);
        var stylez = [{
            featureType: "all",
            elementType: "all",
            stylers: [{
                saturation: -100
            }]
        }];
        var mapOptions = {
            zoom: 14,
            center: latlng,
            scrollwheel: false,
            scaleControl: false,
            disableDefaultUI: true,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
            }
        };
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var geocoder_map = new google.maps.Geocoder();
        var address = 'Dhaka';
        geocoder_map.geocode({
            'address': address
        }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    icon: 'img/mapt.png',
                    position: map.getCenter()
                });
                window_box.resize(function () {
                    if (window_box.width() <= 569) {
                        map.panBy(0, 0);
                    } else {
                        map.panBy(150, 0);
                    }
                });
                var infowindow = new google.maps.InfoWindow({
                    content: '<h3>' + address + '</h3>',
                });
                infowindow.open(map, marker);
                marker.addListener('click', function () {
                    infowindow.open(map, marker);
                });
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
        var mapType = new google.maps.StyledMapType(stylez, {
            name: "Grayscale"
        });
        map.mapTypes.set('gMap', mapType);
        map.setMapTypeId('gMap');
    }

    // Call Functions if item exists
    arvixeHeaderSearch();
    arvixeBacktoTop();
    arvixeFullscreenSlider();
    arvixeNormalSlider();
    arvixeTestimonialSlider();
    arvixeNivoSLider();
    arvixeMixitup();
    if( $('#map').length ){
        arvixeGoogleMap ();
    }
})(jQuery);