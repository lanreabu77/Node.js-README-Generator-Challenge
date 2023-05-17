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
        message: 'Please provide a brief description of your project:',
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
        name: 'github',
        message: 'Please enter your github username:',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email:',
    },
];

inquirer.prompt([
  // Prompt the user for input
]).then((answers) => {
  // Use the user's input to generate the README.md file
  const readmeContent = `# ${answers.title}\n\n${answers.description}\n\n${answers.installation}\n\n${answers.screenshot}`;

  // Write the generated README.md file to disk
  fs.writeFileSync('README.md', readmeContent);
});

// Function call to initialize app
init();
