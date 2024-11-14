"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var myBalance = 10000; //Dollar
var myPin = 1234;
var pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
console.log(pinAnswer);
//12345 ===1234 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    var operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdrawl", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        var amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        console.log(amountAns.amount);
        // =, +=, -=
        myBalance -= amountAns.amount;
        console.log("your remaining balance is: " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is: " + myBalance);
    }
    else {
        console.log("Incorrect pin number");
    }
}
