/* GLOBAL */
  // fade in page elements on load
  $(document).ready(function() {
    $("h1").css("opacity","1");
    $(".button-group").css("opacity","1");
  });


/**
 * @description Calculates the width and height of the window
 * @returns {array}  Width and height (w,h) of window
 */
function getWindowDimensions() {
  const doc = document;
  const w = window;
  // check browser compatibility
  const docEl =  (doc.compatMode && doc.compatMode === 'CSS1Compat') ? doc.documentElement : doc.body;

  let width = docEl.clientWidth;
  let height = docEl.clientHeight;

  // check mobile zoom
  if ( w.innerWidth && width > w.innerWidth ) {
    width = w.innerWidth;
    height = w.innerHeight;
  }

  return {width: width, height: height};
}

/**
 * @description Display a random heading when the page theme is changed
 */
function setHeadingText() {
  const heading = document.querySelector('h1');

  // TODO: make lines interchangeable
  const headings = [
    "We design<br>digital<br>products",
    "We've got<br>a killer<br>backhand",
    "We can<br>do that,<br> too",
    "Don't worry.<br>We're here<br>for you",
    "Branding,<br>motion,<br>product"
  ];

  const min = 0;
  const max = headings.length;
  let i = Math.floor(Math.random() * (max - min)) + min;

  if ( headings.innerHTML !== headings[i]) {
    heading.innerHTML = headings[i];
  } else {
    i = (i + 1) % headings.length;
     heading.innerHTML = heading[i];
  }
}

/**
* @description Changes the font size and linespacing of the heading when the space around it changes size
*/
function setHeadingSize() {
  let wDimensions = getWindowDimensions();
  const root = document.querySelector(':root');
  const heading = document.querySelector('h1');

  // get the margins + padding of the body
  let bodyStyles = window.getComputedStyle(document.body);
  let margins = parseInt(bodyStyles.getPropertyValue('padding-left')) + parseInt(bodyStyles.getPropertyValue('padding-right'));

  // get the width of the bar + it's margin
  let barStyles = window.getComputedStyle(document.querySelector(".bar"));
  let barWidth = parseInt(barStyles.getPropertyValue('width')) + parseInt(barStyles.getPropertyValue('margin-right'));

  // get the height of the nav buttons
  let navStyles = window.getComputedStyle(document.querySelector('.button-group'));
  let navHeight = parseInt(navStyles.getPropertyValue('height'));

  // 'live' = available space for the heading
  let liveWidth = wDimensions.width - barWidth - margins;
  let liveHeight = wDimensions.height - margins - navHeight;

  // change the factor for font size and letter spacing
  let fsFactor =  liveHeight > 300 ? Math.min(liveWidth/88, liveHeight/46) : parseInt(heading.style.getProperty('height'));
  let lsFactor = -fsFactor/16;

  console.log( 'w:' + liveWidth + '; fs:' + fsFactor + '; h:' + liveHeight );
  heading.style.setProperty('font-size', fsFactor + 'rem');
  heading.style.setProperty('line-height', 0.8*fsFactor + 'rem');
  heading.style.setProperty('letter-spacing', lsFactor + 'rem')
  heading.style.setProperty('transition', '');
  // heading.style.setProperty('transition', 'font-size .1s, line-height .1s, letter-spacing .1s');
}

/* LANDING PAGE */
if ( document.querySelector("#landing")) {
  window.addEventListener("load", setHeadingSize, false);
  window.addEventListener("resize", setHeadingSize, false);

  let bars = document.querySelectorAll('.bar');
  for ( let i = 0; i < bars.length; i++ ) {
    bars[i].addEventListener("transitionstart", setHeadingSize, false);
    bars[i].addEventListener("transitionrun", setHeadingSize, false);
    bars[i].addEventListener("transitionend", setHeadingSize, false);
  }

  // console.log( "on the landing page" );
  let pick = 0;
  let circledime = 115;
  // Load landing page and initialize theme
  window.onload = function genesis() {
    let element = document.getElementById("landing");
    element.classList.toggle('theme' + pick);
    $(".theme0").css("--circle-color","hsl(0, 0%, 10%)");
  } 

  // Change the theme when circlehitbox is clicked
  $("html").on('click',"#circlehitbox",function() {

    pick = (pick + 1)%4;
    console.log(pick);
    $("html").removeAttr("style");
    let element = document.getElementById("landing");
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
    setHeadingText();
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
    let value1 = event.pageX/90 + 40;
    let value2 = event.pageY/60 + 90;
    let color = "hsl("+(value1)+","+(value2)+"%,54%";
    $(".theme0").css("background-color",color);
  });

  // vary the page color as the mouse moves: theme1
  $("html").mousemove(function(){
    let value1 = event.pageX/80 +0;
    let value2 = event.pageY/60 +5;
    let color = "hsl(45,"+(value1)+"%,"+(value2)+"%";
    $(".theme1").css("background-color",color);
  });

  // vary the page color as the mouse moves: theme2
  $("html").mousemove(function(){
    let value1 = event.pageX/90 +190;
    let value2 = event.pageY/60 + 90;
    let color = "hsl("+(value1)+","+(value2)+"%,53%";
    $(".theme2").css("background-color",color);
  });

  // vary the page color as the mouse moves: theme3
  $("html").mousemove(function(){
    let value1 = event.pageX/80 +45;
    let value2 = event.pageY/60 + 90;
    let color = "hsl("+(value1)+","+(value2)+"%,"+(value2)+"%";
    $(".theme3").css("background-color",color);
  });

  // play video and hide some page elements when focus is moved to bar
  $("html").on('focus','#videobar',function() {
    let myvideo = $("#reel").get(0);
    myvideo.play();
    $("#reel").css("opacity","1");
    $("#controlcircle").css("width","10");
    $(".bar").css("background","hsla(15, 100%, 55%, 0%)");
    $(".bararrowleft").css("opacity","1");
    $(".barx").css("opacity","1");
    $("#landing").css("--mobile-hide","0");
    $('$content-area').hide().show(0);
    $("#videobar").css("width", "60%");
  });

  // When focus leave the bar
  $("html").on('focusout','#videobar',function() {
    let myvideo = $("#reel").get(0);
    myvideo.pause();
    $("#reel").css("opacity","0.09");
    $(".videobar").css("width", "120px");
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

/* WORKS PAGE */
/* end works page */

/* CASE STUDY */
/* end case study */

/* INFO PAGE */
/* end info page */
