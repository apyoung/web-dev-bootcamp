var gameOver = false;
var playerOneButton = document.querySelector("#playerOne");
var playerTwoButton = document.querySelector("#playerTwo");
var resetButton = document.querySelector("#reset");
var playerOneDisplay = document.querySelector("#playerOneDisplay");
var playerTwoDisplay = document.querySelector("#playerTwoDisplay");
var numberInput = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector("p span");
var playerOneScore = 0;
var playerTwoScore = 0;
var winningScore = 5;

playerOneButton.addEventListener("click", function ()
{
    if (!gameOver)
    {
        playerOneScore++;
        playerOneDisplay.textContent = playerOneScore;
        if (playerOneScore === winningScore)
        {
            gameOver = true;
            playerOneDisplay.classList.add("winner");
        }
    }

});

playerTwoButton.addEventListener("click", function ()
{
    if (!gameOver)
    {
        playerTwoScore++;
        playerTwoDisplay.textContent = playerTwoScore;
        if (playerTwoScore === winningScore)
        {
            gameOver = true;
            playerTwoDisplay.classList.add("winner");
        }
    }
});

resetButton.addEventListener("click", reset);

function reset()
{
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneDisplay.textContent = playerOneScore;
    playerTwoDisplay.textContent = playerTwoScore;
    playerOneDisplay.classList.remove("winner");
    playerTwoDisplay.classList.remove("winner");
    gameOver = false;
}

numberInput.addEventListener("change", function ()
{
    winningScoreDisplay.textContent = numberInput.value;
    winningScore = Number(numberInput.value);
    reset();
});