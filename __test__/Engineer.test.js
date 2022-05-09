const Engineer = require('../lib/Engineer');

test("canSetGithub", () => {
    const engineer = new Engineer ("Lunice", "2345", "lu@gmail.com", "lusummer@github");
    expect(engineer.github).toBe("lusummer@github")
});
test("canGetGithub", () => {
    const engineer = new Engineer ("Lunice", "2345", "lu@gmail.com", "lusummer@github");
    expect(engineer.getGithub()).toBe("lusummer@github")
});