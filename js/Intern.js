//Bringing in the Employee module
const Employee = require("./Employee");

//Creation and exporting of the Intern module
class Intern extends Employee {
    constructor(name, email, id, school){
        super(name, email, id);
        this.school = school;
        this.role = "Intern";
    };

//Returning new value created above not extended by Employee
    getSchool(){
        return this.school;
    }    
}

module.exports = Intern;