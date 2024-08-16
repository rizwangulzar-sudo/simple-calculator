import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditional statement.
if (asnwer.operator === "Addition") {
    console.log("your value is" + asnwer.firstNumber + asnwer.secondNumber);
}
