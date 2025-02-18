// Task 1 - Creating an Employee Class

// Create an employee class with properties

class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    // Creating two methods to get the employee information and calculate annual salary

    getdetails() {
        return `Employee Name: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Creating an employee and getting their annual salary and console-logging it

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000)          // Output: Employee Name: Alice Johnson, ID: 101, Department: Sales, Salary: 5000
console.log(emp1.getdetails());

console.log(`Annual Salary: $${emp1.calculateAnnualSalary()}`);         // Output: Annual Salary: $60000