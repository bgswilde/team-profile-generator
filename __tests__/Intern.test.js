const Intern = require('../lib/Intern');

test ('ensure the intern inserts a school', () => {
    const intern = new Intern('Andy', '44', 'narddog@dundermiflin.com', 'Cornell, heard of it?')

    expect(intern.getSchool()).toBe('Cornell, heard of it?');
})

test ('ensure intern has a role of intern', () => {
    const intern = new Intern('Ryan', '60', 'temp@dundermiflin.com', 'online')

    expect(intern.getRole()).toBe('intern');
})
