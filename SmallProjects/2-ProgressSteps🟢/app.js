const parentElement = document.getElementById("container");
const childElements = parentElement.querySelectorAll("h2");
const backButton = document.getElementById("back");
const forwardButton = document.getElementById("forward");
const slider = document.getElementById("slider");

let clickIndex = 1;

function Back(){
    if(clickIndex != 0){

        clickIndex -= 1;
    }

    if(clickIndex != 0){
        forwardButton.classList.add("button-class")
        forwardButton.classList.remove("inactive")
    }else{
        backButton.classList.add("inactive")
        backButton.classList.remove("button-class")
    }

    Fix(clickIndex)
}

function Forward(){

    if(clickIndex != 4){
        
        clickIndex += 1;
    }

    if(clickIndex !=4){

        backButton.classList.add("button-class")
        backButton.classList.remove("inactive")

    }else{

        forwardButton.classList.add("inactive")
        forwardButton.classList.remove("button-class")

    }

    Fix(clickIndex)
}


function FixWidth(clickIndex){
    if(clickIndex == 0){
        childElements[1].classList.remove("panel-active");
        childElements[2].classList.remove("panel-active");
        childElements[3].classList.remove("panel-active");
        childElements[4].classList.remove("panel-active");
    }else if(clickIndex == 1){
        childElements[1].classList.add("panel-active");
        childElements[2].classList.remove("panel-active");
        childElements[3].classList.remove("panel-active");
        childElements[4].classList.remove("panel-active");
    }else if(clickIndex == 2){
        childElements[1].classList.add("panel-active");
        childElements[2].classList.add("panel-active");
        childElements[3].classList.remove("panel-active");
        childElements[4].classList.remove("panel-active");
    }else if(clickIndex == 3){
        childElements[1].classList.add("panel-active");
        childElements[2].classList.add("panel-active");
        childElements[3].classList.add("panel-active");
        childElements[4].classList.remove("panel-active");
    }else if(clickIndex == 4){
        childElements[1].classList.add("panel-active");
        childElements[2].classList.add("panel-active");
        childElements[3].classList.add("panel-active");
        childElements[4].classList.add("panel-active");
    }
    
}

function FixBackground(clickIndex){
    if(clickIndex == 0){
        slider.classList.add("width0")
        slider.classList.remove("width25");
        slider.classList.remove("width50");
        slider.classList.remove("width75");
        slider.classList.remove("width100");
    }else if(clickIndex == 1){
        slider.classList.remove("width0")
        slider.classList.add("width25");
        slider.classList.remove("width50");
        slider.classList.remove("width75");
        slider.classList.remove("width100");
    }else if(clickIndex == 2){
        slider.classList.remove("width0")
        slider.classList.remove("width25");
        slider.classList.add("width50");
        slider.classList.remove("width75");
        slider.classList.remove("width100");
    }else if(clickIndex == 3){
        slider.classList.remove("width0")
        slider.classList.remove("width25");
        slider.classList.remove("width50");
        slider.classList.add("width75");
        slider.classList.remove("width100");
    }else if(clickIndex == 4){
        slider.classList.remove("width0")
        slider.classList.remove("width25");
        slider.classList.remove("width50");
        slider.classList.remove("width75");
        slider.classList.add("width100");
    }
}

function Fix(clickIndex){

    FixWidth(clickIndex);
    FixBackground(clickIndex);

}