const visitMessage = document.querySelector("#visitMessage");
const lastVisit = localStorage.getItem("lastVisit");

const currentVisit = Date.now();

if (lastVisit === null) {
    visitMessage.textContent = "Welcome! We're glad you are here.";
} else {

    const timeDifference = currentVisit - lastVisit;

    if (timeDifference < 86400000) {
        visitMessage.textContent = "Back so soon! Awesome!"
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        visitMessage.textContent = `You last visited ${days} days ago.`;
    }
}



localStorage.setItem("lastVisit", currentVisit);



