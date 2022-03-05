//Bringing in the Employee module
const Employee = require("./Employee");

//Creation and exporting of the Engineer module
class Engineer extends Employee{
    constructor(name, email, id, github){
        super(name, email, id);
        this.github = github;
        this.role = "Engineer";
    };
//Returning the only new value not extended by Employee
    getGithub(){
        return this.github;
    } 
}

module.exports = Engineer;