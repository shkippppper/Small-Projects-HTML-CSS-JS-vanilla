const speedInputEl = document.querySelector(".content p input"); 
const textEl = document.querySelector(".content h1");
let text = textEl.innerHTML;
let myArray = text.split("");
textEl.innerHTML = myArray[0];
let i = 1;
let speed = 1;
let intervalId;

speedInputEl.addEventListener("input", function(){
    speed = parseInt(this.value);
    clearInterval(intervalId);
    intervalId = setInterval(updateText, 1000/(speed*2));
});

function updateText() {
    var textElCurrent = document.querySelector(".content h1");

    if(textElCurrent.innerHTML.length !== text.length){
        textEl.innerHTML += myArray[i];
        i++;
    }else{
        textEl.innerHTML = myArray[0];
        i++;
    }

    if(i === text.length){
        i=0;
    }
}


intervalId = setInterval(updateText, 1000/(speed*2));