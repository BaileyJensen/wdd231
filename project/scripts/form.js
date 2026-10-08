const form = document.querySelector("form");
const category = document.querySelector("#category");
const categoryMessage = document.querySelector("#categoryMessage");

form.addEventListener("change", async (event) => {

    try {
        const response = await fetch("data/categories.json");
        const data = await response.json();
        const selectedCategory = category.value;
        const selected = data.find(item => item.value === selectedCategory);

        categoryMessage.textContent = `Selected category: ${selected.name}`;

    } catch (error) {
        categoryMessage.textContent = "Sorry, we couldn't load the categories.";
    }
});

