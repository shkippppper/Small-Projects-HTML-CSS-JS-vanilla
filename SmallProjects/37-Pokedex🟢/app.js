const contentEl = document.querySelector(".content");
const totalPower = document.querySelector(".total-power");
const createBtn = document.querySelector(".create");
const totalPowerEl = document.querySelector(".content p")

const totalPokemon = 1010;

createBtn.addEventListener("click", function(){
    var totalPowerT = 0;
    var contentElElements = document.querySelectorAll(".card");
    contentElElements.forEach(contentElement => {
        contentElement.remove()
    });

    
    totalPower.classList.remove("invisible");


    for (let index = 0; index < 6; index++) {

        const randomNum = Math.floor(Math.random() * totalPokemon) + 1;
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`)
          .then((response) => response.json())
          .then((data) => {

            var pokemonId = data.id;
            var pokemonName = data.name;
            var pokemonType = data.types[0].type.name;
            var pokemonSprite = data.sprites.front_default;
            var pokemonPower = data.stats[0].base_stat;

            createCard(pokemonId,pokemonName,pokemonType,pokemonSprite,pokemonPower)

            totalPowerT += pokemonPower;
            totalPowerEl.innerHTML = "Total Power Points - "+totalPowerT;
          })
          .catch((error) => {
            console.error(error); // Handle any errors that occur during the fetch request
          });

          
    }

})

const pokemonTypes = {
    "normal" : "b7b7a9",
    "fire" : "eb6e4b",
    "water" : "72a6fc",
    "electric" : "f6d660",
    "grass" : "9ed275",
    "ice" : "97d1fd",
    "fighting" : "b57260",
    "poison" : "ac72a7",
    "ground" : "dcc775",
    "flying" : "9fa6fc",
    "psychic" : "ec79a7",
    "bug" : "baaf71",
    "rock" : "bfb57b",
    "dragon" : "7e7cc3",
    "ghost" : "8a7cee",
    "dark" : "836d5d",
    "steel" : "acacbc",
    "fairy" : "e5abef",
}





function createCard(id, name, type, spriteURL, power){

    const myDiv = document.createElement("div");
    myDiv.classList.add("card");
    
    const idDiv = document.createElement("div");
    idDiv.classList.add("id");
    idDiv.innerText = "#"+id;

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image");
    var url = "url('"+ spriteURL +"')"
    imageDiv.style.backgroundImage = url;
    imageDiv.style.backgroundRepeat = "no-repeat"
    imageDiv.style.backgroundSize = "cover"
    imageDiv.style.backgroundPosition = "center"
    imageDiv.style.backgroundColor = "#" + pokemonTypes[type]

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.innerHTML = name;

    const typeDiv = document.createElement("div");
    typeDiv.classList.add("type");
    const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
    typeDiv.innerHTML = "Type - " + typeCapitalized;

    const powerDiv = document.createElement("div");
    powerDiv.classList.add("power");
    powerDiv.innerHTML = "PP - " + power;

    myDiv.appendChild(idDiv);
    myDiv.appendChild(imageDiv);
    myDiv.appendChild(nameDiv);
    myDiv.appendChild(typeDiv);
    myDiv.appendChild(powerDiv);

    contentEl.appendChild(myDiv)


}