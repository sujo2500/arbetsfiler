"use strict";
/*
 * Laboration 6 - Receptsökaren
 * Namn: DITT NAMN
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
    console.log("Formuläret skickades");
    console.log(searchInput.value);
});

