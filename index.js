
//For Dice 1
//Generate random number 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//use random dumber to select dice image
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

//to include the folder name so that it is easy when chenging attribute using javascript
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//For Dice 2
//Generate random number 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//to include the folder name so that it is easy when chenging attribute using javascript
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Title
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
