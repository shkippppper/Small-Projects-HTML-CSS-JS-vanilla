const starter = document.querySelector(".starter");
const boxes = document.querySelectorAll(".boxes");
var shown = false;

document.onkeydown = function(e){
    if(!shown){

        starter.classList.add("starter-hide");

        boxes.forEach(box => {
            box.classList.add("boxes-show");
        });

        shown = true;

    }

    boxes[0].children[1].textContent = e.key;    
    boxes[1].children[1].innerHTML = e.keyCode;    
    boxes[2].children[1].innerHTML = e.code;    
    
}

