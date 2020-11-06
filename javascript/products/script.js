"use strict";

function addTableEntry(description, amount)
{
    let entry = document.createElement("tr");
    entry.innerHTML = `<tr><td>${description}</td><td><input value="${amount}"</td><td><input type="button" value="Remove"</td></tr>`;
    let table = document.getElementById("products");
    table.append(entry);
}

let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit",function(event){
    alert("Submitted!");
    event.preventDefault();
    addTableEntry(document.querySelector("label:nth-child(1) > input").value,document.querySelector("label:nth-child(2) > input").value);
});

console.log(form.outerHTML);

let secondInput = document.querySelector("label:nth-child(2) > input");

console.log(secondInput.outerHTML);

let inputs = document.querySelectorAll("form input");

for (let input of inputs)
{
    console.log(input.outerHTML);
}
