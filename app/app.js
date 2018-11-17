"use strict";
(function (win, doc, $) {
    
    
    $(win).on('scroll', function () {
        parallax();
    })
     function parallax () {
        var winScrollTop = $(win).scrollTop();
        $('.parallax--bg').css('background-position', `center ${winScrollTop * .3}px`);

        var parallazAmount = `${winScrollTop * 0.1 + 25}%`;

        $('.parallax--box').css({
            'top': `-${parallazAmount}`,
            'transform': `translateY(${parallazAmount})`
        })
    }

})(window, document, jQuery)