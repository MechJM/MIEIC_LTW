"use strict";

function encodeForAjax(data) 
{
    return Object.keys(data).map(function(k){
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}

function receiveComments()
{
    
}

function submitComment(e)
{
    e.preventDefault();
    let id, comment_id, username, text, comment_id_string;
    
    id = document.querySelector("input[name=id]").value;
    username = document.querySelector("input[name=username]").value;
    text = document.querySelector("textarea").value;
    comment_id_string = document.querySelector("section[id=comments] > h1").textContent;
    comment_id = comment_id_string.slice(0,1);

    console.log(id);
    console.log(username);
    console.log(text);
    console.log(comment_id);


    let request = new XMLHttpRequest();
    request.onload = receiveComments;
    request.open("post", "api_add_comment.php", true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(encodeForAjax({id: id, comment_id: comment_id, username: username, text: text}));
}
let commentForm = document.querySelector("form");
commentForm.addEventListener("submit",submitComment);