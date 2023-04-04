const clickable = document.querySelector(".clickable");

clickable.addEventListener("click", function(e){
    CreateRipple(e.pageX, e.pageY);
})

function CreateRipple(pageX, pageY){

    var circle = document.createElement("span");
    circle.style.position = "absolute";
    circle.style.left = pageX +"px";
    circle.style.top = pageY +"px";
    circle.classList.add("circle")
    clickable.appendChild(circle);

    setTimeout(() => {
        circle.remove()
        
    }, 5000);
}
