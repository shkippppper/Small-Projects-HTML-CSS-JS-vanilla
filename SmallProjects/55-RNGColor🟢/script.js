const btn = document.querySelector('button');
const color = document.querySelectorAll('.color');
const hex = document.querySelectorAll(".hex");

btn.addEventListener('click', generateColors);

function generateColors(){
    for (let i = 0; i < color.length; i++){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);

        color[i].style.background = "#" +randomColor;

        color[i].classList.add('fade-in');
        setTimeout(() => color[i].classList.remove('fade-in'), 400);

        hex[i].innerHTML = "#" + randomColor;
    }

}

generateColors();