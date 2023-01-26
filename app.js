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

let field = "salary";
// console.log(employees[0][field])
function displayFieldValue(employees, index, field) {//                                       'salary'
    console.log(employees[index][field]); // prints a value from employees[given index] and [given field]
}
// displayFieldValue(employees, 3, "id")
// employees[0].salary = 20000;
// employees[0].department = "QA"; //adds field to employees[0] with "QA" value
// // console.log(employees[0]);
// displayFieldValue(employees, 0, "department");
// delete employees[0].department // deletes field department from employee[0]
// displayFieldValue(employees, 0, "department");

function computeMinMaxAvgSalary(employees) {
    const res = employees.reduce((res, empl) => {
        if (res.minSalary > empl.salary) {
            res.minSalary = empl.salary;
        } else if (res.maxSalary < empl.salary) {
            res.maxSalary = empl.salary;
        }
        res.avgSalary += empl.salary;
        return res;
    }, { minSalary: employees[0].salary, maxSalary: employees[0].salary, avgSalary: 0 });
    res.avgSalary /= employees.length;
    return res;
}
function displayValue(minMaxAvg, field) {
    console.log(`value of the field ${field} is ${minMaxAvg[field]}`)
}
const minMaxAvg = computeMinMaxAvgSalary(employees);
displayValue(minMaxAvg, "avgSalary");
displayValue(minMaxAvg, "minSalary");
displayValue(minMaxAvg, "maxSalary");
const strings = ['b', 'xyz', 'lmn', 'xyz', 'lmn', 'xyz', 'a'];
//assumed result:
//xyz -> 3
//lmn -> 2
//a->1
//b->1
function displayStringOccurrences(strings) {
    const stringOccurrences = getStringOccurrences(strings);//      [[key,value][key,value][key,value][key,value]]
    const arrayOccurrences = Object.entries(stringOccurrences); //get array of arrays where each index is a key and a value
    arrayOccurrences.sort(stringComp);
    arrayOccurrences.forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`));
}
function getStringOccurrences(strings) {
    const res = {};
    strings.forEach(str => {
        if (!res[str]) { //if the field is not exist in obj
            res[str] = 1;//create a field and assign 1
        } else {
            res[str]++;//if the field exists in obj, increment it by 1 (++)
        }
    })
    return res;
}
function stringComp(entry1, entry2) {
    let res = entry2[1] - entry1[1];
    if (res == 0) {
        res = entry1[0] < entry2[0] ? -1 : 1; // alphabetic sorting of strings
    }
    return res;
}
displayStringOccurrences(strings);
