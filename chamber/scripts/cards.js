const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn.addEventListener("click", () => {
    cards.classList.remove("list")
    cards.classList.add("grid");


});

listBtn.addEventListener("click", () => {
    cards.classList.remove("grid")
    cards.classList.remove("default")
    cards.classList.add("list");


});


