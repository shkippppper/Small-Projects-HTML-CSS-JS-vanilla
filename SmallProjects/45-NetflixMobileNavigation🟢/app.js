const mainNavEl = document.querySelector(".main")
const redNavEl = document.querySelector(".red")
const blackNavEl = document.querySelector(".black")

const openNav = document.querySelector(".fa-bars")
const closeNav = document.querySelector(".fa-xmark")

function toggleActive(){
    mainNavEl.classList.toggle("active")
    redNavEl.classList.toggle("active")
    blackNavEl.classList.toggle("active")
}

openNav.addEventListener("click", function(){
    toggleActive()
})

closeNav.addEventListener("click", function(){
    toggleActive()

})
