$(function () {
    $('.all_box').hover(function () {
        $('#rota').toggleClass('rota_box');
        $('#rota').removeClass('rota_box2');
        $('.content_box').stop().slideDown(500)
    }, function () {
        $('#rota').toggleClass("rota_box2")
        $('#rota').removeClass("rota_box")
        $('.content_box').stop().slideUp(500);
    });
    $('.header').click(function () {
        $('.content_box').stop().slideUp(500);
    });
})
