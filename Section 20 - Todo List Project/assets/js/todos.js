//cross out todos by clicking
$("ul").on("click", "li", function ()
{
    $(this).toggleClass("completed");
});

//click on X to delete ToDo
$("ul").on("click", "span", function (event)
{
    event.stopPropagation();
    $(this).parent().fadeOut(500, function ()
    {
        $(this).remove();
    });
});

$("input[type='text']").keypress(function (event)
{
    if (event.which === 13)
    {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>");
    }
});

//need to look at solution code to get working
$(".fa-plus").click(function ()
{
    $("input[type='text']").fadeOut();
})