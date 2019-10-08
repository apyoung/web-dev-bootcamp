var obj =
    {
        name: "Chuck",
        age: 45,
        isCool: false,
        friends: ["bob", "tina"],
        add: function (x, y)
        {
            return x + y;
        }
    };

//namespace collision
function speak()
{
    return "WOOF";
}

function speak()
{
    return "MEOW";
}

var dogSpace = {};

dogSpace.speak = function ()
{
    return "WOOF";
};

var catSpace = {};

catSpace.speak = function ()
{
    return "MEOW";
};


//this keyword
var comments =
    {
        data:
            [
                "Good Job!",
                "Bye",
                "Lame..."
            ],
        print: function ()
        {
            this.data.forEach(function (el)
            {
                console.log(el);
            });
        }
    };

comments.print();