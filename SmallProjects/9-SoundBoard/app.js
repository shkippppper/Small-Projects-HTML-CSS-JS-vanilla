const audioC = new Audio("/Sounds/key02.ogg")
const audioD = new Audio("/Sounds/key03.ogg")
const audioE = new Audio("/Sounds/key04.ogg")
const audioF = new Audio("/Sounds/key05.ogg")
const audioG = new Audio("/Sounds/key06.ogg")
const audioA = new Audio("/Sounds/key07.ogg")
const audioB = new Audio("/Sounds/key08.ogg")

const C = document.getElementById("C")
const D = document.getElementById("D")
const E = document.getElementById("E")
const F = document.getElementById("F")
const G = document.getElementById("G")
const A = document.getElementById("A")
const B = document.getElementById("B")


const slider = document.querySelector('.slider-input');
var vol = 0.5;

document.addEventListener("keydown", function(press){
    if (press.key == "c" || press.key == "C"){
        C.click();
    }else if (press.key == "d" || press.key == "D"){
        D.click();
    }else if (press.key == "e" || press.key == "E"){
        E.click();
    }else if (press.key == "f" || press.key == "F"){
        F.click();
    }else if (press.key == "g" || press.key == "G"){
        G.click();
    }else if (press.key == "a" || press.key == "A"){
        A.click();
    }else if (press.key == "b" || press.key == "B"){
        B.click();
    }
})

slider.addEventListener('input', function() {
  const value = this.value;
  vol = value/100;

});


function PlaySound(key){

    if(key.innerHTML === "C"){
        audioC.currentTime = 0;
        audioC.volume = vol;
        audioC.play();
    }else if(key.innerHTML === "D"){
        audioD.currentTime = 0;
        audioD.volume = vol;
        audioD.play();
    }else if(key.innerHTML === "E"){
        audioE.currentTime = 0;
        audioE.volume = vol;
        audioE.play();
    }else if(key.innerHTML === "F"){
        audioF.currentTime = 0;
        audioF.volume = vol;
        audioF.play();
    }else if(key.innerHTML === "G"){
        audioG.currentTime = 0;
        audioG.volume = vol;
        audioG.play();
    }else if(key.innerHTML === "A"){
        audioA.currentTime = 0;
        audioA.volume = vol;
        audioA.play();
    }else if(key.innerHTML === "B"){
        audioB.currentTime = 0;
        audioB.volume = vol;
        audioB.play();
    }

}

