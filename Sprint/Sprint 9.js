const menuHome = () => {
    document.getElementById("contentFrame").setAttribute("src","Sprint 4 - home.html")
    document.getElementById("menuHome").style = "color: black; background-color: White"
    document.getElementById("menuJukebox").style = "color: white; background-color: #298eb5"
    document.getElementById("menuGame").style = "color: white; background-color: #298eb5"
}

const menuJukebox = () => {
    document.getElementById("contentFrame").setAttribute("src","Sprint8 - jukebox.html")
    document.getElementById("menuJukebox").style = "color: black; background-color: White"
    document.getElementById("menuHome").style = "color: white; background-color: #298eb5"
    document.getElementById("menuGame").style = "color: white; background-color: #298eb5"
}

const menuGame = () => {
    document.getElementById("contentFrame").setAttribute("src","Sprint 6 - game.html")
    document.getElementById("menuGame").style = "color: black; background-color: White"
    document.getElementById("menuJukebox").style = "color: white; background-color: #298eb5"
    document.getElementById("menuHome").style = "color: white; background-color: #298eb5"
}

