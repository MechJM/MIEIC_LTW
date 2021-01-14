"use strict";

function encodeForAjax(data) 
{
    return Object.keys(data).map(function(k){
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}

function receivePurchaseResult()
{
  let response = Number(JSON.parse(this.responseText));
  let total = document.querySelector("div#products > p.total");
  if (response < 0) total.textContent = "not enough stock";
  else total.textContent = response.toString();
}

let purchaseLink = document.querySelector("div#products > a.buy");

purchaseLink.addEventListener("click", function (event) {
    event.preventDefault();

    let products = [];

    let items = document.querySelectorAll("div#products > ul > li");
    for (let item of items)
    {
      let name = item.textContent.slice(0, item.textContent.length - 2);
      let quant = Number(item.querySelector("span.qty").innerHTML);
      products.push({"name": name, "qyt": quant});
    }

    let request = new XMLHttpRequest();
    request.onload = receivePurchaseResult;
    request.open("post", "calculatetotal.php", true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(encodeForAjax(products));
})
