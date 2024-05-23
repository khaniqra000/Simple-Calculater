import inquirer from "inquirer";

// Asking Questions From User Through Inquirer
let Answers = await inquirer.prompt([
    {Message: "Enter First Number", type: "number", name: "FirstNumber"},
    {Message: "Enter Second Number", type: "number", name: "SecondNumber"},
    {
        message : "Select one operators to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    }
]);

// Conditional Statement If-Else

if(Answers.operator ==="Addition"){
    console.log(Answers.FirstNumber + Answers.SecondNumber);
}
else if (Answers.operator === "Subtractions"){
    console.log(Answers.FirstNumber - Answers.SecondNumber)
}
else if (Answers.operator === "Multiplication"){
    console.log(Answers.FirstNumber * Answers.SecondNumber)
}
else if (Answers.operator === "Division"){
    console.log(Answers.FirstNumber / Answers.SecondNumber)
}
else {
    console.log("Invalid Input")
}