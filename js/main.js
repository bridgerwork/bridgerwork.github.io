var pick = 1
var circledime = 115

window.onload = function genesis() {
  var element = document.getElementById("landing");
  element.classList.toggle('theme' + pick);
  $(".theme1").css("--circle-color","hsl(0, 0%, 10%)");
} 

  $(document).ready(function() {
   $("h1").css("opacity","1");
   $(".arrowgrouplink").css("opacity","1");
});

$("html").on('click',"#circlehitbox",function() {
	pick = pick + 1;
	console.log(pick);
	$("html").removeAttr("style");
	var element = document.getElementById("landing");
  element.classList.toggle("theme" + pick);
  if (pick > 4) {
	pick = 1;
	element.classList.remove("theme2","theme3","theme4","theme5")}

 if ($(window).width() > 800) {

	$("#innercircle").css("width",""+(circledime)+"vw");
	$("#innercircle").css("height",""+(circledime)+"vw");
	$("#innercircle").css("border-top-left-radius",""+(circledime)+"vw");
	$("#innercircle").css("border-bottom-left-radius",""+(circledime)+"vw");
	$("#innercircle").css("visibility","visible");
}
else {
	$("#innercircle").css("width",""+(circledime)+"vh");
	$("#innercircle").css("height",""+(circledime)+"vh");
	$("#innercircle").css("border-top-left-radius",""+(circledime)+"vh");
	$("#innercircle").css("border-bottom-left-radius",""+(circledime)+"vh");
	$("#innercircle").css("visibility","visible");
}

});

$("html").on('click',"#circlehitbox",function() { setTimeout(function() { 
   $("#controlcircle").css("right","-100px");
}, 300); });


$("html").on('click',"#circlehitbox",function() { setTimeout(function() { 
   // $(".circletext").css("opacity","0%");
   $(".theme1").css("--circle-color","hsl(0,0%,10%)");
   $(".theme2").css("--circle-color","hsl(197, 100%, 53%)");
   $(".theme3").css("--circle-color","hsl(45,100%,98%)");
   $(".theme4").css("--circle-color","hsl(45,100%,54%)");
   $("#innercircle").css("visibility","hidden");
   $("#controlcircle").css("right","0px");

      if ($(window).width() > 800) {
      $(".circle").css("width","75px");
      $(".circle").css("height","150px");
   }
   else {}

}, 500); });


$("html").mousemove(function(){
	var value1 = event.pageX/90 +40;
	var value2 = event.pageY/60 + 90;
	var color = "hsl("+(value1)+","+(value2)+"%,54%";
	$(".theme1").css("background-color",color);
});

$("html").mousemove(function(){
	var value1 = event.pageX/80 +0;
	var value2 = event.pageY/60 +5;
	var color = "hsl(45,"+(value1)+"%,"+(value2)+"%";
	$(".theme2").css("background-color",color);
});

$("html").mousemove(function(){
	var value1 = event.pageX/90 +190;
	var value2 = event.pageY/60 + 90;
	var color = "hsl("+(value1)+","+(value2)+"%,53%";
	$(".theme3").css("background-color",color);
});

$("html").mousemove(function(){
	var value1 = event.pageX/80 +45;
	var value2 = event.pageY/60 + 90;
	var color = "hsl("+(value1)+","+(value2)+"%,"+(value2)+"%";
	$(".theme4").css("background-color",color);
});

$("html").on('focus','#videobar',function() {
   var myvideo = $("#reel").get(0);
   myvideo.play();
   $("#reel").css("opacity","1");
   $("#controlcircle").css("width","10");
   $(".bar").css("background","hsla(15, 100%, 55%, 0%)");
   $(".bararrowleft").css("opacity","1");
   $(".barx").css("opacity","1");
   $("#landing").css("--mobile-hide","0");
   $('$pageright').hide().show(0);
});

$("html").on('focusout','#videobar',function() {
   var myvideo = $("#reel").get(0);
   myvideo.pause();
   $("#reel").css("opacity","0.09");
   $("#controlcircle").css("width","50%");
   $(".bar").css("background","hsla(15, 100%, 55%, 100%)");
   $(".bariconarrow").css("visibility","visible");
   $(".bararrowleft").css("opacity","0");
   $(".barx").css("opacity","0");
   $("#landing").css("--mobile-hide","1");
   $('#pageright').hide().show(0);
});

$("html").on('mouseover','.bar',function() {
   $(".bariconarrow").css("opacity","1");
   // $(".baricon").css("padding-left","55px");
});

$("html").on('mouseout','.bar',function() {
   $(".bariconarrow").css("opacity","0");
   // $(".baricon").css("padding-left","30px");
});

$("html").on('mouseover','#circlehitbox',function() {
   // if (pick == 2) {
   // $(".circletext").text("blue");}
   // if (pick == 3) {
   // $(".circletext").text("light");}
   // if (pick == 4) {
   // $(".circletext").text("base");}
   // if (pick == 1) {
   // $(".circletext").text("dark");}
   // $(".circletext").css("opacity","100%");
   $(".theme1").css("--circle-color","hsl(0,0%,10%)");
   $(".theme2").css("--circle-color","hsl(197, 100%, 53%)");
   $(".theme3").css("--circle-color","hsl(45,100%,98%)");
   $(".theme4").css("--circle-color","hsl(45,100%,54%)");


   if ($(window).width() > 800) {
      $(".circle").css("width","75px");
      $(".circle").css("height","150px");
   }
   else {}
});


$("html").on('mouseout','#circlehitbox',function() {
   // $(".circletext").css("opacity","0%");
   $(".circle").css("width","60px");
   $(".circle").css("height","100px");
   $(".theme1").css("--circle-color","hsl(0,0%,10%)");
   $(".theme2").css("--circle-color","hsl(197, 100%, 53%)");
   $(".theme3").css("--circle-color","hsl(45,100%,98%)");
   $(".theme4").css("--circle-color","hsl(45,100%,54%)");
   $("#innercircle").css("visibility","hidden");
});

$("html").on('click','.bar',function() {
   $(".bariconarrow").css("opacity","0");
   $(".bariconarrow").css("visibility","hidden");
});