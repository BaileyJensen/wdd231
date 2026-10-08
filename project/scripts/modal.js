const oneButton = document.querySelector("#oneBtn");
const onePrice = document.querySelector("#oneModal");
const closeOne = document.querySelector("#closeOne");
const twoBtn = document.querySelector("#twoBtn");
const twoPrice = document.querySelector("#twoModal");
const closeTwo = document.querySelector("#closeTwo");
const monthBtn = document.querySelector("#monthBtn");
const monthPrice = document.querySelector("#monthModal");
const closeMonth = document.querySelector("#closeMonthly");


oneButton.addEventListener("click", () => {
    onePrice.showModal();
});

closeOne.addEventListener("click", () => {
    onePrice.close();
});

onePrice.addEventListener("click", (event) => {
    if (event.target === onePrice) {
        onePrice.close();
    }


});

twoBtn.addEventListener("click", () => {
    twoPrice.showModal();
})

closeTwo.addEventListener("click", () => {
    twoPrice.close();
});

twoPrice.addEventListener("click", (event) => {
    if (event.target === twoPrice) {
        twoPrice.close();
    }


});

monthBtn.addEventListener("click", () => {
    monthPrice.showModal();
})

closeMonth.addEventListener("click", () => {
    monthPrice.close();
});

monthPrice.addEventListener("click", (event) => {
    if (event.target === monthPrice) {
        monthPrice.close();
    }
});



document.querySelector("#timestamp").value = new Date();