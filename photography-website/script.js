// /* boston voyager link */
var x = document.getElementById("voyage");
x.addEventListener('dblclick', () => window.open("http://bostonvoyager.com/interview/meet-adam-ridhwan-adam-ridhwan-boston/", '_blank').focus())


/* social icons */
var facebook = document.getElementById("facebook");
facebook.addEventListener('click', () => window.open("https://www.facebook.com/adam.ridhwan.16/", '_blank').focus())

var facebook = document.getElementById("twitter");
twitter.addEventListener('click', () => window.open("https://twitter.com/adamrwn1", '_blank').focus())

var facebook = document.getElementById("instagram");
instagram.addEventListener('click', () => window.open("https://www.instagram.com/adamrwn/", '_blank').focus())

var facebook = document.getElementById("kit");
kit.addEventListener('click', () => window.open("https://kit.co/adamrwn", '_blank').focus())


/* toggle quote */
var toggle  = document.getElementById("toggle");
var content = document.getElementById("content");
toggle.addEventListener("click", () => content.classList.toggle("show"));


/* Ansel Adams name onclick */
document.getElementById("imgLink").onclick = function () {
  window.open("https://www.anseladams.com/", '_blank').focus();
}


/* Ansel Adams text onclick */
document.getElementById("textLink").onclick = function () {
  window.open("https://www.anseladams.com/ansel-adams-bio/", '_blank').focus();
}


/* inspiration mouse over */
document.getElementById("changeColor").onmouseover = function() {mouseOver()}
document.getElementById("changeColor").onmouseout = function() {mouseOut()}
function mouseOver() {
  document.getElementById("changeColor").style.color = "cyan";
}
function mouseOut() {
  document.getElementById("changeColor").style.color = "white";
}


/* ansel adams mouse over change image */
function setOldImage() {
  this.src="images/ansel-old.jpg";
}
function setNewImage() {
  this.src="images/ansel.jpg";
}
document.getElementById('img1').addEventListener("mouseover", setOldImage);
document.getElementById('img1').addEventListener("mouseout", setNewImage);


/* contact bar color */
var x = document.getElementById("myForm");
x.addEventListener("focus", myFocusFunction, true);
x.addEventListener("blur", myBlurFunction, true);

function myFocusFunction() {
  document.getElementById("name").style.backgroundColor = "#E8F0FE";  
  document.getElementById("email").style.backgroundColor = "#E8F0FE"; 
  document.getElementById("message").style.backgroundColor = "#E8F0FE"; 
}
function myBlurFunction() {
  document.getElementById("name").style.backgroundColor = ""; 
  document.getElementById("email").style.backgroundColor = ""; 
  document.getElementById("message").style.backgroundColor = "";
}


/* contact bar name caps */
document.getElementById("name").addEventListener("change", caps);
function caps() {
  var x = document.getElementById("name");
  x.value = x.value.toUpperCase();
}


/* open mail onclick */
document.getElementById("send-email").onclick = function() {sendEmail()};
function sendEmail() {
  document.getElementById("send-email").document.location =  document.location= "mailto:adamridhwan.1@gmail.com";
}


/* clear contact form text */
var clear = document.getElementById("clearText");
clear.addEventListener('click', () => document.getElementById("name").value='')
clear.addEventListener('click', () => document.getElementById("email").value='')
clear.addEventListener('click', () => document.getElementById("message").value='')

