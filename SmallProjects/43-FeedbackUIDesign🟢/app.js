const sendEl = document.querySelector(".send");
const optionEls = document.querySelectorAll('.option');
const feedbackEl = document.querySelector(".feedback")
const messageEl = document.querySelector(".message");
const reviewEl = document.querySelector(".message h3 span")
let review = ""


optionEls.forEach(optionEl => {
  optionEl.addEventListener('click', function() {
    optionEls.forEach(optionEl => optionEl.classList.remove('selected'));
    optionEl.classList.add('selected');
  });
});

sendEl.addEventListener("click", function(){
    optionEls.forEach(option => {
        if(option.classList.contains("selected")){
            review = option.innerText
        }
    });

    feedbackEl.classList.add("inactive");
    messageEl.classList.remove("inactive");
    if(review === "Unhappy"){
        reviewEl.style.color = "red";
    }else if(review === "Neutral"){
        reviewEl.style.color = "orange";
    }else{
        reviewEl.style.color = "green";
    }
    reviewEl.innerText = review
    
})  

