const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is a team Manager's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log('Please enter a valid name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is this Manager's employee ID number?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log('Please enter an employee ID number.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is this Manager's email address?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter a valid name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: "What is this Manager's office number?",
        validate: office => {
            if (office) {
                return true;
            } else {
                console.log('Please enter a valid office number.');
                return false;
            }
        }
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is an Intern's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log('Please enter a valid name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is this Intern's employee ID number?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log('Please enter an employee ID number.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is this Intern's email address?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter a valid name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What College/University is this Intern from?",
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log('Please enter a valid response.');
                return false;
            }
        }
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is an Engineer's name?",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log('Please enter a valid name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is this Engineer's employee ID number?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log('Please enter an employee ID number.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is this Engineer's email address?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter a valid name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is this Engineer's GitHub username?",
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log('Please enter a valid response.');
                return false;
            }
        }
    },
];

module.exports = { managerQuestions, internQuestions, engineerQuestions }