var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
    setupModeButtons();
    setupSquareButtons();
    reset();
}

function setupModeButtons()
{
    for (var i = 0; i < modeButtons.length; i++)
    {
        modeButtons[i].addEventListener("click", function ()
        {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        })
    }
}

function setupSquareButtons()
{
    for (var i = 0; i < squares.length; i++)
    {
        squares[i].addEventListener("click", function ()
        {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor)
            {
                messageDisplay.textContent = "Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            } else
            {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function reset()
{
    //generate new colors
    colors = generateRandomColors(numberOfSquares);

    //pick new random color from array
    pickedColor = pickColor();

    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;

    //change colors of squares
    for (var i = 0; i < squares.length; i++)
    {
        if (colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else
        {
            squares[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", reset);

function changeColors(color)
{
    for (var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor()
{
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(number)
{
    var colorArray = [];

    for (var i = 0; i < number; i++)
    {
        colorArray.push(randomColor());
    }

    return colorArray;
}

function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}