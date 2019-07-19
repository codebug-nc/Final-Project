$(document).ready(function(){
  // your code goes below
$("textarea").keypress(function(event){
	console.log(event.key);
	var letter = event.key;
	console.log(letter);
	if(letter == "a"){
		$("body").css("background","green")
	}
	else if(letter == "s"){
		$("body").css("background","red")
	}
	else if(letter == "d"){
		$("body").css("background","blue")
	}
	else if(letter == "f"){
		$("body").css("background","yellow")
	}
	else if(letter == "g"){
		$("body").css("background","black")
	}
	else if(letter == "h"){
		$("body").css("background","white")
	}
	else if(letter == "j"){
		$("body").css("background","gray")
	}
	else if(letter == "k"){
		$("body").css("background","url('https://pbs.twimg.com/profile_images/1292224437/scary-clown.jpg')")
	}
	else if(letter == "l"){
		$("body").css("background","url('https://live.staticflickr.com/171/371328820_b59e99a88a_b.jpg')")
	}
	else if(letter == "o"){
		$("body").css("background","url('http://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg')")
		$("body").css("background-repeat", "no-repeat")
		$("body").css("width", "100vw");
		$("body").css("height", "100vh");
		$("body").css("background-size", "contain")
		$("body").css("background-position", "center")
		$("body").css("background-color", "black")
	}
	else if(letter == "p"){
		$("body").css("background-image","url('https://i.pinimg.com/originals/5a/e5/8f/5ae58f5036997cfd4636917403c3c951.jpg')")
		$("body").css("background-repeat", "no-repeat")
		$("body").css("width", "100vw");
		$("body").css("height", "100vh");
		$("body").css("background-size", "contain")
		$("body").css("background-position", "center")
		$("body").css("background-color", "black")
	}
});
  
})