const apiUrl = "https://api.github.com/users/"
const contentEl = document.querySelector(".content")
const inputEl = document.querySelector(".content input");
inputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        getUserData(event.target.value)
        event.target.value = ""
    }
})

async function getUserData(userId) {
    const url = apiUrl+userId;
    const response = await fetch(url);
    const userData = await response.json();
    if(userData.message === "Not Found"){
        createErrorCard('No profile with this username')
    }else{
        createUserCard(userData)
    }

    console.log()
}


function createUserCard(user){

    if(oldCard = document.querySelector(".card")){
        oldCard.remove()
    }else if(oldError = document.querySelector(".errors")){
        oldError.remove()
    }

    const userDivElement = document.createElement('div');

    userDivElement.classList.add("card")
    userDivElement.innerHTML = `
    <div class="avatar">
        <div class="image-background">
            <div class="avatar-image"  style="background-image: url(${user.avatar_url});"></div>
        </div>
    </div>
    <div class="info">
        <h1 class="name">${user.login}</h1>
        <h4 class="bio">${user.bio}</h4>
        <div class="numbers">
            <div class="followers">
                ${user.followers} <span><b>Followers</b></span>
            </div>
            <div class="following">
                ${user.following} <span><b>Following</b></span>
            </div>
            <div class="total-repos">
                ${user.public_repos} <span><b>Repos</b></span>
            </div>
        </div>
        <div class="repos">
            <a href="https://google.com">repo1</a>
            <a href="https://google.com">repo1</a>
            <a href="https://google.com">repo1</a>
            <a href="https://google.com">repo1</a>
            <a href="https://google.com">repo1</a>
        </div>
    </div>
    `

    contentEl.appendChild(userDivElement);

}


function createErrorCard(error){

    if(oldCard = document.querySelector(".card")){
        oldCard.remove()
    }else if(oldError = document.querySelector(".errors")){
        oldError.remove()
    }

    const errorDivElement = document.createElement('div');
    errorDivElement.classList.add("errors")
    errorDivElement.innerHTML = `
    <h1>${error}</h1>
    `;

    contentEl.appendChild(errorDivElement);
}

