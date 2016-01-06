function init(){
    getCornStories();
}
document.addEventListener("DOMContentLoaded", init);

function cornStoryListener() {
    console.log(this.responseText);
    window.cornStories = JSON.parse(this.responseText);
    for (var i = 0; i < cornStories.length; i++) {
        console.log(cornStories[i].name)
    }
    drawCornStory();
}

function getCornStories() {
    oReq = new XMLHttpRequest();
    oReq.onload = cornStoryListener;
    oReq.open("get", "/cornStories/", true);
    oReq.send();
}


function drawCornStory() {
    var shoutOut = document.getElementById("myShoutOut");
    shoutOut.innerHTML = "";
    for(var c=cornStories.length-1; c > 0; c--){
        var para = document.createElement("p");
        para.className = "myShoutOut";
        para.innerHTML = cornStories[c].name;
        para.innerHTML += "'s favourite corn story is: ";
        para.innerHTML += cornStories[c].cornStory;
        shoutOut.appendChild(para);

    }
}