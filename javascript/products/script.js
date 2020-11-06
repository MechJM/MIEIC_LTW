"use strict";

let form = document.getElementsByTagName("form");

console.log(form);

for (let formElem of form)
{
    console.log(formElem.outerHTML);
}

let secondInput = document.querySelector("label:nth-child(2) > input");

console.log(secondInput.outerHTML);

let inputs = document.querySelectorAll("form input");

for (let input of inputs)
{
    console.log(input.outerHTML);
}
