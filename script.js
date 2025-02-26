let body = document.querySelector("body");
let moon = document.getElementById("moon");
let moon1 = document.getElementById("moon1");
let sun = document.getElementById("sun");
let sun1 = document.getElementById("sun1");
let headerTop = document.getElementById("headerTop")
let firstImg = document.getElementById("firstImg")
let secondImg = document.getElementById("secondImg")
let chevronLeft = document.getElementById("chevronLeft")
let chevronRight = document.getElementById("chevronRight")
let menuBar = document.getElementById("menu-bar")
let menuBarOpen = document.getElementById("menu_bar")
let closeMenu = document.getElementById("closeMenu")



moon.onclick = function(){
    body.classList.toggle("moonLight");
    moon.style.display = "none"
    sun.style.display = "block"
}
sun.onclick = function(){
    body.classList.toggle("moonLight");
    sun.style.display = "none"
    moon.style.display = "block"
}
moon1.onclick = function(){
    body.classList.toggle("moonLight");
    moon1.style.display = "none"
    sun1.style.display = "block"
}
sun1.onclick = function(){
    body.classList.toggle("moonLight");
    sun1.style.display = "none"
    moon1.style.display = "block"
}

chevronRight.onclick = function(){
    firstImg.classList.toggle("goRight")
    secondImg.classList.toggle("goMiddle")
}
chevronLeft.onclick = function(){
    firstImg.classList.toggle("goRight")
    secondImg.classList.toggle("goMiddle")
}
menuBar.onclick = function(){
    menuBarOpen.classList.add("goMiddle")
}
closeMenu.onclick = function(){
    menuBarOpen.classList.remove("goMiddle")
}