const spotlightCards = document.querySelector("#spotlightCards");
const spotlightUrl = "data/members.json";

async function getSpotlights() {
    try {
        const response = await fetch(spotlightUrl);
        const data = await response.json();
        const companies = data.companies;

        const eligibleCompanies = companies.filter(company =>
            company.membership === 2 || company.membership === 3
        );

        eligibleCompanies.sort(() => Math.random() - 0.5);
        const spotlights = eligibleCompanies.slice(0, 2);

        spotlights.forEach(company => {
            let card = document.createElement("section");
            let name = document.createElement("h2");
            let logo = document.createElement("img");
            let phone = document.createElement("p");
            let address = document.createElement("p");
            let website = document.createElement("p");
            let membership = document.createElement("p");

            name.textContent = `${company.name}`;
            address.innerHTML = `<strong>Address: </strong> ${company.address}`;
            phone.innerHTML = `<strong>Phone:</strong> ${company.phone}`;
            website.innerHTML = `<strong>Website:</strong> ${company.website}`

            logo.setAttribute("src", company.image);
            logo.setAttribute("alt", `Logo of ${company.name}`);
            logo.setAttribute("loading", "lazy");
            logo.setAttribute("width", "200");
            logo.setAttribute("height", "200");


            card.appendChild(logo);
            card.appendChild(name);
            card.appendChild(phone);
            card.appendChild(address);
            card.appendChild(website);


            spotlightCards.appendChild(card);
            
        });

        console.log(spotlights);
    } catch (error) {
        console.log(error);
    }
}

getSpotlights();

