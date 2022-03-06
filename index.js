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

function start(){
    addTeammate();
}