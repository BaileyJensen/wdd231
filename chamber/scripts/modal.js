const npButton = document.querySelector("#npButton");
const npMembership = document.querySelector("#npModal");
const closeNp = document.querySelector("#closeNp");
const bronzeBtn = document.querySelector("#bronzeButton");
const bMembership = document.querySelector("#bronzeModal");
const closeB = document.querySelector("#closeB");
const silverBtn = document.querySelector("#silverButton");
const sMembership = document.querySelector("#silverModal");
const closeS = document.querySelector("#closeS");
const goldBtn = document.querySelector("#goldButton");
const gMembership = document.querySelector("#goldModal");
const closeG = document.querySelector("#closeG");

npButton.addEventListener("click", () => {
    npMembership.showModal();
});

closeNp.addEventListener("click", () => {
    npMembership.close();
});

npMembership.addEventListener("click", (event) => {
    if (event.target === npMembership) {
        npMembership.close();
    }


});

bronzeBtn.addEventListener("click", () => {
    bMembership.showModal();
})

closeB.addEventListener("click", () => {
    bMembership.close();
});

bMembership.addEventListener("click", (event) => {
    if (event.target === bMembership) {
        bMembership.close();
    }


});

silverBtn.addEventListener("click", () => {
    sMembership.showModal();
})

closeS.addEventListener("click", () => {
    sMembership.close();
});

sMembership.addEventListener("click", (event) => {
    if (event.target === sMembership) {
        sMembership.close();
    }


});

goldBtn.addEventListener("click", () => {
    gMembership.showModal();
})

closeG.addEventListener("click", () => {
    gMembership.close();
});

gMembership.addEventListener("click", (event) => {
    if (event.target === gMembership) {
        gMembership.close();
    }


});

document.querySelector("#timestamp").value = new Date();