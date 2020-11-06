"use strict";

let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit",function(event){
    alert("Submitted!");
    event.preventDefault();
});

console.log(form.outerHTML);

let secondInput = document.querySelector("label:nth-child(2) > input");

console.log(secondInput.outerHTML);

let inputs = document.querySelectorAll("form input");

for (let input of inputs)
{
    console.log(input.outerHTML);
}
