const tiles = document.querySelectorAll(".tile");

const originalColor = "#303030";

const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#800080",
    "#FFA500",
    "#FFC0CB",
    "#00FFFF",
    "#FF00FF",
    "#000080",
    "#008080"
];
  

tiles.forEach((tile) => {
  tile.addEventListener('mouseover', () => setColor(tile));

  tile.addEventListener('mouseout', () => removeColor(tile));

});


function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}


function removeColor(element) {
    element.style.background = '#303030'
    element.style.boxShadow = '0 0 2px #000'
    element.classList.toggle("remover")
    setInterval(() => {
        element.classList.toggle("remover")
    }, 1000);
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}