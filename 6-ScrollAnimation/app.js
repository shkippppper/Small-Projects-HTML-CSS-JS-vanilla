const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", Apply)

function Apply(){
    var screenSize = window.innerHeight;
    var screenFifth = screenSize*4/5;

    boxes.forEach(box => {
        const rect = box.getBoundingClientRect();
        if(screenFifth >= rect.top){
            box.classList.add("show")
        }
        else{
            box.classList.remove("show")
        }
    });
}


Apply()

