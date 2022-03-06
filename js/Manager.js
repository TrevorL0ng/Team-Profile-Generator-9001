//Bringing in the Employee module
const Employee = require("./Employee");

//Creation and Exporting of the Manager module
class Manager extends Employee {
    constructor(name, email, id, officeNumber){
        super(name, email, id);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    };
    
//Returning the only new value not extended by Employee
    getOfficeNumber(){
        return this.officeNumber;
    }    
}

module.exports = Manager;