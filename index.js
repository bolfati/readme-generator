const inquirer = require("inquirer");
const fs = require("fs");
const badges = [];

const questions = ["What is your project called?", "Project description", "Table Of Contents", "Installation", "Usage", "Credits", "License", "Tests", "Questions"];
const devQuestions = ["Provide your Github Link - ", "Provide your Email Address"]

function writeToFile(response) {
    response.license.forEach((license) => {
        switch (license) {
            case "MIT Licence":
            badges.push("![Static Badge](https://img.shields.io/badge/Mit%20License-blue)");
            break;

            case "Apache License":
            badges.push("![Static Badge](https://img.shields.io/badge/Apache%20License-red)");
            break;

            case "Eclipse Public License":
            badges.push("![Static Badge](https://img.shields.io/badge/Eclipse%20License-green)");
            break;

            case "Boost Software License":
            badges.push("![Static Badge](https://img.shields.io/badge/BoostSoftware%20License-yellow)");
            break;

            case "GNU General Public License":
            badges.push("![Static Badge](https://img.shields.io/badge/GNU%20License-purple)");
            break;

        
        }
    });

    fs.appendFile('READMETest.md', `# ${response.project}  <span style="float: right;">${badges.join('')}</span>
    
## Description:

-${response.description}

## Table of Contents:

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation:

${response.install}

## Usage:

${response.usage}

## Credits:

${response.credits}

## License:

${response.license}

## Tests:

${response.test}

## Questions:

Contact Information

Github Link: https://github.com/${response.questions}

Email: [${response.questions1}](${response.questions1})
 
 
 
 \n`, note =>  note ? console.error(note) : console.log("README Created"))
}

function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'project',
          },
          {
            type: 'input',
            message: questions[1],
            name: 'description',
          },
         
          {
            type: 'input',
            message: questions[3],
            name: 'install',
          },
          {
            type: 'input',
            message: questions[4],
            name: 'usage',
          },
          {
            type: 'input',
            message: questions[5],
            name: 'credits',
          },
          {
            type: 'checkbox', 
            message: questions[6],
            name: 'license',
            choices: ['Mit License', 'Apache License', 'Eclipse Public License', 'Boost Software License', 'GNU General Public License']
          },
          {
            type: 'input',
            message: questions[7],
            name: 'test',
          },
          {
            type: 'input',
            message: devQuestions[0],
            name: 'questions',
          },
          {
            type: 'input',
            message: devQuestions[1],
            name: 'questions1',
          },
    ])
    .then((response) => writeToFile(response));
}
init();