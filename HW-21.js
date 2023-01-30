/* HW #21 */
class Employee {
    constructor(id, name, birthYear, salary, city, country) {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
        this.salary = salary;
        this.address = { city, country };
    }
}

class Company {
    #employees
    constructor() {
        this.#employees = {};
    }
    addEmployee(empl) {
        return this.employees[empl.id] ? false : (this.#employees[empl.id] = empl, true);
    }
    removeEmployee(id) {
        return this.#employees[id] ? (delete this.#employees[id], true) : false;
    }
    getEmployeesByCountry(country) {
        return Object.values(this.#employees).filter(empl => empl.address.country == country);
    }
    getEmployeesBySalaries(salaryFrom, salaryTo) {
        return Object.values(this.#employees).filter(empl => empl.salary >= salaryFrom && empl.salary <= salaryTo);
    }
    getEmployeesByAge(age) {
        const currentYear = new Date().getFullYear();
        return Object.values(this.employees).filter(employee => currentYear - employee.birthYear === age);
    }
    get employees() {
        return this.#employees;
    }
}

const myCompany = new Company();

myCompany.addEmployee(emp1 = new Employee(123, "Vasya", 2000, 15000, "Lod", "Israel"));
myCompany.addEmployee(emp2 = new Employee(124, "David", 1975, 15500, "Tel Aviv", "Israel"));
myCompany.addEmployee(emp3 = new Employee(125, "Sara", 1985, 20000, "New York", "USA"));
myCompany.addEmployee(emp4 = new Employee(126, "Abraham", 1990, 13000, "London", "UK"));
myCompany.addEmployee(emp5 = new Employee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"));
myCompany.addEmployee(emp6 = new Employee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"));
myCompany.addEmployee(emp7 = new Employee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"));
myCompany.addEmployee(emp8 = new Employee(130, "Victor", 2003, 10000, "Arad", "Israel"));


// console.log(myCompany.employees);
// console.log(myCompany.removeEmployee(125));
// console.log(myCompany.employees);
// console.log(getEmployeesCountry(Israel))
// console.log(myCompany.getEmployeesCountry("Gorgia"))
// console.log(myCompany.getEmployeesBySalaries(15400, 15600))
// console.log(myCompany.employees);
console.log(myCompany.getEmployeesByAge(23));

