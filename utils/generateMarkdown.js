// function to generate markdown for README
function generateMarkdown(data) {
    return `# 
    name:${data.title}
    name:${data.description}
    name:${data.tableContents}
    name:${data.installation}
    name:${data.usage}
    name:${data.license}
    name:${data.contributing}
    name:${data.tests}
    name:${data.questions}

  `;
}

module.exports = generateMarkdown;