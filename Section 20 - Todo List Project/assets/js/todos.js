//cross out todos by clicking
$("li").click(function ()
{
    $(this).toggleClass("completed");
});

//click on X to delete ToDo
$("span").click(function (event)
{
   event.stopPropagation();
   $(this).parent().fadeOut(500, function ()
   {
       $(this).remove();
   });
});