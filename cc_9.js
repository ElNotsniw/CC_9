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





// Task 2 - Creating a Manager Class (Inheritance & Method Overriding)

// Creating a Manager class to inherit properties from the Employee Class

class Manager extends Employee {
    constructor (name, id, department, salary, teamSize) {
        super(name, id, department, salary)
        this.teamSize = teamSize
    }

// Override the first getdetails () method from Task 1 and create a new method to calculate bonus

    getdetails() {
        return `${super.getdetails()}, Team Size: ${this.teamSize}`;
    }

    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1;
    }
}

// Create a Manager that inherits properties from the Employee class and adding a new property: Team Size, and calculating bonus

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getdetails());

console.log(`Bonus: $${mgr1.calculateBonus()}`);