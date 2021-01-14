"use strict";

function updateBoard(event)
{
    let squares = document.querySelectorAll("section#tic-tac-toe > div.square");

    let response = JSON.parse(this.responseText);

    let newState = response["state"];

    document.querySelector("section#tic-tac-toe > p#state").textContent = newState;

    let newSquares = response["squares"];

    for (let i = 0; i < squares.length; i++)
    {
        squares[i].textContent = newSquares[i];
    }

    event.preventDefault();
}

let id = document.querySelector("section#tic-tac-toe").getAttribute("data-id");

let request = new XMLHttpRequest();
request.addEventListener("load", updateBoard);
request.open("post", "play.php", true);
request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
request.send(encodeForAjax({id: id}));