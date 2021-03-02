function w3_open() {
    adjustNavbar()
    document.getElementById("navbar").style.display = "block";
    document.getElementById("open-nav").style.opacity = "0";
}

function w3_close() {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("main").style.width = "100%";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("open-nav").style.opacity = "100%";
}

function adjustNavbar() {
    if (media.matches) {
        document.getElementById("navbar").style.width = "100%";
    } else {
        document.getElementById("main").style.width = strOppNavbarWidth;
        document.getElementById("navbar").style.width = strNavbarwidth;
        document.getElementById("main").style.marginLeft = strNavbarwidth;
    }
}

var navbarWidth = 25;
var strNavbarwidth = navbarWidth.toString() + "%";
var strOppNavbarWidth = (100 - navbarWidth).toString() + "%";

var media = window.matchMedia("(max-width: 950px)");
media.addListener(adjustNavbar);
