// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown");


// Create a function that returns a license badge based on which license is passed in
// add a packet that would import generate file
// export *require* from a file const badmath = require(./badmath.js); 

// If there is no license, return an empty string

// TODO: Create an array of questions for user input
const questions = [
    {
       type: "input",
       name: "title",
       message: "What is your app title?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?" 
    },
    {
      type: "input",
      name: "username",
      message: "What is your github username?"
    },
    {
      type: "list",
      name: "license",
      message: "Pick one of the following licenses",
      choices: ["MIT", "Perl", "Apache", "IBM", "Mozilla",  "None"]
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description for your app"
    },
    {
      type: "input",
      name: "installation",
      default: "npm i",
      message: "Please enter any installation instructions"
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter any useage information."
    },
    {
      type: "input",
      name: "contribution",
      message: "Please enter any contributors"
    },
    {
      type: "input",
      name: "tests",
      default: "npm test",
      message: "Please enter any testing instructions" 
    }
];

function init() { 
// ask the user questions - array
inquirer 
   .prompt(
    questions
    /* Pass your questions in here */
  )
    // need to save the answer to the questions somehow
  .then((answers) => {
    let markdown = generateMarkdown(answers)
    writeToFile("Please README.md", markdown)
// create content from the answers, potentially put them together into one long string (call generateMarkDown function?)
// call writeToFile
}).catch((error) => {
console.log(error);
  });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
//  create the readme
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("success"))
}

// TODO: Create a function to initialize app


// Function call to initialize app
init();

