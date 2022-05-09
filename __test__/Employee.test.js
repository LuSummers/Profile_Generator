const Employee = require('../lib/Employee');
test("canMakeObject", () => {
    const employee = new Employee ("Lunice", "2345", "lu@gmail.com");
    expect(typeof(employee)).toBe("object")
});
test("canSetName", () => {
    const employee = new Employee ("Lunice", "2345", "lu@gmail.com");
    expect(employee.name).toBe("Lunice")
});
test("canGetName", () => {
    const employee = new Employee ("Lunice", "2345", "lu@gmail.com");
    expect(employee.getName()).toBe("Lunice")
});