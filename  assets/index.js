// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
    validate(answer) {
      if (answer.length < 1) {
        return console.log("A title is required");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter a description for the project",
    name: "description",
    validate(answer) {
      if (answer.length < 1) {
        return console.log("A description is required");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please enter any installation instructions",
    name: "installation",
    validate(answer) {
      if (answer.length < 1) {
        return console.log("Installation instructions required");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "How do you use the project?",
    name: "usage",
    validate(answer) {
      if (answer.length < 1) {
        return console.log("Usage information is required");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Please state contribution guidelines",
    name: "contribution",
  },
  {
    type: "input",
    message: "Enter any test instructions",
    name: "test",
  },
  {
    type: "list",
    message: "Select a license",
    name: "license",
    choices: ["No License", "Apache_2.0", "MIT", "CC0-1.0", "Unlicense"],
  },
  {
    type: "input",
    message: "Enter your GitHub username",
    name: "username",
    validate(answer) {
      if (answer.length < 1) {
        return console.log("GitHub username is required");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Enter your email address",
    name: "email",
    validate(answer) {
      if (answer.length < 1) {
        return console.log("Email address is required");
      }
      return true;
    },
  },
];

// // TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  fs.writeFile(fileName, generateMarkdown(answers), (err) =>
    err
      ? console.log(err, "oops something went wrong!")
      : console.log("success")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    let filename = "newREADME.md";
    writeToFile(filename, answers);
  });
}

// Function call to initialize app
init();
