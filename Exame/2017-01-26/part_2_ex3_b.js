let loadLink = document.querySelector("div#photos > a.load");

function encodeForAjax(data) 
{
    return Object.keys(data).map(function(k){
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}

function addMoreImages(event)
{
    let newImages = JSON.parse(this.responseText);

    let list = document.querySelector("div#photos > ul");

    for (let image of newImages)
    {
      let newItem = document.createElement("li");
      newItem.innerHTML = `<img src = ${image}>`;
      list.appendChild(newItem);
    }
}

loadLink.addEventListener("click", function(event) {
    event.preventDefault();
    let request = new XMLHttpRequest();
    request.addEventListener("load", addMoreImages);
    request.open("get", "getrandomimages.php", true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(encodeForAjax({}));
});