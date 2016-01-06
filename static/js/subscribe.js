function init(){
	document.getElementById("submit").addEventListener("click", addCornStory);
	document.getElementById("clear").addEventListener("click", clearForm);
}

document.addEventListener("DOMContentLoaded", init);

function addCornStory(){
	var name = document.getElementById("name").value;
	var cornStory = document.getElementById("cornStory").value;

	var item = {
		"name" : name,
		"cornStory": cornStory
	};

	sendPost(item, '/sendCornStory/')
}

function viewHome(){
	window.location = "/";
	getCornStories();
}

function clearForm(){
	document.getElementById("name").value = "";
	document.getElementById("mail").value = "";
	var radios = document.getElementsByClassName("radios");
	for(var r = 0; r< radios.length; r++){
		radios[r].checked = false;
	}
	document.getElementById("cornStory").value = "";
}

function sendPost(item, url){
	var form_data = new FormData();

	 for (var key in item) {
        form_data.append(key, item[key]);
    }
	// Create new XMLHttpRequest
    var request = new XMLHttpRequest();
    request.onload = viewHome;
    request.open("POST", url);
    request.send(form_data);
}