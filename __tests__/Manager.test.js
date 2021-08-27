const Manager = require('../lib/Manager');

test ('ensure that the manager has an office number', () => {
    const manager = new Manager('Michael', '5', 'michaelscarn@dundermiflin.com', '1a');

    expect(manager.getOffice()).toBe('1a');
});

test ('ensure that the manager has a role of manager', () => {
    const manager = new Manager('Dwight', '9', 'assistanttotheregionalmanager@dundermiflin.com', "Michael's Office");

    expect(manager.getRole()).toBe('manager');
});