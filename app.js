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
//HW18

//1._______________________________________________________________
function getEmployee(employees, id) {
    return employees.find(empl => empl.id == id);
}
console.log("Get employee by id_________________________________________")
console.log(getEmployee(employees, 125))

//2._______________________________________________________________
function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    const emplArray = [];
    employees.forEach(function (empl) {
        if (empl.salary >= salaryFrom && empl.salary <= salaryTo) {
            emplArray.push(empl);
        }
    })
    return emplArray;
}
console.log("Get employee by salary_________________________________________")
console.log(getEmployeesBySalary(employees, 15000, 20000));

//3.______________________________________________________________
function getEmployeeByCity(employees, city) {
    const emplArray = []
    employees.forEach(function (empl) {
        if (empl.address.city === city) {
            emplArray.push(empl);
        }
    })
    return emplArray;
}
console.log("Get employee by city_________________________________________")
console.log(getEmployeeByCity(employees, "Tel-Aviv"));

//4._____________________________________________________________
function getEmployeeNames(employees) {
    return emplNames = employees.map((empl) => empl.name);
}
console.log("Get employee names_________________________________________")
console.log(getEmployeeNames(employees));

//5._____________________________________________________________
function sortEmployeesByAge(employees) {//descending birthYear
    return employees.sort((a, b) => b.birthYear - a.birthYear);
}
console.log("Sort employees by age_________________________________________")
console.log(sortEmployeesByAge(employees));


//6._____________________________________________________________
function computeSalaryBudget(employees) {//reduce
    return employees.reduce((acc, cur) => acc + cur.salary, 0);
}
console.log("Compute salary budget_________________________________________")
console.log(computeSalaryBudget(employees)+" NIS");
