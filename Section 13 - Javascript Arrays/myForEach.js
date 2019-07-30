function myForEach(array, someFunction)
{
    for (var i = 0; i < array.length; i++)
    {
        someFunction(array[i]);
    }
}

var colors = ["red", "orange", "yellow"];

myForEach(colors, function (color)
{
    console.log(color);
});

Array.prototype.myForEach = function (func)
{
    for (var i = 0; i < this.length; i++)
    {
        func(this[i]);
    }
};

var friends = ["charlie", "dave", "george", "tim"];

friends.myForEach(function(name){
    console.log("Hello " + name);
});