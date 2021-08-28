const Employee = require('../lib/Employee');

test('makes sure employee has a name', () => {
    const employee = new Employee('Creed', '1', 'creed@dundermiflin.com');

    expect(employee.getName()).toBe('Creed');
}) 

test('makes sure employee has an ID', () => {
    const employee = new Employee('Kelly', '35', 'kelly@dundermiflin.com');

    expect(employee.getId()).toBe('35');
})

test('makes sure employee has an email address', () => {
    const employee = new Employee('Daryl', '42', 'daryl@dundermiflin.com');

    expect(employee.getEmail()).toBe('daryl@dundermiflin.com');
})

test('makes sure employee has a role assigned', () => {
    const employee = new Employee('Pam', '21', 'pam@dundermiflin.com');

    expect(employee.getRole()).toBe('employee');
})

