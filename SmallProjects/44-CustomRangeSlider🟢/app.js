const inputEl = document.getElementById("input");
const labelEl = document.getElementById("label")

inputEl.addEventListener("input", function(e){
    labelEl.innerText = inputEl.value

    labelEl.style.transform = "translate(" + inputEl.value*115/100 + "px)"
})

labelEl.style.transform = "translate(" + inputEl.value*115/100 + "px)"
