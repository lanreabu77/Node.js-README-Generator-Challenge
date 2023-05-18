// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provied a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
    
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Would you like to include a screenshot of your project?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username:',
    
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md file generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readme = `
        # ${answers.title}

        ## Description

        ${answers.description}

        ## Installation

        ${answers.installation}

        ## Screenshot

        ${answers.screenshot}

        `;
            writeToFile('README.md', readme);
    });
}

// Function call to initialize app
init();
