$(document).ready(function(){
  // your code goes below

	// var pattern = Trianglify({
	// 	width: window.innerWidth,
	// 	height: window.innerHeight
	// });
	var pattern = Trianglify({variance: "0.28", 
		seed: 'bh17i', 
		x_colors: 'RdYlBu',
		width: window.innerWidth,
		height: window.innerHeight
	})
	
	$('.funny-text').funnyText({
       speed: 100,
       borderColor: 'green',
       activeColor: 'lightgreen',
       color: 'blue',
       fontSize: '2em',
       direction: 'both'

     });
	$("#floss").click(function(){

		if($("#so-good").hasClass("fadeOutLeftBig")) {
			$("#so-good").removeClass("fadeOutLeftBig animated slower");
			$("#so-good").addClass("fadeInLeftBig animated fast");
		} else {
			$("#so-good").addClass("animated fadeOutLeftBig slow");
		}

		var a = new Audio
			("nyoom2.mov");
		a.play();

	});

	document.body.appendChild(pattern.canvas())


  
})
