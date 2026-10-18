"use strict";
/*
 * Laboration 6 - Receptsökaren
 * Namn: Susan johansson
 */
const form = document.getElementById("searchform");
const searchbutton = document.getElementById("searchbutton");
const section = document.getElementById("new");
const error = document.getElementById("error");
const sectionMessage = document.getElementById("message");
const recipe = document.getElementById("recipe");
const searchInput = document.getElementById("search");

//eventlyssnare
form.addEventListener("submit", async function (event) {
    event.preventDefault();


//error vid tomt sökfält
const searchText = searchInput.value;
if (searchText === "") {
    error.textContent = "Du måste skriva något!";
    return;
}

 const data = await fetchRecipe(searchText);
    showRecipe(data.recipes[0]);
});



async function fetchRecipe(searchText){
    const response = await fetch("https://dummyjson.com/recipes/search?q=" + searchText);
    const data = await response.json();
        return data;
        
}

function showRecipe(recipeData) {
    // Lådan som allt i receptet ska ligga i
    const article = document.createElement("article");

    // Receptets namn
    const title = document.createElement("h3");
    title.textContent = recipeData.name;
    article.appendChild(title);

    // Bilden
    const image = document.createElement("img");
    image.src = recipeData.image;
    image.alt = recipeData.name;
    article.appendChild(image);

    // om receptet
    const info = document.createElement("div");
    info.className = "recipe-info";

    const servings = document.createElement("p");
    servings.innerHTML = "<strong>Servings:</strong> " + recipeData.servings;
    info.appendChild(servings);


    article.appendChild(info);

    recipe.appendChild(article);
}