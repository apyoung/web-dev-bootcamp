var button = document.querySelector("button");
// var isBlue = false;

button.addEventListener("click", changeBackgroundColor);

/*
function changeBackgroundColor()
{
    if (isBlue)
    {
        document.body.style.background = "white";
    } else
    {
        document.body.style.background = "blue";
    }
    isBlue = !isBlue;
}*/

function changeBackgroundColor()
{
    document.body.classList.toggle("blue");
}