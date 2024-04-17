#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let c_value = {
    PKR: 278.40,
    UAE: 3.67,
    USD: 1,
    EUR: 0.94
};
let ans = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: chalk.bgGray("Converting from"),
        choices: ['PKR', 'UAE', 'USD', 'EUR']
    },
    {
        type: "list",
        name: "to",
        message: chalk.bgBlue("Converting to"),
        choices: ['PKR', 'UAE', 'USD', 'EUR']
    },
    {
        type: "number",
        name: "amount",
        message: chalk.bold.greenBright("Your amount to convert"),
    },
]);
console.log(c_value[ans.to] / c_value[ans.from] * ans.amount);
