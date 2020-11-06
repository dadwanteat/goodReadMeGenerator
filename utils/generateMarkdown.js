// function to generate markdown for README
function generateMarkdown(data) {
    return `#
    TITLE: ${data.title}

    
    DESCRIPTION
    ${data.description}
    
    TABLE OF CONTENTS
    
    ${data.tableContents}
    ${data.tableContents1}
    ${data.tableContents2}
    ${data.tableContents3}
    ${data.tableContents4}
    ${data.tableContents5}
    
    
    INSTALLATION
    ${data.installation}
    
    USAGE
    ${data.usage}
    
    LICENSE
    ${data.license}
    
    CONTRIBUTIONS
    ${data.contributing}
    
    TESTING
    ${data.tests}
    
    
    QUESTIONS
    ${data.questions}

  `;
}

module.exports = generateMarkdown;