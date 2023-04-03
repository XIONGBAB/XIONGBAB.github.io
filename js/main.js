// import { data } from "./inforamtion.js";
// import $ from "./jquery.min.js";

// -------------------------------------------------------------------------
// information.js export to html
window.addEventListener("load", function () {
    let theNavigationBars = document.querySelectorAll(".topNavLink");
    let linkMainContainer = document.querySelector(".linkMainContainer");
    let listMainContainer = document.querySelector(".listMainContainer");
    let navInvitationCard = document.querySelector(".navInvitationCard");
    let navHomePage = document.querySelector(".navHomePage");
    let listContainer = document.querySelector(".listContainer");
    // navContact click style

    theNavigationBars.forEach(e => {
        e.addEventListener("click", () => {
            e.parentNode.querySelectorAll(".topNavBorder").forEach(sibling => {
                sibling.classList.remove("topNavBorder");
            });
            e.classList.add("topNavBorder");
            linkMainContainer.style.display = "none";
            listMainContainer.style.display = "block";
            navInvitationCard.className = "navHomePage navFontStyle links";
            navHomePage.className = "navHomePage";
        });
    });

    navHomePage.addEventListener("click", function () {
        navHomePage.className = "navHomePage navFontStyle links";
        navInvitationCard.className = "navHomePage";
        linkMainContainer.style.display = "block";
        listMainContainer.style.display = "none";
    });
    navInvitationCard.addEventListener("click", () => {
        if (listContainer.innerHTML === "") {
            theNavigationBars[0].click();
        }
        navHomePage.className = "navHomePage";
        navInvitationCard.className = "navHomePage navFontStyle links";
        linkMainContainer.style.display = "none";
        listMainContainer.style.display = "block";
    });

    // document js-----------------------------------------------
    document.addEventListener("contextmenu", e => {
        e.preventDefault();
    });
    // export js
    // get inforamtion.js name
    (function renderData() {
        let listContainer = document.querySelector(".listContainer");
        let seriesArr = [];
        let clickTopNavLinks = document.querySelectorAll(".clickTopNavLink");
        let parmaValue;

        let clickedLink = null;
        clickTopNavLinks.forEach(link => {
            link.addEventListener("click", function handleClick() {
                if (this !== clickedLink) {
                    listContainer.innerHTML = "";
                    parmaValue = link.getAttribute("data-param");
                    otherFunction(parmaValue);
                    clickedLink = this;
                    this.removeEventListener("click", handleClick);
                    setTimeout(() => {
                        this.addEventListener("click", handleClick);
                    }, 100);
                }
            });
        });

        function otherFunction(value) {
            data.forEach(e => {
                if (e.name == value) {
                    let newData = e.mainInfo
                        .map(m => {
                            return ` <div class="listBox">
                      <div class="listContent">
                        <a href="${m.url}" class="listImg">
                            <img src="${m.src}" alt="" />
                        </a>
                        <div class="listTitle">
                            <span>${m.title1}</span>
                            <div><span>${m.style}</span></div>
                        </div>
                      </div>
                    </div>`;
                        })
                        .join("");
                    listContainer.innerHTML = newData;
                    seriesArr += listContainer.innerHTML;
                }
            });
            listContainer.innerHTML = seriesArr;
            seriesArr = [];
        }
    })();
});

// -------------------------------------------------------------------------
// jquery
$(window).scroll(function () {
    let topY = $(document).scrollTop();
    if (topY >= 600) {
        $(".backTop").css("visibility", "visible ");
        $(".backTop").fadeIn();
    } else {
        $(".backTop").fadeOut();
    }
});
$(".backTop").click(function () {
    $("body,html").stop().animate({
        scrollTop: 0,
    });
});
$(".navContact").click(function () {
    let isNone = $(".navContactStyle").css("display");
    if (isNone == "none") {
        $(".navContactStyle").fadeIn();
    } else {
        $(".navContactStyle").fadeOut();
    }

    setTimeout(() => {
        $(".navContactStyle").fadeOut();
    }, 4000);
});

// -------------------------------------------------------------------------
// images
document.querySelector("#icon-link").href = require("./images/favicon.ico");
document.querySelector(".navLogo img").src = require("./images/navLogo.png");
document.querySelector(".navContactStyle img").src = require("./images/weChat.png");
document.querySelector(".bannerContainer img").src = require("./images/bannerBox.gif");
