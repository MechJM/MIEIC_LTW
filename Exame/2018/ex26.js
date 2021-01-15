"use strict";

let listItems = document.querySelectorAll("section#game > ul > li");

for (let item of listItems)
{
    item.addEventListener("click", function (event) {
        event.preventDefault();

        if (item.getAttribute("class") === "")
        {
            item.setAttribute("class", "used");
            let value = item.textContent;

            document.querySelector("section#game > input[type='text']").value += value;
        }

    });
}