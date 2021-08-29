const fs = require('fs').promises;
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { managerQuestions, internQuestions, engineerQuestions } = require('./src/questions');
const { pageHTML, managerCardHTML, engineerCardHTML, internCardHTML, } = require('./src/page-content');

// empty array to store employee objects
const employeeArray = [];

// BEGIN FUNCTIONS TO PROMPT USER TO CREATE EMPLOYEE OBJECTS
const askToAdd = () => {
    inquirer.prompt(
        {
            type: 'confirm',
            name: 'add',
            message: 'Would you like to add another employee?',
            default: true,
        }
    // if yes, figure out what type of employee. if no, get the html code for cards
    ).then((answer) => {
        if (answer.add === true) {
            addNewEmployee();
        } if (answer.add === false) {
            console.log(employeeArray);
            getCardHTML(employeeArray);
        }
    })
}

// function to determine which employee type to add
const addNewEmployee = () => {
    inquirer.prompt({
        type: 'list',
        name: 'employee',
        message: 'What type of employee would you like to add?',
        choices: ['Manager', 'Engineer', 'Intern'],
    }).then((answer) => {
        switch(answer.employee) {
            case 'Manager':
                managerPrompt();
                break;
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
        }
    });
};

// function to ask manager questions from questions.js and then add manager object to the employeeArray
const managerPrompt = () => {
    inquirer.prompt(managerQuestions)
    .then(({ name, id, email, office}) => {
        this.manager = new Manager (name, id, email, office);
        employeeArray.push(this.manager);
        askToAdd();
    });
}

// function to ask engineer questions from questions.js and then add engineer object to the employeeArray
const engineerPrompt = () => {
    inquirer.prompt(engineerQuestions)
    .then(({ name, id, email, github}) => {
        this.engineer = new Engineer (name, id, email, github);
        employeeArray.push(this.engineer);
        askToAdd();
    });
}

// function to ask intern questions from questions.js and then add intern object to the employeeArray
const internPrompt = () => {
    inquirer.prompt(internQuestions)
    .then(({ name, id, email, school}) => {
        this.intern = new Intern (name, id, email, school);
        employeeArray.push(this.intern);
        askToAdd();
    });
}
// END PROMPTS TO ADD EMPLOYEES

// empty string to hold html code for cards
let cardHTML = '';

// function to  write the card html data, stored in cardHTML string
const getCardHTML = (employeeArray) => {
    // loop through the array of employees, writing the appropriate code from page-conent.js depending on role
    for (let i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].role === 'manager') {
            cardHTML = cardHTML + managerCardHTML(employeeArray[i]);         
        }   
        if (employeeArray[i].role === 'intern') {
            cardHTML = cardHTML + internCardHTML(employeeArray[i]);
        }   
        if (employeeArray[i].role === 'engineer') {
            cardHTML = cardHTML + engineerCardHTML(employeeArray[i]);
        }
    };
    // write the full page html content using the card html content created
    const finalHTML = pageHTML(cardHTML);
    writePage(finalHTML)
}

// write the file using the html content and copy the css the dist folder
const writePage = (finalHTML) => {
    fs.copyFile('./src/style.css', './dist/style.css')
    console.log('stylesheet copied to dist folder so your page looks great!');

    fs.writeFile('dist/index.html', finalHTML)
    console.log('Team Page Created in dist folder! Check it out now!');
}

// begins prompting the user
const init = () => {
    console.log(`
Welcome to the Team Profile Generator!
Let's get some team members added, starting with a Manager...

===================
`   );
    managerPrompt();
};

init();

module.exports = cardHTML;
