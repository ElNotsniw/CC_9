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
        return `${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Creating an employee and getting their annual salary and console-logging it

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000)          // Output: Employee: Alice Johnson, ID: 101, Department: Sales, Salary: 5000
console.log(`Employee: ${emp1.getdetails()}`);

console.log(`Annual Salary: $${emp1.calculateAnnualSalary()}`);         // Output: Annual Salary: $60000



// ---------------------------------------------------------------------------------------------------------------------------------




// Task 2 - Creating a Manager Class (Inheritance & Method Overriding)

// Creating a Manager class to inherit properties from the Employee Class

class Manager extends Employee {
    constructor (name, id, department, salary, teamSize) {
        super(name, id, department, salary)
        this.teamSize = teamSize
    }

// Override the first getdetails () method from Task 1 and create a new method to calculate bonus

    getdetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary} Team Size: ${this.teamSize}`;
    }

    calculateBonus() {
        return this.salary * 12 * 0.1;
    }   

    // (Task 4) - Modifying the calculateAnnualSalary method in the Employee Class to account for bonuses for managers

    calculateAnnualSalary() {
            return (this.salary * 12) + this.calculateBonus()
        }
}


// Create a Manager that inherits properties from the Employee class and adding a new property: Team Size, and calculating bonus

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getdetails());                             // Output: Employee Name: John Smith, ID: 201, Department: IT, Salary: 8000, Team Size: 5

console.log(`Bonus: $${mgr1.calculateBonus()}`);            // Output: Bonus: $9600



// ---------------------------------------------------------------------------------------------------------------------------------




// Task 3 - Creating a Company Class

// Create a Company Class to add employees to

class Company {
    constructor(name) {
        this.name = name;
        this.employees = []
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployee() {
        this.employees.forEach(employee => {
            console.log(employee.getdetails())
        })
    }


// ---------------------------------------------------------------------------------------------------------------------------------


// Task 4 - Implementing a Payroll System

// Creating a method to calculate the total amount earned by the employees within the Company Class

    calculateTotalPayroll () {
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0)
        }




// ---------------------------------------------------------------------------------------------------------------------------------



    // Task 5 - Implementing Promotions

    // Creating a method promoteToManager to make an Employee to a Manager

    promoteToManager(employee, teamSize) {
        const promotedManager = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize)

        const index = this.employees.indexOf(employee)
        if (index !== -1) {
            this.employees[index] = promotedManager
            }
        }
    }

    


// ---------------------------------------------------------------------------------------------------------------------------------




// (Task 3): Naming the company and then console-logging the employees to associate with the company 

const company = new Company ("TechCorp");

company.addEmployee(emp1);                      // Output: Employee: Alice Johnson, ID: 101, Department: Sales, Salary: 5000
company.addEmployee(mgr1);                      // Output: Manager: John Smith, ID: 201, Department: IT, Salary: 8000, Team Size: 5
company.listEmployee();                         // Shows the two employees above in the console


// ---------------------------------------------------------------------------------------------------------------------------------



// (Task 4): Console-logging the total payroll

console.log(`Total Payroll: $${company.calculateTotalPayroll()}`)           // Output: Total Payroll: $165600



// ---------------------------------------------------------------------------------------------------------------------------------



// (Task 5) - Console-logging emp1 so that that employee becomes a Manager and have a team size of 3

company.promoteToManager(emp1, 3)
company.listEmployee()              // Output: Manager: Alice Johnson, ID: 101, Department: Sales, Salary: 5000, Team Size: 3
                                    // Output: Manager: John Smith, ID: 201, Department: IT, Salary: 8000, Team Size: 5