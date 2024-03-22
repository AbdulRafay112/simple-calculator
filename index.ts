#! /usr/bin/env node
// SHABANG
// dependencies woh hoti hain jb hamara project final hojae or bnjae to us ko chalnay kay liye dependencies ki zarorat parh thi hai
// jb hamara project bn raha hota hai to is duraan hamein dev dependencies ki zororat prhti hai lekin jb project bnjtata hai to is ki zarorat nhi prhti
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  {message: "enter second number", type: "number", name: "secondNumber"},
  {message: "Select one of the operators to perform operation" , type: "list" , name: "operator" , choices:["Addition" , "Substraction" , "Multiplication" , "Division"] }
]);

if (answer.operator === "Addition"){
    console.log( answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Substraction"){
    console.log( answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication"){
    console.log( answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division"){
    console.log( answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}

