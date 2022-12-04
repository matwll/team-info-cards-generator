const Employee = require('./employee')

class Engineer extends Employee {
    constructor(officeNumber){
        this.officeNumber = officeNumber;
        super()
    }
}