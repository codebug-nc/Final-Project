$(document).ready(function(){
  // your code goes below
  $('.funny-text').funnyText({
       speed: 700,
       borderColor: 'red',
       activeColor: 'yellow',
       color: 'blue',
       fontSize: '2em',
       direction: 'both'
     });
    $('.funny-text-2').funnyText({
       speed: 700,
       borderColor: 'red',
       activeColor: 'yellow',
       color: 'blue',
       fontSize: '2em',
       direction: 'both'
     });
    var pattern = Trianglify({
    	variance: "0.14",
   		cell_size: 110, 
   		seed: 'wrauj', 
   		x_colors: 'Spectral',
   	 	width: window.innerWidth,
    	height: window.innerHeight
  	});
  	$("body").append(pattern.canvas())
  	var emojis = ['😠','😦','😑','😀','😍'];

$("input").mousemove(function(){
	var i = $(this).val();
	$(".emoji").html(emojis[i]);
});
})
