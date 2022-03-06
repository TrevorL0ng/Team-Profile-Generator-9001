//Bringing in the Employee module to create test environment
const Employee = require("../js/Employee");

//Creating test environment
test("Able to create new employee", () => {
    const i = new Employee();
    expect(typeof(i)).toBe("object");
});