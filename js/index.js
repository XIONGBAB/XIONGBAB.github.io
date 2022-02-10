// flexible js -----------------------------------------------------------
(function flexible(window, document) {
    var docEl = document.documentElement;
    var dpr = window.devicePixelRatio || 1;
    setBodyFontSize();
    setRemUnit();
    // adjust body font size
    function setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px';
        } else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize);
        }
    };
    // set 1rem = viewWidth / 10
    function setRemUnit() {
        var rem = docEl.clientWidth / 10;
        docEl.style.fontSize = rem + 'px';
    };
    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit);
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit();
        }
    });
    // detect 0.5px supports
    if (dpr >= 2) {
        var fakeBody = document.createElement('body');
        var testElement = document.createElement('div');
        testElement.style.border = '.5px solid transparent';
        fakeBody.appendChild(testElement);
        docEl.appendChild(fakeBody);
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines');
        };
        docEl.removeChild(fakeBody);
    }
}(window, document));

// jQuery ------------------------------------------------------------
$(function () {
    const loading = setTimeout(function () {
        $('.loading_box').stop().fadeOut();
    }, 5000);
    $(".nav_more>span").click(function () {
        $(".nav_column").stop().slideDown();
        $(".nav_logo>img").stop().fadeOut();
        $(".main_page").stop().fadeIn();
        $(".nav_back").show();
        $(".nav_more>img").stop().css("transform", "rotate(90deg)");
    });
    $(".slideUp").click(function () {
        $(".nav_column").stop().slideUp();
        $(".nav_logo>img").stop().fadeIn();
        $(".main_page").stop().fadeOut();
        $(".nav_more>img").stop().css("transform", "rotate(0deg)");
    });
    $(".main_page").click(function () {
        $(".nav_back").hide();
        $(".nav_column").stop().slideUp();
        $(".nav_logo>img").stop().fadeIn();
        $(".nav_more>img").stop().css("transform", "rotate(0deg)");
        $('.content').show().siblings(".scroll").show();
        $('.nav_more span').html('更多');
        backTop();
    });

    $('#sx').click(function () {
        hide_box("sx");
        $('.nav_more span').html('森系');
        backTop();
    });
    $('#qs').click(function () {
        hide_box("qs");
        $('.nav_more span').html('轻奢');
        backTop();
    });
    $('#hb').click(function () {
        hide_box("hb");
        $('.nav_more span').html('韩版');
        backTop();
    });
    $('#zs').click(function () {
        hide_box("zs");
        $('.nav_more span').html('中式');
        backTop();
    });
    $('#dh').click(function () {
        hide_box("dh");
        $('.nav_more span').html('动画');
        backTop();
    });
    $('#xn').click(function () {
        hide_box("xn");
        $('.nav_more span').html('新年');
        backTop();
    });

    $(window).scroll(function () { // back top 
        var topY = $(document).scrollTop();
        if (topY >= 600) {
            $('.back_top').fadeIn();
        } else {
            $('.back_top').fadeOut();
        }
    })
    $('.back_top').click(function () {
        backTop();
    });

    // function ------------------------------------------------------------
    function hide_box(style_name) {
        $('.content>.img_box').hide().parent().siblings(".scroll").hide();
        $(".nav_column").stop().slideUp();
        $(".nav_logo>img").stop().fadeIn();
        $(".nav_more>img").stop().css("transform", "rotate(0deg)");
        getInfoData(style_name);
    };

    function backTop() {
        $('body,html').stop().animate({
            scrollTop: 0
        });
    };

    function getInfoData(style_name) {
        let rightLink = document.querySelector(".content");
        let seriesArr = [];
        data.forEach(e => {
            if (e.name == style_name) {
                let newData = e.mainInfo.map(m => {
                    return ` <div class="img_box ${e.name}">
                          <a href="${m.url}">
                             <img src="${m.src}" alt="">
                          </a>
                          <span>${m.title1}</span>
                      </div>`;
                }).join("");
                seriesArr += newData;
            }
        });
        rightLink.innerHTML = seriesArr;
    }
});

// rotation chart ---------------------------------------------
window.addEventListener('load', function () {
    var wrap = document.querySelector('.scroll');
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
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
    document.addEventListener("copy", (e) => {
        e.preventDefault();
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

    // link js -----------------------------------------------------
    (function renderData() { // 渲染information 数据到html页面函数
        let rightLink = document.querySelector(".content");
        let seriesArr = [];
        data.forEach(e => {
            let newData = e.mainInfo.map(m => {
                return ` <div class="img_box">
                          <a href="${m.url}">
                             <img src="${m.src}" alt="">
                          </a>
                          <span>${m.title1}</span>
                      </div>`;
            }).join("");
            seriesArr += newData;
        });
        rightLink.innerHTML = seriesArr;
    })();
});