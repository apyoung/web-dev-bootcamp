//create secret number
var secretNumber = 4;

//ask user for a guess
var guess = Number(prompt("Guess a number"));

//check guess
if (guess === secretNumber)
{
    alert("You got it right");
} else if (guess > secretNumber)
{
    alert("You guessed too high");
} else
{
    alert("You guessed too low");
}