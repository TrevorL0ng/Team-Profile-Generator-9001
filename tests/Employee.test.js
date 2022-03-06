//Bringing in the Employee module to create test environment
const Employee = require("../js/Employee");

//Creating test environment
test("Able to create new employee", () => {
    const i = new Employee();
    expect(typeof(i)).toBe("object");
});

test("Able to set name", () => {
    const name = "Theolin";
    const i = new Employee(name);
    expect(i.name).toBe(name);
});