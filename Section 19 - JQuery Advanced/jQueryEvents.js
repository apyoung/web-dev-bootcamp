$("h1").on("click", function ()
{
    $(this).css("color", "purple");
});

$("button").click(function ()
{
    $(this).css("background", "pink");
    var text = $(this).text();
    console.log("You clicked " + text);
});

$("input").on("keypress", function ()
{
    console.log("keypressed");
});

$("button").on("mouseenter", function ()
{
    $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function ()
{
    $(this).css("font-weight", "normal");
});