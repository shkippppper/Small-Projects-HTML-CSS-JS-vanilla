const content = document.querySelector(".content");
const image = document.querySelector(".content img");
const counterEl = document.querySelector(".content p span");
var counter = 0;
var liked = 0;
image.addEventListener("click", function(e){

    liked+=1;
    setTimeout(function(){
        liked = 0
    }, 500);
    if(liked >1){
        createHeart(e.pageX, e.pageY)
    }
})

function createHeart(posX, posY){
    liked = 0
    counter +=1
    counterEl.innerHTML = counter;

    var newEl = document.createElement("div");
    newEl.classList.add("heart");
    
    var newChildEl = document.createElement("i");
    newChildEl.classList.add("fa-solid")
    newChildEl.classList.add("fa-heart")
    newChildEl.style.color = "red";
    
    newEl.appendChild(newChildEl);

    newEl.style.position = "absolute";
    newEl.style.left = posX + "px";
    newEl.style.top = posY + "px";

    content.appendChild(newEl);

    setTimeout(() => {
        newEl.remove();
    }, 600);
}


