// navbar.js

function w3_open() {
    adjustNavbar()
    document.getElementById("navbar").style.display = "block";
    document.getElementById("open-nav").style.display = "none";
}

function w3_close() {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("open-nav").style.display = "flex";
    document.getElementById("main").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
}

function adjustNavbar() {
    if (media.matches) {
        document.getElementById("navbar").style.width = "100%";
    } else {
        document.getElementById("navbar").style.width = strNavbarwidth;
        document.getElementById("main").style.width = strOppNavbarWidth;
        document.getElementById("main").style.marginLeft = strNavbarwidth;
    }
}

var navbarWidth = 25;
var strNavbarwidth = navbarWidth.toString() + "%";
var strOppNavbarWidth = (100 - navbarWidth).toString() + "%";

var media = window.matchMedia("(max-width: 1024px)");
media.addListener(adjustNavbar);
