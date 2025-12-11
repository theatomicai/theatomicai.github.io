/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var href = $anchor.attr('href');
        
        // Only do smooth scroll if it's an anchor link on the same page
        if (href && href.indexOf('#') === 0 && href.length > 1) {
            var target = $(href);
            if (target.length) {
                $('html, body').stop().animate({
                    scrollTop: (target.offset().top - 50)
                }, 1250, 'easeInOutExpo');
                event.preventDefault();
            }
        }
        // If it's not an anchor link (e.g., /projects), let the browser handle it normally
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation - only on pages with hero header
    if ($('body').hasClass('has-hero-header')) {
        $('#mainNav').affix({
            offset: {
                top: 100
            }
        });
    } else {
        // For pages without hero header, always show navbar with white background
        $('#mainNav').addClass('affix');
    }

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
