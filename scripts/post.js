var titleNode = document.getElementById("postTitle");
var authorNode = document.getElementById("author");
var contentNode = document.getElementById("postContent");

window.onload = function() {
    //Fetch data from Session storage and display details of the post at respective position
    authorNode.innerHTML = sessionStorage.getItem("author");
    titleNode.innerHTML = sessionStorage.getItem("postTitle");
    contentNode.innerHTML = sessionStorage.getItem("postContent");
};