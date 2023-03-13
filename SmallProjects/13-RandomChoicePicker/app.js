const content = document.querySelector("body");
const input = document.querySelector("textarea");
const tags = document.querySelector(".tags");

input.focus();


input.addEventListener('input', function(event) {
    
    var newText = input.value.split(",");

    newText.forEach(text => {
        if(!CheckIfAlreadyCreated()){
            var mySpan = document.createElement('span');
            mySpan.textContent = text;
            tags.appendChild(mySpan);
        }
    });
});


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        //fun
    }
});

function CheckIfAlreadyCreated(){
    
}
