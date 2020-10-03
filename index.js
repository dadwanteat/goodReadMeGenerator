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
        message: "Describe your Application"
    },
    {
        type: "input",
        name: "tableContents",
        message: "Apply your table of Contents"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your app?"
    },
    {
        type: "input",
        name: "usage",
        message: "Include a 'usage' section."
    },
    {
        type: "input",
        name: "license",
        message: "Include applicable licensing",
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed?",
    },
    {
        type: "input",
        name: "tests",
        message: "Include product testing here",
    },
    {
        type: "input",
        name: "questions",
        message: "Include a 'questions' section",
    },
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