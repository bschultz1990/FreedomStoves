const mobilenav = document.querySelector(".mobile-nav");
const navbar = document.querySelector(".navbar");
const navitem = document.querySelector(".nav-item")

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    mobilenav.classList.toggle("mobile-active");
    navbar.classList.toggle("nav-bar-fixed")
});
const navimage = document.querySelector("#nav-image");

const navImgCheckFunction = function navImageCheck() {
    if (window.innerWidth < 991) {
        navimage.src = "media/sitelogo-small.png";
    } else navimage.src = "media/sitelogo-full.png";
};

window.addEventListener("load", navImgCheckFunction);

window.addEventListener("resize", navImgCheckFunction);

