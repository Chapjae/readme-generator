// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown");

// Create a function that returns a license badge based on which license is passed in
// add a packet that would import generate file
// export *require* from a file const badmath = require(./badmath.js); 

// If there is no license, return an empty string

// TODO: Create an array of questions for user input
const questions = [
    {
       type: "input",
       name: "apptitle",
       message: "What is your app title?",
    },
    {
        type: "list",
        name: "license",
        message: "Pick one of the following licenses",
        choices: ["MIT", "Apache", "IBM"]
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
    console.log(answers)
    let markdown = generateMarkdown(answers)
    
// create content from the answers, potentially put them together into one long string (call generateMarkDown function?)
// call writeToFile
}).catch((error) => {
console.log(error);
  });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
//  create the readme
}

// TODO: Create a function to initialize app


// Function call to initialize app
init();
