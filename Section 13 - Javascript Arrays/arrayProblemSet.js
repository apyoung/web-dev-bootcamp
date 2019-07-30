console.log("PROBLEM: printReverse");
printReverse([1, 2, 3, 4]);
printReverse(["a", "b", "c"]);

function printReverse(array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        console.log(array[i]);
    }
}

console.log("");
console.log("PROBLEM: isUniform");

console.log(isUniform([1, 1, 1, 1]));
console.log(isUniform([2, 1, 1, 1]));
console.log(isUniform(["a", "b", "p"]));
console.log(isUniform(["b", "b", "b"]));

function isUniform(array)
{
    if (array.length === 1)
    {
        return true;
    }

    for (var i = 1; i < array.length; i++)
    {
        if (array[i] !== array[0])
        {
            return false;
        }
    }

    return true;
}

console.log("");
console.log("PROBLEM: sumArray");

console.log(sumArray([1, 2, 3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5, 100]));

function sumArray(array)
{
    var summation = 0;
    array.forEach(function (numbers)
    {
        summation += numbers;
    });
    return summation;
}

console.log("");
console.log("PROBLEM: max");

console.log(max([1, 2, 3]));
console.log(max([10, 3, 10, 4]));
console.log(max([-5, 100]));

function max(array)
{
    if (array.length === 1)
    {
        return (array[0]);
    }

    var max = array[0];

    for (var i = 1; i < array.length; i++)
    {
        if (array[i] > max)
        {
            max = array[i];
        }
    }

    return max;
}
