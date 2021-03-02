// navbar.js

/**
 * Opens the navbar
 */
function w3_open() {
    adjustNavbar();
    document.getElementById("navbar").style.display         = "block";
    document.getElementById("open-nav-icon").style.opacity  = "0"
}

/**
 * Closes the navbar
 */
function w3_close() {
    document.getElementById("navbar").style.display         = "none";
    document.getElementById("open-nav").style.display       = "flex";
    document.getElementById("open-nav-icon").style.opacity  = "100%"
    document.getElementById("main").style.width             = "100%";
    document.getElementById("main").style.marginLeft        = "0";
}

/**
 * Adjusts suitable navbar size
 * Is called whenever the navbar is opened or the screen size is changed from "mobile" to "desktop"
 */
function adjustNavbar() {
    if (media.matches) {
        document.getElementById("navbar").style.width = "100%";
    } else {
        document.getElementById("navbar").style.width       = strNavbarwidth;
        document.getElementById("main").style.width         = strOppNavbarWidth;
        document.getElementById("main").style.marginLeft    = strNavbarwidth;
    }
}

// navbar width
var navbarWidth         = 25,
    strNavbarwidth      = navbarWidth.toString() + "%",
    strOppNavbarWidth   = (100 - navbarWidth).toString() + "%";

// change of screen size detection -> "mobile" / "desktop"
var media = window.matchMedia("(max-width: 1024px)");
media.addListener(function() {
    adjustNavbar();
    w3_close();
});
