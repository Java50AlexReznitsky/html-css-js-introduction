const employee1 = {123: { name: "Vasya", birthYear: 2000, salary: 15000, address: { city: "Lod", country: "Israel" } },
   
}
function createEmployee(id, name, birthYear, salary, city, country) {
    return { [id]: { name, birthYear, salary, address: { city, country } } }
}
class Employee {
    #id;
    #name;
    #birthYear;
    #salary;
    #address;
    #city;
    #country;
    constructor(id, name, birthYear, salary, address) {//, address, city, country)
        this.#id = id;
        this.#name = name;
        this.#birthYear = birthYear;
        this.#salary = salary;
        this.#address = address;
        this.#city = address.city;
        this.#country = address.country;
    }
    getId() {
        return this.#id;
    }
    getCity() {
        return this.#city;
    }
}
const empl2 = new Employee(124, "Sasha", 1995, 10000, { city: "Natania", country: "Israel" });
const empl1 = new Employee(123, "John", 1990, 20000, { city: "Rehovot", country: "Israel" });
// console.log(empl1.address);
// empl1.city = "Beer-Sheva";
console.log(empl1);
