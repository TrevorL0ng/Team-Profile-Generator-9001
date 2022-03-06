//Bringing in Intern module
const Intern = require("../js/Intern");

//Setting up relevant Intern tests
test("Able to get school", () => {
    const school = "UNCC";
    const i = new Intern("Theolin", "Theolin@Strider.moc", 3, school);
    expect(i.school).toBe(school);
});

test("Able to get school with function", () => {
    const school = "UNCC";
    const i = new Intern("Theolin", "Theolin@Strider.moc", 3, school);
    expect(i.getSchool()).toBe(school);
});

test("Able to get Intern role with function", () => {
    const role = "Intern";
    const i = new Intern("Theolin", "Theolin@Strider.moc", 3);
    expect(i.getRole()).toBe(role);
});