const Engineer = require('../lib/Engineer');

test ('ensure engineer has a github account name filled in', () => {
    const engineer = new Engineer('Jim', '10', 'jim@dundermiflin.com', 'tunahalpert')
    
    expect(engineer.getGithub()).toBe('tunahalpert');
})

test ('ensure engineer has a role of engineer', () => {
    const engineer = new Engineer('Kevin', '13', 'kevin@scrantonicity.band', 'cookiemonster123')

    expect(engineer.getRole()).toBe('engineer');
})