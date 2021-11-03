$(function () {
    $('.all_box').hover(function () {
        $('#rota').toggleClass('rota_box');
        $('#rota').removeClass('rota_box2');
        $('.content_box').stop().slideDown(500);
        $('.logo').stop().fadeOut();
        $('#home').css('display', 'block');
    }, function () {
        $('#rota').toggleClass("rota_box2");
        $('#rota').removeClass("rota_box");
        $('.content_box').stop().slideUp(500);
        $('.logo').stop().fadeIn();
        $('#home').css('display', 'none');
    });
    $('#back').click(function () {
        $('.content_box').stop().slideUp(500);
    });

    // click btn
    function hide_box(class_name) {
        $('.container_img').hide();
        $(class_name).removeClass('hide_box').siblings().addClass('hide_box');
        $('.style_box').css('display', 'block');
    };
    $('#sx').click(function () {
        hide_box(".style_sx");
    });
    $('#qs').click(function () {
        hide_box(".style_qs");
    });
    $('#hb').click(function () {
        hide_box(".style_hb");
    });
    $('#zs').click(function () {
        hide_box(".style_zs");
    });
    $('#dh').click(function () {
        hide_box(".style_dh");
    });

})
