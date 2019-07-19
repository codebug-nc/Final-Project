document.addEventListener('DOMContentLoaded', function() {



 var pattern = Trianglify({
   variance: "0.14",
   cell_size: 110, 
   seed: 'wrauj', 
   x_colors: 'Spectral',
   width: window.innerWidth,
   height: window.innerHeight,

 });
 $("body").append(pattern.canvas())


  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  // Your prompt() goes below  
function declareWinner (userChoice, computerChoice) {
	//write if statements to figure out who won. console.log the winner.
	if (computerChoice == "rock" && userChoice == "rock") {
		alert ("pick again")
	}else if (computerChoice == "paper" && userChoice == "paper") {
		alert ("pick again")
	}else if (computerChoice == "scissors" && userChoice == "scissors") {
		alert ("pick again")
	}else if (computerChoice == "paper" && userChoice == "rock") {
		alert ("computer wins")
	}else if (computerChoice == "rock" && userChoice == "paper") {
		alert ("user wins")
	}else if (computerChoice == "rock" && userChoice == "scissors") {
		alert ("computer wins")
	}else if (computerChoice == "scissors" && userChoice == "rock") {
		alert ("user wins")
	}else if (computerChoice == "paper" && userChoice == "scissors") {
		alert ("user wins")
	}else if (computerChoice == "scissors" && userChoice == "paper") {
		alert ("computer wins")
	}
}

// if (userChoice == "rock")


  $("#rock").click(function(event){
		declareWinner("rock", computerChoice)
        // write your code to determine who won when the user picks rock here
    })

  $("#scissors").click(function(event){
		declareWinner("paper", computerChoice)

	})

  $("#paper").click(function(event){
		declareWinner("scissors", computerChoice)

	})





});
