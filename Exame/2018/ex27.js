"use strict";

let resetButton = document.querySelector("section#game > input[value='reset']");

resetButton.addEventListener("click", function (event) {
    event.preventDefault();

    let listItems = document.querySelectorAll("section#game > ul > li");

    for (let item of listItems)
    {
        item.setAttribute("class", "");
    }

    document.querySelector("section#game > input[type='text']").value = "";
})