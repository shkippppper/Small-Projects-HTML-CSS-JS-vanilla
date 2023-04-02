var parentNode = document.getElementById("parent");
var children = parentNode.querySelectorAll("li")



children.forEach(child => {
    child.addEventListener("click", function(){
        
        Clicked(child);  
    });
});

function Clicked(e){
    children.forEach(child => {
        child.classList.remove("panel-active")
        e.classList.add("panel-active")
    });
}