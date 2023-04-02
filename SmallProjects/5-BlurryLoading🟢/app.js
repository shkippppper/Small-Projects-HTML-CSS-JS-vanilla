var blur = 0; 
const text = document.getElementById("text");
const container = document.getElementById("container");
let intervalId = setInterval(function(){ Run()}, 30)



function Run(){
    if(blur >= 100){
        clearInterval(intervalId);
    }

    text.style.opacity = 1-blur/100;
    let filter = 100-blur;
    container.style.filter = "blur("+ filter +"px)";
    text.innerHTML = blur+"%";
    blur ++;

}