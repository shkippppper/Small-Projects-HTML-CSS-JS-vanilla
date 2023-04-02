const left = document.querySelector(".mountains")
const right = document.querySelector(".beach")

left.addEventListener("mouseenter", HoverLeft);
right.addEventListener("mouseenter", HoverRight);
left.addEventListener("mouseleave", HoverExit);
right.addEventListener("mouseleave", HoverExit);



function HoverLeft(){

    left.classList.add("hover-left")
    right.classList.remove("hover-right")

}



function HoverRight(){

    left.classList.remove("hover-left")
    right.classList.add("hover-right")

}



function HoverExit(){

    left.classList.remove("hover-left")
    right.classList.remove("hover-right")

}
