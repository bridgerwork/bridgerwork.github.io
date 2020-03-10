/* 
   LANDING PAGE
*/
if ( document.querySelector("#landing")) {
  console.log( "on the landing page" );
  var pick = 0;
  var circledime = 115;
  // Load landing page and initialize theme
  window.onload = function genesis() {
    var element = document.getElementById("landing");
    element.classList.toggle('theme' + pick);
    $(".theme0").css("--circle-color","hsl(0, 0%, 10%)");
  } 

  // fade in page elements on load
  $(document).ready(function() {
    $("h1").css("opacity","1");
    $(".button-group").css("opacity","1");
  });

  // Change the theme when circlehitbox is clicked
  $("html").on('click',"#circlehitbox",function() {
    pick = (pick + 1)%4;
    console.log(pick);
    $("html").removeAttr("style");
    var element = document.getElementById("landing");
    while(element.classList.length) {
      element.classList.remove(element.classList.item(0));
    }
    element.classList.add("theme" + pick);

    // set circle size based on window size
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

  // move the control circle when user clicks on the hitbox
  $("html").on('click',"#circlehitbox",function() { setTimeout(function() { 
    $("#controlcircle").css("right","-100px");
  }, 300); });

  // Change the circle color as it comes back into view
  $("html").on('click',"#circlehitbox",function() { setTimeout(function() { 
    $(".theme0").css("--circle-color","hsl(0,0%,10%)");
    $(".theme1").css("--circle-color","hsl(197, 100%, 53%)");
    $(".theme2").css("--circle-color","hsl(45,100%,98%)");
    $(".theme3").css("--circle-color","hsl(45,100%,54%)");
    $("#innercircle").css("visibility","hidden");
    $("#controlcircle").css("right","0px");

    if ($(window).width() > 800) {
      $(".circle").css("width","75px");
      $(".circle").css("height","150px");
    }
    else {}

  }, 500); });

  // vary the page color as the mouse moves: theme0
  $("html").mousemove(function(){
    var value1 = event.pageX/90 + 40;
    var value2 = event.pageY/60 + 90;
    var color = "hsl("+(value1)+","+(value2)+"%,54%";
    $(".theme0").css("background-color",color);
  });

  // vary the page color as the mouse moves: theme1
  $("html").mousemove(function(){
    var value1 = event.pageX/80 +0;
    var value2 = event.pageY/60 +5;
    var color = "hsl(45,"+(value1)+"%,"+(value2)+"%";
    $(".theme1").css("background-color",color);
  });

  // vary the page color as the mouse moves: theme2
  $("html").mousemove(function(){
    var value1 = event.pageX/90 +190;
    var value2 = event.pageY/60 + 90;
    var color = "hsl("+(value1)+","+(value2)+"%,53%";
    $(".theme2").css("background-color",color);
  });

  // vary the page color as the mouse moves: theme3
  $("html").mousemove(function(){
    var value1 = event.pageX/80 +45;
    var value2 = event.pageY/60 + 90;
    var color = "hsl("+(value1)+","+(value2)+"%,"+(value2)+"%";
    $(".theme3").css("background-color",color);
  });

  // play video and hide some page elements when focus is moved to bar
  $("html").on('focus','#videobar',function() {
    var myvideo = $("#reel").get(0);
    myvideo.play();
    $("#reel").css("opacity","1");
    $("#controlcircle").css("width","10");
    $(".bar").css("background","hsla(15, 100%, 55%, 0%)");
    $(".bararrowleft").css("opacity","1");
    $(".barx").css("opacity","1");
    $("#landing").css("--mobile-hide","0");
    $('$content-area').hide().show(0);
  });

  // When focus leave the bar
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
    $('#content-area').hide().show(0);
  });

  // fadeout bar icon when bar is clicked
  $("html").on('click','.bar',function() {
    $(".bariconarrow").css("opacity","0");
    $(".bariconarrow").css("visibility","hidden");
  });

  // show/hide the icon in the bar
  $("html").on('mouseover','.bar',function() {
    $(".bariconarrow").css("opacity","1");
    // $(".baricon").css("padding-left","55px");
  });
  $("html").on('mouseout','.bar',function() {
    $(".bariconarrow").css("opacity","0");
    // $(".baricon").css("padding-left","30px");
  });


  $("html").on('mouseover','#circlehitbox',function() {
    // $(".theme0").css("--circle-color","hsl(0,0%,10%)");
    // $(".theme1").css("--circle-color","hsl(197, 100%, 53%)");
    // $(".theme2").css("--circle-color","hsl(45,100%,98%)");
    // $(".theme3").css("--circle-color","hsl(45,100%,54%)");

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
    $(".theme0").css("--circle-color","hsl(0,0%,10%)");
    $(".theme1").css("--circle-color","hsl(197, 100%, 53%)");
    $(".theme2").css("--circle-color","hsl(45,100%,98%)");
    $(".theme3").css("--circle-color","hsl(45,100%,54%)");
    $("#innercircle").css("visibility","hidden");
  });

}

if (document.querySelector("#team-list")) {
  let names = document.querySelectorAll(".name");
  for (var i = 0; i < names.length; i++) {
    names[i].classList.toggle("hidden");
  }
  let TEAMLIST = document.querySelectorAll(".team-member");
// //   console.log( TEAMLIST );

// //   function explodeName(person) {
// //     let firstName = person.querySelector(".team-name");
// //     // let lastName = person.querySelector(".last-name");
// //     firstName.classList.toggle("hover");
// //     // lastName.classList.toggle("hover");
// //   }
//   function collapseName(person) {
//     let firstName = person.querySelector(".team-name");
//     // let lastName = person.querySelector(".last-name");
//     firstName.classList.toggle("hover");
//     // lastName.classList.toggle("hover");
//   }
// //   // for person in TEAMLIST {
// //   //   person.onmouseover = explodeName; 
// //     TEAMLIST[0].addEventListener("mouseenter", function (){ explodeName( this ); }, false);
//     TEAMLIST[0].addEventListener("mouseout", function (){ collapseName( this ); }, false);
// //   // }
} else { console.log( "no team list here" ); }
