// jQuery js-----------------------------------------------------

$(function () {
    // 节流阀
    let flag = true;
    $(".nav_wrap>ul>li").click(function () {
        flag = false;
        // console.log($(this).index() - 1);
        var current = $(".links_content").eq($(this).index()).offset().top; // 选中li索引号对应内容区域盒子计算top值
        $("body,html").stop().animate({ // animate有个回调函数
                scrollTop: current
            },
            function () {
                flag = true;
            });
        $(this).css({
            "background": "#ece8e814",
            "border-radius": "1px"
        }).siblings().css({
            "background": "",
            "border-radius": ""
        });
    });
    $(window).scroll(function () {
        if (flag) {
            $(".links_content").each(function (i, ele) {
                if ($(document).scrollTop() > ($(ele).offset().top - 100)) {
                    $(".nav_wrap ul li").eq(i).css({
                        "background": "#ece8e814",
                        "border-radius": "1px"
                    }).siblings().css({
                        "background": "",
                        "border-radius": ""
                    });
                };
            });
        }
    });
    // back top js------------------------------------------------
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

// ----------------------------------------------------------------
window.addEventListener("load", function () {
    // document js-----------------------------------------------
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
    document.addEventListener("copy", (e) => {
        e.preventDefault();
    });
    // right link js -----------------------------------------------------
    (function renderData() { // 渲染information 数据到html页面函数
        let rightLink = document.querySelector(".link_wrap");
        let seriesArr = [];
        data.forEach(e => {
            rightLink.innerHTML = `<div class="links_content">
                                    <div class="title">
                                       <h3 id="${e.id}">${e.title}</h3>
                                       <p>${e.text}</p>                       
                                    </div>
                                   <div class="links">
                                     <ul class="container"></ul>
                                   </div>`;
            let newData = e.mainInfo.map(m => {
                return ` <li id="${m.id}">
                            <a href="${m.url}" class="lks_img">
                                <img src="${m.src}" alt="">
                            </a>
                            <div class="lks_info">
                                <div class="liks_title">
                                    <h5>${m.title1}</h5>
                                    <span>${m.style}</span>
                                    <section class="money_box">
                                       <em>${m.type}</em>
                                       <em>${m.sum}</em>
                                       <em>${m.money}%</em>
                                    </section>
                                </div>
                                <div class="liks_data">
                                    <p>${m.time1}</p>
                                    <i index="1">${m.hot}</i>
                                </div>
                            </div>
                        </li>`;
            }).join("");
            let contentUl = $q(".links>ul");
            contentUl.innerHTML = newData;
            seriesArr += rightLink.innerHTML;
        });
        rightLink.innerHTML = seriesArr;
    })();
    // left nav js-----------------------------------------------
    getLinkSum();

    function getLinkSum() { // 获取链接数量函数
        let spanNumber = $all(".bi-bookmark-heart");
        let navSumResult = data.map(d => {
            return d.mainInfo.length;
        });
        for (let i = 0; i < spanNumber.length; i++) {
            spanNumber[i].innerHTML = "&nbsp" + navSumResult[i];
        };
    };
    // get Data js --------------------------------------------------
    getData(); // 获取热度函数
    function getData() { // 获取热度函数
        let lis = $all(".container li");
        for (let i = 0; i < lis.length; i++) {
            lis[i].addEventListener("click", function () {
                console.log(1);
                let iIndex = this.querySelector(".lks_info .liks_data i");
                let index = parseInt(iIndex.getAttribute("index")); // 获取到当前li 的 index 值
                iIndex.setAttribute("index", index + 1);
                iIndex.innerHTML = index;
                data.forEach(d => {
                    d.mainInfo.forEach(m => {
                        m.hot = index;
                    });
                });
            });
        };
    };

    function getHotData() { // 获取热度数据函数
        let btn = $q(".info>.bi-flag");
        btn.onclick = function () {
            let indexSum = $all(".index_info i");
            let indexSumArr = [];
            for (let i = 0; i < indexSum.length; i++) {
                indexSumArr.push(indexSum[i].getAttribute("index") - 1);
            };
        };
    };

    // date js -------------------------------------------------------
    function getMiniDate() {
        let nowDate = new Date();
        let year = nowDate.getFullYear();
        let month = nowDate.getMonth() + 1; // 因为月份计算机是从0-11
        let day = nowDate.getDate();
        month = (month + "").length > 1 ? "" + month : "0" + month;
        day = (day + "").length > 1 ? "" + day : "0" + day;
        return `${year}年${month}月${day}日`;
    };
    let dateBox = $q(".info_wrap ul li:nth-child(2) i");
    dateBox.innerText = getMiniDate();

    // style cursor js------------------------------------------------
    animationType(); // 标签类型动画函数
    function animationType() { // 标签类型动画函数
        let linkInfos = $all(".lks_info");
        for (let i = 0; i < linkInfos.length; i++) {
            linkInfos[i].addEventListener("mouseover", function () {
                var moneyBoxs = linkInfos[i].querySelectorAll(".money_box em");
                moneyBoxs[0].style.transform = "translateY(-25px)";
                moneyBoxs[1].style.transform = "translateY(-50px)";
                moneyBoxs[2].style.transform = "translateY(-75px)";
            });
            linkInfos[i].addEventListener("mouseleave", function () {
                var moneyBoxs = linkInfos[i].querySelectorAll(".money_box em")
                moneyBoxs[0].style.transform = "translateY(0)";
                moneyBoxs[1].style.transform = "translateY(0)";
                moneyBoxs[2].style.transform = "translateY(0)";
            });
        };
    };
    // background color js----------------------------------------------
    let spanColor = $all(".liks_title>span");
    let color = ["rgb(58, 130, 199)", "rgb(187, 154, 124)", "rgb(73, 197, 117)", "rgb(201, 106, 187)", "rgb(20, 198, 182)", "rgb(165, 202, 188)", "rgb(186, 52, 140)", "rgb(202, 12, 48)"];
    spanColor.forEach(s => {
        s.style.backgroundColor = color[parseInt(Math.random() * color.length)];
    });
    // function tool js-------------------------------------------------
    function $q(className) {
        return document.querySelector(className);
    };

    function $all(className) {
        return document.querySelectorAll(className);
    };
});
