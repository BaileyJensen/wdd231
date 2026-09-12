const url = "data/members.json";

const cards = document.querySelector('#cards');

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}



const displayCompanies = (companies) => {

    companies.forEach(company => {

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


        cards.appendChild(card);


    });
}

getCompanyData();