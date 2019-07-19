document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  // Your prompt() goes below
  $('body').particleground({
         dotColor: 'blue',
         lineColor: 'red',
         minXSpeed: 4999,
         maxXSpeed: 5000,
         minYSpeed: 4999,
         maxYSpeed: 5000,
         directionX: 'center',
         directionY: 'center',
         density: 2000,
         particleRadius: 5,
         lineWidth: 1,
         curvedLines: false,
         proximity: 50,
         parallax: false,
         parallaxMultiplier: 1 , 

       });

var userChoice = prompt("Rock,Paper,Scissors")




  console.log("The computer chooses: " + computerChoice);
  // Your declareWinner function goes below

function declareWinner(userChoice, computerChoice){

	if (userChoice == "rock" && computerChoice == "scissors"){
		alert("You won");
	}
	else if (userChoice == "paper" && computerChoice == "scissors"){
		alert("You lose");
	}
	else if (userChoice == "rock" && computerChoice == "paper"){
		alert("You lose");
	}
	else if (userChoice == "scissors" && computerChoice == "paper"){
		alert("You win");
	}
	else if (userChoice == "paper" && computerChoice == "rock"){
		alert("You win");
	}
	else if (userChoice == "scissors" && computerChoice == "rock"){
		alert("You lose");
	}
	else if (userChoice== computerChoice){
		alert("You tied");
	}
	else{
		alert("wrong answer buckaroo");
	}
	

}

$("#yeti").click(function(){
	document.location.reload()
});
		

declareWinner(userChoice, computerChoice)


});
