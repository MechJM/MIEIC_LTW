"use strict";

let listItems = document.querySelectorAll("div#products > ul > li");

for (let item of listItems)
{
    let link = item.querySelector("a");
    link.addEventListener("click", function (event) {
        event.preventDefault();
        let span = item.querySelector("span.qyt");
        let currentVal = Number(span.innerHTML);
        let newValStr = (++currentVal).toString();
        span.innerHTML = newValStr;
    });
}