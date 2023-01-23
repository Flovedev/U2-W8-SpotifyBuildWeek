function changeNavbarBG() {
    let navbar = document.getElementById("album-navbar")
    let scrollValue = window.scrollY;
    if (scrollValue < 510) {
        navbar.classList.remove("album-navbar-bg")
    } else {
        navbar.classList.add("album-navbar-bg")
    }
}

window.addEventListener("scroll", changeNavbarBG)