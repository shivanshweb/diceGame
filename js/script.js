// alert("Welcome to the game.");

// for image 1 ...............................................
var randomNumber = Math.floor((Math.random() * 6) + 1); //1 - 6
var randomImageName = "dice" + randomNumber + ".png";  // (image name) diceRandomNumber.png {from image 1 to 6}
var RandomImageSource = "images/" + randomImageName ;   // images/diceImage1 - diceimage6

var image1 =  document.querySelectorAll('img')[0];
image1.setAttribute("src",RandomImageSource);


// for image 2 .........................................................

var randomNumber2 = Math.floor((Math.random() * 6) + 1) //1 - 6 random numbers 
var randomImageName2 = "dice" + randomNumber2 + ".png"; // dice1 - 6.png 
var RandomImageSource2 = "images/" + randomImageName2;

var image2 = document.querySelectorAll('img')[1];
image2.setAttribute("src",RandomImageSource2);


if (randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (randomNumber2> randomNumber) {
 document.querySelector("h1").innerHTML = "Player 2 wins!!"
}else {
    document.querySelector("h1").innerHTML = "It is Draw"
}