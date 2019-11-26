var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (request, response)
{
    response.render("home");
});

app.get("/fallinlovewith/:thing", function (request, response)
{
    var thing = request.params.thing;
    response.render("love", {thingVar: thing});
});

app.get("/posts", function (request, response)
{
    var posts =
        [
            {title: "Post 1", author: "Susy"},
            {title: "My adorable pet bunny", author: "George"},
            {title: "can  you believe this minpin", author: "Charlie"}
        ];

    response.render("posts", {posts: posts});
});

app.listen(3000, process.env.IP, function ()
{
    console.log("server listening on port 3000");
});