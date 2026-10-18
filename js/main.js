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


form.addEventListener("submit", function (event) {
    event.preventDefault();



const searchText = searchInput.value;
if (searchText === "") {
    error.textContent = "Du måste skriva något!";
    return;
}
fetchRecipe(searchText);
});


async function fetchRecipe(searchText){
    const response = await fetch("https://dummyjson.com/recipes/search?q=" + searchText);
    const data = await response.json();
        console.log(data.recipes[0].name);
        return data;
        
}

form.addEventListener("submit", async function (event) {

    const data = await fetchRecipe(searchText);
    showRecipe(data.recipes[0]);
});