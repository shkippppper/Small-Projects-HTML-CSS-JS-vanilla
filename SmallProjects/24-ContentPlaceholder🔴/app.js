//  

// Lorem ipsum dolor sit amet

// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae.


const mainImage = document.querySelector(".content .image");
const mainText = document.querySelector(".content h1");
const underText = document.querySelector(".content h2");
const underImage = document.querySelector(".personal");
const nameText = document.querySelector(".details h3");
const dateText = document.querySelector(".details h4");

setTimeout(() => {
    GetData();
}, 3000);


function GetData(){
    mainImage.style.backgroundImage = 'url("./Gate.jpg")';
    mainText.innerHTML = "Lorem ipsum dolor sit amet";
    underText.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae"
    underImage.style.backgroundImage = 'url("./Bird.jpg")';
    nameText.innerHTML = "John Doe";
    dateText.innerHTML = "Oct 08, 2020";

    mainImage.classList.add("back");
    underImage.classList.add("back");

    mainImage.classList.remove("animated-bg");
    mainText.classList.remove("animated-bg");
    underText.classList.remove("animated-bg");
    underImage.classList.remove("animated-bg");
    nameText.classList.remove("animated-bg");
    dateText.classList.remove("animated-bg");

}