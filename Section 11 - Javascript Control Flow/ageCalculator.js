var age = Number(prompt("How old are you son?"));

console.log("Check if age is negative...");
if (age < 0)
{
    console.log("  Age is negative");
} else
{
    console.log("  Age is positive");
}

console.log("Check if age is 21...");
if (age === 21)
{
    console.log(" Happy 21st Birthday!");
} else
{
    console.log("  No 21st birthday for you!");
}

console.log("Check if age is odd...");
if ((age % 2) !== 0)
{
    console.log("  your age is odd!");
} else
{
    console.log("  your age is even!");
}

console.log("Check if age is perfect square...");
if (age % Math.sqrt(age) === 0)
{
    console.log("  perfect square!");
} else
{
    console.log("  not perfect square");
}

