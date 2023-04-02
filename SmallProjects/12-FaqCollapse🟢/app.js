const questions = document.querySelectorAll(".question");
const dropDownButtons = document.querySelectorAll(".question button"); 


dropDownButtons.forEach(button => {
    button.addEventListener("click", function() {

        if(this.parentElement.children[2] === this){
            this.parentElement.children[2].classList.remove("button-show");
            this.parentElement.classList.remove("question-show");

        }else{
            this.parentElement.children[2].classList.add("button-show");
            this.parentElement.classList.add("question-show");
        }   


      });
});