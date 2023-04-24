const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbersLetters = "0123456789";
const symbolsLetters = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";


const generatorEl = document.querySelector(".content .generate");
const copyEl = document.querySelector(".copy");
const uppercaseBool = document.querySelector(".include-uppercase input")
const lowercaseBool = document.querySelector(".include-lowercase input")
const numbersBool = document.querySelector(".include-numbers input")
const symbolsBool = document.querySelector(".include-symbols input")
const passwordLength = document.querySelector(".pw-length input")


generatorEl.addEventListener("click", function(){
    generatePassword(uppercaseBool.checked,
                    lowercaseBool.checked,
                    numbersBool.checked,
                    symbolsBool.checked)
    
});
copyEl.addEventListener("click", copyToClipboard);



function generatePassword(uppercase, lowercase, numbers, symbols){

    let allSymbols = ""
    let password = ""
    if(uppercase){allSymbols+=uppercaseLetters}
    if(lowercase){allSymbols+=lowercaseLetters}
    if(numbers){allSymbols+=numbersLetters}
    if(symbols){allSymbols+=symbolsLetters}

    for (let index = 0; index < passwordLength.value; index++) {
        let symbolIndex = Math.floor(Math.random() * allSymbols.length)
        password += allSymbols[symbolIndex]
    }

    let passwordEl = document.getElementById("password")
    passwordEl.innerHTML = password
}






function copyToClipboard(){

    let passwordEl = document.getElementById("password")
    let password = passwordEl.innerText
    if(!password){return}

    const textarea = document.createElement('textarea')

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()

    alert("Password Copied To Clipboard!")

    
}