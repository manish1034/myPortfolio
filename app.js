const hamburger = document.querySelector("#hamburger")
const hLinks = document.querySelectorAll("#hLink")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
// const mylogo = document.querySelector("#moon1")
const body = document.querySelector("body")

hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("opacity-1")
    hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
})

moon.addEventListener("click", () => {
    body.classList.toggle("dark")
    if (hamburger.classList.toggle("bg-white")) {
        moon.src = "./img/light.png" 
        
    } else
        moon.src = "./img/night.jpg"
        
})

