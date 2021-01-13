let imageLinks = document.querySelectorAll("div#photos > ul > li > img");

for (let link of imageLinks) {
    link.addEventListener("click", function (event){
        event.preventDefault();
        let image = document.querySelector("div#photos > img.large");
        let pathEnd = link.getAttribute("src");
        image.setAttribute("src",`large/${pathEnd}`);
    });
}