$(document).ready(function() {
  // Write your JavaScript below
$("#yes-secret").click(function(){
	$("#buttons-box").hide();
	$("#secrets-box").show();
});
$("#no-secret").click(function(){
	console.log("no was clicked")
	$("#buttons-box").hide();
	$("#go-away-box").show();
});
$("#maybe").click(function(){
	$("#buttons-box").hide();
	$("#maybe-box").show();
});
});