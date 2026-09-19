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