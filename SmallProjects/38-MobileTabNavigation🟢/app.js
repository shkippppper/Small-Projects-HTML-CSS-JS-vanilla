const content = {
    0 : "./Home.jpg",
    1 : "./Work.jpg",
    2 : "./Blog.jpg",
    3 : "./AboutUs.jpg"
}

const card = document.querySelector(".card");

const pages = document.querySelectorAll("nav ul li")

pages.forEach(page => {
    page.addEventListener("click", function(e){
        let link = content[Array.from(pages).indexOf(page)]
        card.style.backgroundImage = "url("+ link +")" 
        
        pages.forEach(pg => {
            pg.classList.remove("active")
            
        });
        page.classList.add("active")
        
    })


});