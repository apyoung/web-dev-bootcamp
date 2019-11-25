var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function (request, response)
{
    response.send("Hi there!");
});

// "/bye" => "Goodbye"
app.get("/bye", function (request, response)
{
    response.send("Goodbye!!");
});

// "/dog" => "MEOW!"
app.get("/dog", function (request, response)
{
    console.log("SOMEONE MADE A REQUEST TO /DOG!!!");
    response.send("MEOW!");
});

//
app.get("/r/:subRedditName", function (request, response)
{
    var subreddit = request.params.subRedditName;
    response.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

//
app.get("/r/:subRedditName/comments/:id/:title/", function (request, response)
{
    response.send("WELCOME TO THE COMMENTS PAGE!");
});

// catch-all route
app.get("*", function (request, response)
{
    response.send("YOU ARE A STAR!!!");
});

// Tell express to listen for requests (start server)
app.listen(3000, process.env.IP, function()
{
    console.log("Server has started!!!");
});
