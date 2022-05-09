const Manager = require('../lib/Manager');

test("canSetOfficeNumber", () => {
    const manager = new Manager ("Lunice", "2345", "lu@gmail.com", "201");
    expect(manager.officeNumber).toBe("201")
});
test("canGetOfficeNumber", () => {
    const manager = new Manager ("Lunice", "2345", "lu@gmail.com", "201");
    expect(manager.getOfficeNumber()).toBe("201")
});