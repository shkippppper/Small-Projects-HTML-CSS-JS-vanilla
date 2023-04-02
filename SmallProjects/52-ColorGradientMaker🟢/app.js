const colorInputOneEl = document.getElementById("colorOne");
const colorInputTwoEl = document.getElementById("colorTwo");
const generateEl = document.getElementById("generate");
const copyEl = document.getElementById("copy");
const textToCopy = document.getElementById("textToCopy");
const bodyEl = document.querySelector("body");
const buttons = document.querySelectorAll(".arrows button")
const direction = document.querySelector(".arrows");

generateEl.addEventListener("click", Generate);
copyEl.addEventListener("click", Copy);

Start();

function Generate(){
    
    var side = direction.dataset.direction;
    
    if(side === "none"){
        bodyEl.style.backgroundImage = "none";
        bodyEl.style.backgroundColor = colorInputOneEl.value;
        textToCopy.innerText = "background-color: " + colorInputOneEl.value + ";";
    }else{
        var styled = "linear-gradient(" + side + ", " + colorInputOneEl.value + ", " + colorInputTwoEl.value + ")";

        bodyEl.style.backgroundImage = styled;
        textToCopy.innerText = "background-image: " + styled + ";";
    }
    

}

function Copy(){
    navigator.clipboard.writeText(textToCopy.innerText)
    alert("Copied To Clipboard")
}

function Start(){
    colorInputOneEl.value = "#2a519b";
    colorInputTwoEl.value = "#cb1515";
    Generate()
}

function ChangeDirection(){
    direction.dataset.direction = this.value
    buttons.forEach(button => {
        button.classList.remove("active");
    });
    this.classList.add("active")
    
}

buttons.forEach(button => {
    button.addEventListener("click", ChangeDirection);
});