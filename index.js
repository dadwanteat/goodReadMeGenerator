// array of questions for user
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of your README?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your README"
    },
    {
        type: "input",
        name: "tableContents",
        message: ""
    },
    {
        type: "input",
        name: "linkedin",
        message: "What is your linkedin username?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    generateMarkdown
    fs.writeFile("README.md", repoNamesStr, function(err) {
        if (err) {
            throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function(res) {
            let markdown = (generateMarkdown(res));
            console.log(markdown);
        })
}


// function call to initialize program
init();