import { Company, createEmployee } from "./service/company.js";
import { EmployeeForm } from "./ui/employee-form.js";
import { Table } from "./ui/table.js";
// import { Tabs } from "./ui/tabs.js";

const schema = [
    { columnName: 'Employee ID', fieldName: 'id' },
    { columnName: 'Name', fieldName: 'name' },
    { columnName: 'Birth Year', fieldName: 'birthYear' },
    { columnName: 'Salary (NIS)', fieldName: 'salary' },
    { columnName: 'Country', fieldName: 'country' },
    { columnName: 'City', fieldName: 'city' }
]
const company = new Company();
//HW-23
////////////////////////////////////////////////////////////////////////////////////////////////////
const formButtonElement = document.querySelector(".form-button");
const tableButtonElement = document.querySelector(".table-button");
// const tab1 = new Tabs();
// formButtonElement.addEventListener('click',tab1.addEmpl());
// let employeeForm = {};
// formButtonElement.addEventListener('click', function () {
let employeeForm = new EmployeeForm("form-section");
// });
// let tableEmployees = {};
///////////////////////////////////////////////////////////////////////////////////////////////////
// tableButtonElement.addEventListener('click',function(){
tableEmployees = new Table("table-section", "Employees", schema);
// })
function addEmployee(employeeData) {
    // console.log(employeeData)

    const employee = createEmployee(employeeData.name,
        +employeeData.birthYear, +employeeData.salary,
        employeeData.city, employeeData.country);
    const res = company.addIdToEmployee(employee);
    if (!res.message) {
        employeeData.id = res.id;// employee with id
        tableEmployees.addRow(employeeData);
    }
    return res.message;

}
employeeForm.addFormHandler(addEmployee)
