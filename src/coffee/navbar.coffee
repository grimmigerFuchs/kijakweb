# navbar.coffee
# TODO: rename vars

# Functions ------------------------------ #

# Opens navbar
navbarOpen = ->
    adjustNavbar()
    navbar.style.display = "block"

# Closes navbar
navbarClose = ->
    navbar.style.display = "none"

# Close navbar if on mobile
closeNavOnMobile = ->
    if media.matches
        navbarClose()

# Adjusts navbar sizing
adjustNavbar = ->
    if media.matches
        navbar.style.width = "100%"
    else
        navbar.style.width = strNavbarwidth

# ---------------------------------------- #

# Variables ------------------------------ #

# Elements
navbar = document.getElementById("navbar")
    
# Navbar style
navbarWidth = 25
strNavbarwidth = "#{navbarWidth}%"

# Media query
media = window.matchMedia("(max-width: 1024px)")
media.addListener(->
    adjustNavbar()
    navbarOpen()
)

# ---------------------------------------- #
