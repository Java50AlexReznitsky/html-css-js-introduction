// const rectangle = {
//     "width": 20, "height": 10, square: function () {
//         return this.width * this.height;
//     }, perimeter: () => { return this.width * 2 + this.height * 2 }
// };
// // console.log(rectangle.square())
// console.log(rectangle.perimeter())
// console.log(this)
// this.width = 100;//global
// this.height = 200;//global
// console.log(this)//global this

class Rectangle {
    #width;
    #height;
    constructor(width, height) {
        this.#height = height;
        this.#width = width;
    }
    square() {
        return this.#height * this.#width
    }
    perimeter() {
        return this.#width * 2 + this.#height * 2;
    }
}
const rectangle1 = new Rectangle(3, 4);
console.log(rectangle1.square());
console.log(rectangle1.perimeter());

/*
HW-21
Employee  structure and  function createEmployee taken from previous HW
*/
function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country } }
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel-Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New-York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Georgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat-Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")
]

class Company {
    #employees//object key:<id value>,value:reference to Employee object
    constructor() {
        this.#employees = {};
    }
    addEmployee(empl) {
        //TODO
        //adds employee into employees obj
        //returns true if added new employee object
        //returns false if employee with given id value already exists
    }
    removeEmployee(id) {
        //TODO
        //removes employee with a given id from employees object
        //returns true if removed
        //returns false if employee with the id does not exist
    }
    getEmployeesCountry(country) {
        //TODO
        //returns array of employee object having field "country" equaled to a given country
    }
    getEmployeesByAge(age) {
        //TODO
        //returns array of employees object with a given age
    }
    getEmployeesBySalaries(salaryFrom, salaryTo) {
        //TODO
        //returns array of employee objects with salary with a given closed range(<=,>=)
        //if salaryFrom < 0, then get employees with salary less or equal salaryTo
        //if salaryTo,0, then get employees with salary greater or equal salaryFrom
        //if salary from < 0 && salaryTo < 0, then get all employees
    }
}
