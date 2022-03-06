// Creation of and exporting of the Employee module
class Employee {
    constructor(name, email, id){
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = "Employee";
    }

//Returning all values created above 
    getName(){
        return this.name
    };
    getEmail(){
        return this.email
    };
    getID(){
        return this.id
    };
    getRole(){
        return this.role
    };
}

module.exports = Employee