// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title?",
  },
  {
    type: "input",
    name: "description",
    message: "What would a brief description be?",
  },
  {
    type: "input",
    name: "install",
    message: "What's the installation process like?",
  },
  {
    type: "input",
    name: "usage",
    message: "What would this be used ford?",
  },
  {
    type: "input",
    name: "contribution",
    message: "Which contribution guidelines would be needed?",
  },
  {
    type: "input",
    name: "test",
    message: "What are some test instruction?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github user?",
  },
  {
    type: "input",
    name: "email",
    message: "Which email address do you use?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would be used?",
    choices: [
      "Apache license 2.0",
      "Boost Software License 1.0",
      "BSD 2-clause 'Simplified' license",
      "MIT",
      "Mozilla Public License 2.0",
      "zLib License",
      "Eclipse Public License 1.0",
      "Creative Commons Attribution 4.0",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (e) => {
    if (e) {
      console.log("Error Occured");
    } else {
      console.log("Successfully README generated!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answer) => {
    const contentDisplay = generateMarkdown(answer);
    writeToFile("README.md", contentDisplay);
  });
}

// Function call to initialize app
init();
