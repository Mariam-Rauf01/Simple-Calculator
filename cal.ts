#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function performCalculation() {
    const answer = await inquirer.prompt([
        { message: "Enter " + chalk.yellow("first number") + ":", type: "number", name: "firstNumber" },
        { message: "Enter " + chalk.yellow("second number") + ":", type: "number", name: "secondNumber" },
        {
            message: "Select one of the operators to perform operation:",
            type: "list",
            name: "operator",
            choices: [chalk.green("Addition"), chalk.red("Subtraction"), chalk.blue("Multiplication"), chalk.cyan("Division")],
        },
    ]);

    let result;
    if (answer.operator === chalk.green("Addition")) {
        result = answer.firstNumber + answer.secondNumber;
    } else if (answer.operator === chalk.red("Subtraction")) {
        result = answer.firstNumber - answer.secondNumber;
    } else if (answer.operator === chalk.blue("Multiplication")) {
        result = answer.firstNumber * answer.secondNumber;
    } else if (answer.operator === chalk.cyan("Division")) {
        result = answer.firstNumber / answer.secondNumber;
    } else {
        console.log(chalk.red("Please select a valid operator."));
        return;
    }

    console.log(chalk.yellow.bold("Result: ") + chalk.greenBright.bold(result));

    const anotherTaskAnswer = await inquirer.prompt([
        {
            type: "confirm",
            name: "anotherTask",
            message: "Do you want to perform another task?",
            default: false,
        },
    ]);

    if (anotherTaskAnswer.anotherTask) {
        await performCalculation();
    } else {
        console.log(chalk.yellow("Goodbye!"));
    }
}

performCalculation();