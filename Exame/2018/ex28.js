"use strict";

let sendButton = document.querySelector("section#game > input[name='send']");

function ajaxResponse(event)
{
    event.preventDefault();

    let response = JSON.parse(this.responseText);

    if (response["result"] === "wrong") alert("WRONG");
    else
    {
        let word = response["word"];
        let list = document.querySelector("section#game > ul");
        list.innerHTML = "";
        document.querySelector("section#game > input[type='text']").value = "";
        for (let letter of word)
        {
            let newLi = document.createElement("li");
            newLi.innerHTML = letter;
            list.appendChild(newLi);
        }
    }
}

sendButton.addEventListener("click", function (event) {
    event.preventDefault();

    let value = document.querySelector("section#game > input[type='text']").value;

    let request = new XMLHttpRequest();
    request.addEventListener("load", ajaxResponse);
    request.open("post", "is_guess_correct.php", true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(encodeForAjax({guess: value}));
});