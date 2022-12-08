// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    question: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    question: "Please enter a description for the project",
    name: "description",
  },
  {
    type: "input",
    question: "Please enter any installation instructions",
    name: "installation",
  },
  {
    type: "input",
    question: "How do you use the project?",
    name: "usage",
  },
  {
    type: "input",
    question: "Please state contribution guidelines",
    name: "contribution",
  },
  {
    type: "input",
    question: "Enter any test instructions",
    name: "test",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
