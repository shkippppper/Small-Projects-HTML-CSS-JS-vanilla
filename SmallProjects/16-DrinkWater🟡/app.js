const cups = document.querySelectorAll(".cups");

cups.forEach(cup => {
    cup.addEventListener("click", function(e){
        console.log(e.target)
    })
});