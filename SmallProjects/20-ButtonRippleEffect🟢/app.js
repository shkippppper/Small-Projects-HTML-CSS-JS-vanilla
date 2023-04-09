const clickable = document.querySelector(".clickable");

clickable.addEventListener("click", function(e){
    CreateRipple(e.pageX, e.pageY);
})


function CreateRipple(pageX, pageY){
    var clickableRect = clickable.getBoundingClientRect();
    var circle = document.createElement("span");
    circle.style.position = "absolute";
    circle.style.left = pageX - clickableRect.left +"px"; 
    circle.style.top = pageY - clickableRect.top +"px";
    circle.classList.add("circle")
    clickable.appendChild(circle);
  
    setTimeout(() => {
      circle.remove()
    }, 450);
  }