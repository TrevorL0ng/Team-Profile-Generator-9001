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

test("Able to get email", () => {
    const email = "Theolin@Strider.moc";
    const i = new Employee("Theolin", email);
    expect(i.email).toBe(email);
});

test("Able to get ID", () => {
    const id = 3;
    const i = new Employee("Theolin", "Theolin@Strider.moc", id);
    expect(i.id).toBe(id);
});