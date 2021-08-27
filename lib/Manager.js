const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.role = 'manager';
        this.office = office;
    };

    getOffice() {
        return this.office;
    };
}

// DO I NEED TO HAVE THE CREATE FUNCTION IN HERE AS WELL?

module.exports = Manager ;