const fs = require('fs').promises;
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { managerQuestions, internQuestions, engineerQuestions } = require('./src/questions');
// const { pageStart, managerCardHTML, engineerCard, internCard, pageEnd } = require('./src/page-content');

const employeeArray = [];

// DO I RUN THE INQUIRER PROMPT, PLACING THE EMPLOYEES IN AN ARRAY, 
// THEN RUN A FOR LOOP THROUGH THE ARRAY TO WRITE THE HTML?

const managerPrompt = () => {
    inquirer.prompt(managerQuestions)
    .then(({ name, id, email, office}) => {
        this.manager = new Manager (name, id, email, office);
        employeeArray.push(this.manager);
        askToAdd();
    });
}

const engineerPrompt = () => {
    inquirer.prompt(engineerQuestions)
    .then(({ name, id, email, github}) => {
        this.engineer = new Engineer (name, id, email, github);
        employeeArray.push(this.engineer);
        askToAdd();
    });
}

const internPrompt = () => {
    inquirer.prompt(internQuestions)
    .then(({ name, id, email, school}) => {
        this.intern = new Intern (name, id, email, school);
        employeeArray.push(this.intern);
        askToAdd();
    });
}
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
        // if (answers.employee === 'Manager') {
        //     managerPrompt();
        // } if (answers.employee === 'Engineer') {
        //     engineerPrompt();
        // } if (answers.employee === 'Intern') {
        //     internPrompt();
        // }
    });
};

const askToAdd = () => {
    inquirer.prompt(
        {
            type: 'confirm',
            name: 'add',
            message: 'Would you like to add another employee?',
            default: true,
        }
    ).then((answer) => {
        if (answer.add === true) {
            addNewEmployee();
        } if (answer.add === false) {
            console.log(employeeArray);
        }
    })
}

const cardsHTML = ''

const writePage = employeeArray => {
//for loop start
    if (employeeArray[i].role === 'manager') {
        managerCardHTML(employeeArray[i])
    }  // write the card to cardsHTML
}

const init = () => {
    console.log(`
Welcome to the Team Profile Generator!
Let's get some team members added, starting with a Manager...

===================
`   );
    managerPrompt();
};

init();
