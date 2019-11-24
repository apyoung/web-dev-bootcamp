// Node Exercise 2
// AVERAGE GRADE

//Create new a file, "grader.js"

//In the file define a new function named "average"
//It should take a single parameter: an array of test scores(all numbers)
//It should return the average score in the array, rounded to the nearest whole number

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68

function average(numbers)
{
    var sum = 0;
    numbers.forEach(function (number)
    {
        sum += number;
    });
    var average = sum / numbers.length;
    return Math.round(average);
}