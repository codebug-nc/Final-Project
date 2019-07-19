$(document).ready(function() {
  // Write your JavaScript below
var yes = $ ("#secrets-box")
	yes.hide()
	$("#secrets-box")
var no = $ ("#go-away-box")
	no.hide()
	$("#go-away-box")
var maybe = $ ("#mayber")
	maybe.hide()
	$("#mayber")

$("#creeper").click(function(){
	$("#secrets-box").fadeIn(1000)
	$("#buttons-box").fadeOut(0)
	});
$("#zombie").click(function(){
	$("#go-away-box").fadeIn(1000)
	$("#buttons-box").fadeOut(0)


});
$("#pig").click(function(){
	$("#mayber").fadeIn(1000)
	$("#buttons-box").fadeOut(0)
	});
});
