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


