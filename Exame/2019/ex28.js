"use strict";

let squares = document.querySelectorAll("section#tic-tac-toe > div.square");

for (let i = 0; i < squares.length; i++)
{
    let square = squares[i];
    square.addEventListener("click", function (event) {
        event.preventDefault();
        let id = document.querySelector("section#tic-tac-toe").getAttribute("data-id");
        let position = i + 1;

        if (square.textContent === "")
        {
            let request = new XMLHttpRequest();
            request.addEventListener("load", updateBoard);
            request.open("post", "play.php", true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.send(encodeForAjax({id: id, position: position}));
        }

        });
}

