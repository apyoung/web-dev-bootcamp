var h1 = document.querySelector("h1");
h1.addEventListener("click", function ()
{
    h1.style.background = "orange";
});

document.querySelector("ul").addEventListener("click", function()
{
    console.log("You clicked the UL!");
});

var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++)
{
    lis[i].addEventListener("click", function()
    {
        this.style.color = "pink";
    })
}