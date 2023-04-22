const goodLength = 8
var blur = 100
const single = blur/goodLength


const backgroundEl = document.querySelector(".background");
const passInputEl = document.querySelector(".password-input")
passInputEl.addEventListener("input", function(e){
    
    backgroundEl.style.filter = "blur(" + (blur-single*passInputEl.value.length)  + "px)"
    
})

