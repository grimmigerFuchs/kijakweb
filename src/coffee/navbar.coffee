# navbar.coffee
# TODO: rename vars

# Opens navbar
navbarOpen = ->
    adjustNavbar()
    document.getElementById("navbar").style.display = "block"
    document.getElementById("open-nav-icon").style.opacity = "0"

# Closes navbar
navbarClose = ->
    document.getElementById("navbar").style.display = "none"
    document.getElementById("open-nav").style.display = "flex"
    document.getElementById("open-nav-icon").style.opacity = "100%"

# Close navbar if on mobile
closeNavOnMobile = ->
    if media.matches
        navbarClose()

# Adjusts navbar sizing
adjustNavbar = ->
    if media.matches
        document.getElementById("navbar").style.width = "100%"
    else
        document.getElementById("navbar").style.width = strNavbarwidth

navbarWidth = 25
strNavbarwidth = "#{navbarWidth}%"

media = window.matchMedia("(max-width: 1024px)")
media.addListener(->
    adjustNavbar()
    navbarClose()
)
