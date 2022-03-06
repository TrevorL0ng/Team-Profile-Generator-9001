//Bringing in Manager module
const Manager = require("../js/Manager");

//Setting up relevant Manager tests
test("Able to get Office Number", () => {
    const officeNo = 8545;
    const i = new Manager("Theolin", "Theolin@Strider.moc", 3, officeNo);
    expect(i.officeNumber).toBe(officeNo);
});

test("Able to get Office Number with function", () => {
    const officeNo = "UNCC";
    const i = new Manager("Theolin", "Theolin@Strider.moc", 3, officeNo);
    expect(i.getOfficeNumber()).toBe(officeNo);
});

test("Able to get Manager role with function", () => {
    const role = "Manager";
    const i = new Manager("Theolin", "Theolin@Strider.moc", 3);
    expect(i.getRole()).toBe(role);
});