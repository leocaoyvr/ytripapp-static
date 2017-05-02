/*
/* login js
/* ========================= */

/* modal - sign in/up
/* ------------------------- */
$(function () {

    $('.link-signin').click(function () {
        $('.modal-signinup').fadeIn('fast');
        $('.signup').hide();
        $('.signin').fadeIn('fast');
        return false;
    });

    $('.link-signup').click(function () {
        $('.modal-signinup').fadeIn('fast');
        $('.signin').hide();
        $('.signup').fadeIn('fast');
        return false;
    });

    $('.modal-content').click(function (event) {
        event.stopImmediatePropagation();
    });

    var closeModal = function() {
        $('.modal-signinup').fadeOut('fast');
        $('.signin').fadeOut('fast');
        $('.signup').fadeOut('fast');
    }

    $('.modal-signinup').click(function () {
        closeModal();
    });

    $("#formSignup").submit(function (event) {
        event.preventDefault();
        $('#formSignup .msg-error').addClass('hide');

        $.ajax({
            type: "POST",
            url: $('#formSignup').attr('action'),
            data: $("#formSignup").serialize(),
            success: function (data) {
                if (data.success) {
                    closeModal();
                }
                else {
                    if (data.errors) {
                        $('#formSignup .msg-error').removeClass('hide');
                    }
                }
            }
        });

        return false;
    });

    $("#formSignin").submit(function (event) {
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: $('#formSignin').attr('action'),
            data: $("#formSignin").serialize(),
            success: function (data) {
                if (data.success) {
                    closeModal();
                }
                else {
                    $('#formSignup .msg-error').removeClass('hide');
                }
            }
        });

        return false;
    });
});





