//Modules, Assemble!
const Employee = require("./js/Employee");
const Engineer = require("./js/Engineer");
const Intern = require("./js/Intern");
const Manager = require("./js/Manager");
const render = require("./js/Renderer");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");

//Setting the output of the 'dist' folder for completed Team list
const outputDir = path.resolve(__dirname, "dist");
const output = path.join(outputDir, "main.html");

//Questions about team to create final list
const teammates = [];

//Starting application with questions to add members to team
function start(){
    addTeammate();
}

//Function called when teammates are to be added
function addTeammate(){
    inquirer.prompt([{
        type:"list",
        name:"role",
        message:"Add an Engineer, Intern, or Manager to the team",
        choices:["Engineer", "Intern", "Manager", "None"]
    }]).then (val => {
        if (val.role === "Engineer"){
            engineerInfo();
        }
        else if(val.role === "Intern"){
            internInfo();
        }
        else if(val.role === "Manager"){
            managerInfo();
        }
        else{
            writeList();
        }
    })
}

//Function to add an Engineer
function engineerInfo(){
    inquirer.prompt([{
        type:"input", 
        name:"name",
        message:"What is this Engineer's name?"},
        {
            type:"input",
            name:"email",
            message:"What is this Engineer's email?"},
        {
            type:"input",
            name:"id",
            message:"What is this Engineer's id?"},
        {
            type:"input",
            name:"github",
            message:"What is this Engineer's Github Username?"}

        ]).then(val => {
            const engineer = new Engineer(val.name, val.email, val.id, val.gihub);
            teammates.push(engineer);
            console.log(engineer);
            addTeammate();
        })
};

