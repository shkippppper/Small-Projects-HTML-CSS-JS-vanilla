var opened = false;
const inputField = document.querySelector("input")
const button = document.querySelector("button")


function Handle(){
    if(opened){
        opened = false;
        inputField.classList.remove("open")
        button.classList.remove("search-open")

    }else{
        opened = true;
        inputField.classList.add("open")
        button.classList.add("search-open")
        inputField.focus();


    }

}