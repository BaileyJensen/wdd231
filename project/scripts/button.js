import { videos } from "../data/videos.mjs";
import { displayVideos } from "../scripts/cards.js";
import { sortByViews, sortByLikes } from "../scripts/sort.mjs";

const viewsBtn = document.querySelector("#views");
const likesBtn = document.querySelector("#likes");

viewsBtn.addEventListener("click", () => {
    sortByViews(videos);
    cards.innerHTML = "";

    displayVideos(videos);

    cards.classList.remove("likes");
    cards.classList.add("views");


});

likesBtn.addEventListener("click", () => {
    sortByLikes(videos);
    cards.innerHTML = "";

    displayVideos(videos);

    cards.classList.remove("views")
    cards.classList.add("likes");


});