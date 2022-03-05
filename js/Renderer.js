//Pulling in modules
const path = require("path");
const fs = require("fs");

//Linking the pathway of the templates using the path module
const templDir = path.resolve(__dirname, "../templ");

const render = employees => {
    const html = [];

    html.push(employees 
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer)));
    html.push(employees 
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern)));
    html.push(employees 
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager)));

    return renderMain(html.join(""));
};

//Creating the render calls with the templates for appropriate fields using fs and path
const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templDir, "engineer.html"), "utf-8");
    template = fillField(template, "name", engineer.getName());
    template = fillField(template, "role", engineer.getRole());
    template = fillField(template, "email", engineer.getEmail());
    template = fillField(template, "id", engineer.getId());
    template = fillField(template, "github", engineer.getGithub());
    return template;
}
