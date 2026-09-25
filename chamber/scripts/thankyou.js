const params = new URLSearchParams(window.location.search);

const firstName = params.get("firstName");
const lastName = params.get("lastName");
const title = params.get("title");
const email = params.get("email");
const number = params.get("phone");
const businessName = params.get("businessName");
const memberLevel = params.get("membership");
const description = params.get("description");
const timestamp = params.get("timestamp");


document.querySelector("#displayFirstName").textContent = firstName;
document.querySelector("#displayLastName").textContent = lastName;
document.querySelector("#displayTitle").textContent = title;
document.querySelector("#displayEmail").textContent = email;
document.querySelector("#displayPhone").textContent = number;
document.querySelector("#displayBusinessName").textContent = businessName;
document.querySelector("#displayMembership").textContent = memberLevel;
document.querySelector("#displayDescription").textContent = description;
document.querySelector("#displayTimestamp").textContent = timestamp;

