const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn.addEventListener("click", () => {
    cards.classList.remove("list")
    cards.classList.add("grid");


});

listBtn.addEventListener("click", () => {
    cards.classList.remove("grid")
    cards.classList.add("list");


});


const navbutton = document.querySelector("#ham-btn");
const navlinks = document.querySelector("#nav-bar");

navbutton.addEventListener("click", () => {
    navbutton.classList.toggle("show");
    navlinks.classList.toggle("show");
});

const year = document.querySelector("#currentyear");

const today = new Date();

year.textContent = today.getFullYear();

document.getElementById("lastModified").innerHTML = "Date Modified:" + document.lastModified;