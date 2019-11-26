var express = require("express");
var app = express();

app.get("/", function (request, response)
{
    response.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function (request, response)
{
    var animal = request.params.animal.toLowerCase();
    var noises =
        {
            pig: "Oink",
            cow: "moo",
            dog: "woof woof!",
            cat: "meow",
            snake: "ssssssssss"
        };
    var noise = noises[animal];
    response.send("The " + animal + " says \"" + noise + "\"");
});

app.get("/repeat/:message/:number", function (request, response)
{
    var message = request.params.message;
    var number = Number(request.params.number);
    var output = message;
    for (var i = 1; i < number; i++)
    {
        output += " " + message;
    }
    response.send(output);
});

app.get("*", function (request, response)
{
    response.send("Sorry, page not found..What are you doing with your life?");
});

app.listen(3000, process.env.IP, function ()
{
    console.log("server listening on port 3000");
});