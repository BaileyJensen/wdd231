import { places } from "../data/places.mjs";

const Icards = document.querySelector("#iCards");

const displayPlaces = (places) => {

    places.forEach(place => {

        let card = document.createElement("section");
        let name = document.createElement("h2");
        let figure = document.createElement("figure");
        let image = document.createElement("img");
        let address = document.createElement("address");
        let description = document.createElement("p");
        let button = document.createElement("button");


        name.textContent = `${place.name}`;
        address.innerHTML = `<strong>Address: </strong> ${place.address}`;
        description.innerHTML = ` ${place.description}`
        button.textContent = "Learn More";

        image.setAttribute("src", place.image);
        image.setAttribute("alt", `Image of ${place.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "200");
        image.setAttribute("height", "200");



        figure.appendChild(image);
        card.appendChild(figure);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);



        Icards.appendChild(card);


    });
};

displayPlaces(places);