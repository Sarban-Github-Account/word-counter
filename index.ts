#! /usr/bin/env node

//this line is called a shebang, it tells the OS to run it with nodejs

//import the 'inquirer' module, which is a command line interface for Node .js
import inquirer from "inquirer"

//Declare a constant "answers" and assign it to the result of inquirer.prompt function

const answers: {
    Sentance: string
}= await inquirer.prompt([
    {
        name: "Sentance",
        type: "input",
        message: "Enter your sentence to count the word:"

    }
])
const words = answers.Sentance.trim().split(" ")

//print the array of words to the console
console.log(words)

//print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`); 