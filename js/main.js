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
    const article = document.createElement("article");

    //  namn
    const title = document.createElement("h3");
    title.textContent = recipeData.name;
    article.appendChild(title);

    // bilden
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

    const prepTime = document.createElement("p");
    prepTime.innerHTML = "<strong>Prep time:</strong> " + recipeData.prepTimeMinutes + " minutes";
    info.appendChild(prepTime);

    // DIN UPPGIFT: Cooking time och Difficulty (samma mönster som prepTime)

    const cookTime = document.createElement("p");
cookTime.innerHTML = "<strong>Cooking time:</strong> " + recipeData.cookTimeMinutes + " minutes";
info.appendChild(cookTime);

const difficulty = document.createElement("p");
difficulty.innerHTML = "<strong>Difficulty:</strong> " + recipeData.difficulty;
info.appendChild(difficulty);


    article.appendChild(info);

    // Ingredienser
    const ingredientsTitle = document.createElement("h4");
    ingredientsTitle.textContent = "Ingredients";
    article.appendChild(ingredientsTitle);

    const ingredientsList = document.createElement("ul");
    for (const ingredient of recipeData.ingredients) {
        const item = document.createElement("li");
        item.textContent = ingredient;
        ingredientsList.appendChild(item);
    }
    article.appendChild(ingredientsList);

    // Instruktioner
    const instructionsTitle = document.createElement("h4");
    instructionsTitle.textContent = "Instructions";
    article.appendChild(instructionsTitle);

    const instructionsList = document.createElement("ol");
    for (const step of recipeData.instructions) {
        const item = document.createElement("li");
        item.textContent = step;
        instructionsList.appendChild(item);
    }
    article.appendChild(instructionsList);

    // Sätt fast hela receptet på sidan
    recipe.appendChild(article);
}