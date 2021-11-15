$(function () {
    $('.all_box').hover(function () {
        $('#rota').toggleClass('rota_box');
        $('#rota').removeClass('rota_box2');
        $('.content_box').stop().slideDown(500);
        $('.logo img').prop('src', './images/upload/transparent.png');
        $('.back').css('display', 'block');
    }, function () {
        $('#rota').toggleClass("rota_box2");
        $('#rota').removeClass("rota_box");
        $('.content_box').stop().slideUp(500);
        $('.logo img').prop('src', './images/upload/wedding.png');
    });
    $('#back').click(function () {
        $('.content_box').stop().slideUp(500);
    });
    $('.logo').click(function () {
        $('.container_img').show();
        $('.style_box').hide();
        $('#main span').html('更多');
    });
    // click btn
    function hide_box(class_name) {
        $('.container_img').hide();
        $(class_name).removeClass('hide_box').siblings().addClass('hide_box');
        $('.style_box').css('display', 'block');
    };
    $('#sx').click(function () {
        hide_box(".style_sx");
        $('#main span').html('森系');
    });
    $('#qs').click(function () {
        hide_box(".style_qs");
        $('#main span').html('轻奢');
    });
    $('#hb').click(function () {
        hide_box(".style_hb");
        $('#main span').html('韩版');
    });
    $('#zs').click(function () {
        hide_box(".style_zs");
        $('#main span').html('中式');
    });
    $('#dh').click(function () {
        hide_box(".style_dh");
        $('#main span').html('动画');
    });
    // // back top
    $(window).scroll(function () {
        var topY = $(document).scrollTop();
        if (topY >= 600) {
            $('.back_top').fadeIn();
        } else {
            $('.back_top').fadeOut();
        }
    })
    $('.back_top').click(function () {
        $('body,html').stop().animate({
            scrollTop: 0
        })
    });

});
window.addEventListener('load', function () {
    // rotation chart
    var wrap = document.querySelector('.wrap');
    var ul = wrap.children[0];
    var ul2 = wrap.children[1];
    var w = wrap.offsetWidth;
    var index = 0;
    var timer = setInterval(function () {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 18000);
    ul.addEventListener('transitionend', function () {
        if (index >= 3) {
            index = 0;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        };
        ul2.querySelector('.active').classList.remove('active');
        ul2.children[index].classList.add('active');
    });
    // 开启/关闭触摸滑动
    // var startX = 0;
    // var moveX = 0;
    // var flag = false;
    // ul.addEventListener('touchstart', function (e) {
    //     startX = e.targetTouches[0].pageX;
    //     clearInterval(timer);
    // });
    // ul.addEventListener('touchmove', function (e) {
    //     moveX = e.targetTouches[0].pageX - startX;
    //     var translatex = -index * w + moveX;
    //     ul.style.transition = 'none';
    //     ul.style.transform = 'translateX(' + translatex + 'px)';
    //     flag = true;
    //     e.preventDefault();
    // });
    // ul.addEventListener('touchend', function (e) {
    //     clearInterval(timer);
    //     if (flag) {
    //         if (Math.abs(moveX) > 50) {
    //             if (moveX > 0) {
    //                 index--;
    //             } else {
    //                 index++;
    //             }
    //             var translatex = -index * w;
    //             ul.style.transition = 'all .5s';
    //             ul.style.transform = 'translateX(' + translatex + 'px)';
    //         } else {
    //             var translatex = -index * w;
    //             ul.style.transition = 'all .5s';
    //             ul.style.transform = 'translateX(' + translatex + 'px)';
    //         }
    //     }
    //     clearInterval(timer);
    //     timer = setInterval(function () {
    //         index++;
    //         var translatex = -index * w;
    //         ul.style.transition = 'all .5s';
    //         ul.style.transform = 'translateX(' + translatex + 'px)';
    //     }, 18000);
    // });
});
