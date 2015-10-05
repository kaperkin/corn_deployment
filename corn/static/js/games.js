function init(){
	var btn = document.getElementById("play");
	btn.addEventListener("click", playGame);
	var btnAgain = document.getElementById("playAgain");
	btnAgain.addEventListener("click", playAgain);

	var extraBackground = document.getElementById("background");
	extraBackground.style.width = screen.width;
	extraBackground.style.height = screen.height;
}

function playGame() {
	var weapons = ["farmer", "hoe", "weeds"];
	player1 = document.getElementById("player1").value;

	var randomNum = function () {
		return Math.floor(Math.random() * 3);
	};

	var computerChoice = weapons[randomNum()];
	var playerChoice = ("You chose " + player1 + "!");
	var compChoice = ("The computer chose " + computerChoice + "!");
	var result = "";
	if (player1 === computerChoice) {
		result = ("It's a tie! Everyone's a winner...or a loser depending on how you look at it.");
	}
	else if (player1 === "farmer" && computerChoice === "weeds") {
		result = ("The farmer kills the weeds! Your corn is safe! You win! Hurrah!");
	}
	else if (player1 === "hoe" && computerChoice === "farmer") {
		result = ("The hoe gives the farmer a sliver! You win! Hurrah!");
	}
	else if (player1 === "weeds" && computerChoice === "hoe") {
		result = ("The weeds strangle the corn despite the valient effort by the hoe! You win! Hurrah!");
	}
	else {
		result = ("You lose! The machine wins this time.");
	}


	document.getElementById('playerChoice').innerHTML = playerChoice;
	document.getElementById('compChoice').innerHTML = compChoice;
	document.getElementById('result').innerHTML = result;
}

function playAgain(){
	document.getElementById("player1").value = "";
	document.getElementById('playerChoice').innerHTML = "";
	document.getElementById('compChoice').innerHTML = "";
	document.getElementById('result').innerHTML = "";
}

document.addEventListener("DOMContentLoaded", init);

