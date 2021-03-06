# navbar.coffee
# TODO: rename vars

navbarOpen = ->
    adjustNavbar()
    document.getElementById("navbar").style.display = "block"
    document.getElementById("open-nav-icon").style.opacity = "0"

navbarClose = ->
    document.getElementById("navbar").style.display = "none"
    document.getElementById("open-nav").style.display = "flex"
    document.getElementById("open-nav-icon").style.opacity = "100%"

closeNavOnMobile = ->
    if media.matches
        navbarClose()

adjustNavbar = ->
    if media.matches
        document.getElementById("navbar").style.width = "100%"
    else
        document.getElementById("navbar").style.width = strNavbarwidth

navbarWidth = 25
strNavbarwidth = "#{navbarWidth}%"

listener = ->
        adjustNavbar()
        navbarClose()

media = window.matchMedia("(max-width: 1024px)")
media.addListener(listener)
