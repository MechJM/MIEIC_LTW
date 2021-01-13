let loadLink = document.querySelector("div#photos > a.load");

function encodeForAjax(data) 
{
    return Object.keys(data).map(function(k){
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}

function addMoreImages()
{

}

loadLink.addEventListener("click", function(event) {
    event.preventDefault();
    let request = new XMLHttpRequest();
    request.onload = addMoreImages;
    request.open("get", "getrandomimages.php", true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(encodeForAjax({}));
});