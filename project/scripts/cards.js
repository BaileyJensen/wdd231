import { videos } from "../data/videos.mjs";


const displayVideos = (videos) => {

    videos.forEach(video => {

        let card = document.createElement("section");
        let name = document.createElement("h2");
        let thumbnail = document.createElement("img");
        let likes = document.createElement("p");
        let views = document.createElement("p");
        let url = document.createElement("a");
        let fav = document.createElement("button");

        name.textContent = `${video.name}`;
        likes.innerHTML = `<strong>Likes: </strong> ${video.likes.toLocaleString()}`;
        views.innerHTML = `<strong>Views:</strong> ${video.views.toLocaleString()}`;
        fav.textContent = "🤎 Save Video";
        fav.classList.add("fav");

        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (favorites.includes(video.id)) {
            fav.textContent = "✅ Saved!";
        }

        fav.addEventListener("click", () => {


            if (!favorites.includes(video.id)) {
                favorites.push(video.id);
                localStorage.setItem("favorites", JSON.stringify(favorites));
                fav.textContent = "✅ Saved!";
            }
        });


        thumbnail.setAttribute("src", video.thumbnail);
        thumbnail.setAttribute("alt", `Thumbnail of ${video.name}`);
        thumbnail.setAttribute("loading", "lazy");
        thumbnail.setAttribute("width", "200");
        thumbnail.setAttribute("height", "auto");

        url.setAttribute("href", video.url);
        url.textContent = " ▶ Watch Video";

        card.appendChild(thumbnail);
        card.appendChild(name);
        card.appendChild(views);
        card.appendChild(likes);
        card.appendChild(url);
        card.appendChild(fav);


        cards.appendChild(card);


    });
}

displayVideos(videos);
export { displayVideos };