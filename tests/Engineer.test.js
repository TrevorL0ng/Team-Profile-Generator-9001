//Bringing in the Engineer module
const Engineer = require("../js/Engineer");

//Setting up function test environment for Engineer relevant items
test("Can get Github User", () => {
    const github = "Github";
    const i = new Engineer("Theolin", "Theolin@Strider.moc", 3, github);
    expect(i.github).toBe(github);
});

test("Can get Github User with function", () => {
    const github = "Github";
    const i = new Engineer("Theolin", "Theolin@Strider.moc", 3, github);
    expect(i.getGithub()).toBe(github);
});

test("Can get Engineer role", () => {
    const engineer = "Engineer";
    const i = new Engineer("Theolin", "Theolin@Strider.moc", 3, "Github");
    expect(i.getRole()).toBe(engineer);
});