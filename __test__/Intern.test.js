const Intern = require('../lib/Intern');

test("canSetSchool", () => {
    const intern = new Intern ("Lunice", "2345", "lu@gmail.com", "rutgers");
    expect(intern.school).toBe("rutgers")
});
test("canGetSchool", () => {
    const intern = new Intern ("Lunice", "2345", "lu@gmail.com", "rutgers");
    expect(intern.getSchool()).toBe("rutgers")
});