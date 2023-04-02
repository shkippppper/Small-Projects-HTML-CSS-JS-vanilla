const navbarEl = document.getElementById("navbar")
const navbarAnchors = document.querySelectorAll(".navbar a")


window.addEventListener("scroll", function() {
    const scrolled = window.scrollY;
    console.log(scrolled)
    if(scrolled >=100){
        ChangeToWhite()
    }else{
        ChangeBack()
    }
});

function ChangeBack(){
    navbarEl.classList.remove("override-background")
    navbarEl.classList.remove("override-height")
    navbarAnchors.forEach(anchor => {
        anchor.classList.remove("override-color")

    });
}

function ChangeToWhite(){
    navbarEl.classList.add("override-background")
    navbarEl.classList.add("override-height")
    navbarAnchors.forEach(anchor => {
        anchor.classList.add("override-color")

    });

}