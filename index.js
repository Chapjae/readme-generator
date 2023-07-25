const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown");

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
  inquirer 
   .prompt(questions)
  //  take user answers from prompts and pass them to generateMarkdown()
    .then((answers) => {
      let markdown = generateMarkdown(answers)
  // once answers are done, pass to writeToFile
      writeToFile("Please README.md", markdown)
  }).catch((error) => {
  console.log(error);
    });
  }

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("success"))
}

init();

