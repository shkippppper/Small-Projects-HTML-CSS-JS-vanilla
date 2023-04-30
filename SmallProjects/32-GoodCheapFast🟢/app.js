const goodEl = document.querySelector(".good .background");
const cheapEl = document.querySelector(".cheap .background");
const fastEl = document.querySelector(".fast .background");

const backgrounds = [goodEl,cheapEl,fastEl]

backgrounds.forEach(element => {
    element.addEventListener("click", function(){

        element.classList.toggle("purple-background")
        element.childNodes[1].classList.toggle("move")

        if( goodEl.classList.contains("purple-background")&&
            cheapEl.classList.contains("purple-background")&&
            fastEl.classList.contains("purple-background")
        ){
            if(element === goodEl){
                fastEl.classList.toggle("purple-background")
                fastEl.childNodes[1].classList.toggle("move")
            }else if(element === cheapEl){
                goodEl.classList.toggle("purple-background")
                goodEl.childNodes[1].classList.toggle("move")
            }else if(element === fastEl){
                cheapEl.classList.toggle("purple-background")
                cheapEl.childNodes[1].classList.toggle("move")
            }
            
        }

        
        
    })
});
