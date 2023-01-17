const employee1 = {
    "id": 123, name: "Vasya", birthYear: 2000,
    salary: 15000, address: { city: "Lod", country: "Israel" }
}
const employee2 = {
    "id": 123, name: "Vasya", birthYear: 2000,
    salary: 15000, address: { city: "Lod", country: "Israel" }
}
const employee3 = employee1;
// console.log(`employee3 == employee1 ${employee3 == employee1}`);
employee3.salary = 20000;
// console.log(`employee1 salary ${employee1.salary}`)
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
// const index = employees.indexOf( createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),) // WRONG CODE!
const index = employees.findIndex(function (empl) {
    return empl.id === 126;
})
const employee = employees.find(function (empl) {
    return empl.id == 126;
})
//HW18
function getEmployee(employees, id) {
    return employees.find(function (empl) {
        return empl.id == id;
    })
    //TODO
    //returns reference to an employee object with a given id value
}
console.log(getEmployee(employees, 125))
function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    const emplArray = [];
    employees.forEach(function (empl) {
        if (empl.salary >= salaryFrom && empl.salary <= salaryTo) {
            emplArray.push(empl);
        }
    })
    return emplArray;
}
function getEmployeeByCity(employees, city) { //adress.city
    const emplArray = []
    employees.forEach(function (empl) {
        if (empl.address.city === city) {
            emplArray.push(empl);
        }
    })
    return emplArray;
}
function getEmployeeNames(employees) {
    const emplNames = employees.map(function (empl) {
        return empl.name;
    })
    return emplNames;
}
// console.log(getEmployeeNames(employees));

function sortEmployeesByAge(employees) {//descending birthYear
    return employees.sort((a, b) => a.birthYear - b.birthYear);
}
// console.log(sortEmployeesByAge(employees));
function computeSalaryBudget(employees) {//reduce
    return employees.reduce((acc, cur) => acc + cur.salary, 0);
}
console.log(computeSalaryBudget(employees));
