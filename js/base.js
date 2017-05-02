/*
/* Base js
/* ========================= */


/* nav tab
/* ------------------------- */

$(function() {
    $('.nav-tab a').click(function () {
        if ($(this).attr('class') == 'active') {
            return false;
        }
        $('.tab-content').hide().filter(this.hash).fadeIn();

        $('.nav-tab a').attr('class', '');
        $(this).attr('class', 'active');

        return false;
    }).filter(':first').click();
});


/* toggle - mouse click show hide
/* ------------------------- */

$(function() {
    $('.toggle-hover').click(function(e){
        $('.toggle-content').toggleClass('hide');
        $('.popup-wrapper').show();
        e.stopPropagation();
    });

    $('.popup-wrapper').click(function(){
        $('.toggle-content').addClass('hide');
        $(this).hide();
    });

});

/* input - on active hide error message
/* ------------------------- */

$(function() {
    $('.form .input').focus(function() {
        $(this).siblings('.msg-error').hide();
    });
    $('.form .msg-error').click(function() {
        $(this).siblings('.input').focus();
        $(this).hide();
    });
});


/* mid slider
/* ------------------------- */

$(function() {
    var exist = $('.slider-mid').length;
    if (exist) {
        var sliderMid = $('.slider-mid').unslider({
            speed: 500,
            delay: 5000,
            keys: true,
            dots: true
        });

        $('.slider-mid .slider-arrows a').click(function () {
            var fn = this.className.split(' ')[0];
            sliderMid.data('unslider')[fn]();
            return false;
        });
    }
});


/* toggle placeholder & content
/* ------------------------- */

$(function() {
    $('.toggle-holder').click(function() {
        $(this).parent('.holder').hide();
        $(this).parent('.holder').next('.holder-content').show();
    });
});