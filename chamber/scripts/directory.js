const url = "https://baileyjensen.github.io/wdd231/chamber/data/directory.json";

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

        logo.setAttribute("src", company.imageurl);
        logo.setAttribute("alt", `Logo of ${company.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "340");
        logo.setAttribute("height", "440");

        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(logo);

        cards.appendChild(card);


    });
}

getCompanyData();