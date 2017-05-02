/*
/* Dashboard js
/* ========================= */


/* nav tab
/* ------------------------- */

$(function () {
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

/* toggle - drop down menu
 /* ------------------------- */

$(function () {
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

/* dashboard - show new trip tab
/* ------------------------- */

$(function () {
    $('#btn-new-trip').click(function() {
        $(this).hide();
        $target = $('.nav-tab a[href="#form-new-trip"]');
        $target.click();
        $target.parents().removeClass('hide');
    });
});

$(function () {
    $('.steps .btn-next').click(function() {
        $(this).parents('.step').hide();
        $(this).parents('.step').next().show();
    });
});


/* jQuery - datepicker
/* ------------------------- */

$(function(){
  $("#datepicker").datepicker({dateFormat : 'yy-mm-dd'});
});


/* Modal - close
/* ------------------------- */

$(function(){
  $(".modal-close").click(function() {
      $(this).parents('.modal').hide();
      return false;
  });
});

