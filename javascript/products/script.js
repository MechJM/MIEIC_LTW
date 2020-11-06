"use strict";

function addTableEntry(description, amount)
{
    let entry = document.createElement("tr");
    entry.innerHTML = `<td>${description}</td><td><input value="${amount}"</td><td><input type="button" value="Remove"></td>`;
    let table = document.getElementById("products");
    table.append(entry);

    let button = entry.querySelector("input[type=button]");
    console.log(button);
    button.addEventListener("click",function() {
        console.log("Button was clicked!");
        this.parentNode.parentNode.remove();
    });
}

let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit",function(event){
    alert("Submitted!");
    
    addTableEntry(document.querySelector("label:nth-child(1) > input").value,document.querySelector("label:nth-child(2) > input").value);
    event.preventDefault();
});

