const employee1 = { id: 123, address: { city: "Lod", country: "Israel" } };
const employee2 = { id: 123, address: { city: "Lod", country: "Israel" } };
const employee1json = JSON.stringify(employee1);//creates string from obj
const employee2json = JSON.stringify(employee2);
console.log(employee1json === employee2json);
console.log(employee1json);
const employee3 = { ...employee1 };//creates clone, not a shallow copy
// employee3.id = 124;
// employee3.address.city = "Rehovot";
// console.log(employee1.address.city);
const employee4 = JSON.parse(employee1json);//creates object from string,absolute copy
employee4.address.city = 'Rehovot';
console.log(employee1.address.city);
console.log(employee4.address.city);
console.log(employee4);