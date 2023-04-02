const navbar = document.getElementById("navbar");
const background = document.getElementById("background-white");
const container = document.getElementById("container");
const links = document.getElementById("links");


function Open(){
    navbar.classList.add("navbar-hover");
    background.classList.add("background-white-hover");
    container.classList.add("container-hover");
    links.classList.add("nav-hover");
}

function Close(){
    navbar.classList.remove("navbar-hover");
    background.classList.remove("background-white-hover");
    container.classList.remove("container-hover");
    links.classList.remove("nav-hover");
    
}