//HW-19
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
function getMostPopulatedCountry(employees) {
    //returns country with most amount of employees 
    const countriesArr = Object.entries(employees.reduce((acc, curr) => {
        acc[curr.address.country] = (acc[curr.address.country] || 0) + 1;//if object already contains curr.address.country, it will be ++
        return acc;                                                    //otherwise, field curr.address.country = 1 will be created in obj 
    }, {}));
    const sortedCountries = countriesArr.sort((entry1, entry2) => entry2[1] - entry1[1]);
    return sortedCountries[0][0];
}
console.log(getMostPopulatedCountry(employees))

function getMostPopulatedCountries(employees, counter) {
    //returns country with most amount of employees 
    const countriesArr = Object.entries(employees.reduce((acc, curr) => {
        acc[curr.address.country] = (acc[curr.address.country] || 0) + 1;//if object already contains curr.address.country, it will be ++
        return acc;                                                    //otherwise, field curr.address.country = 1 will be created in obj 
    }, {}));
    const sortedCountries = countriesArr.sort((entry1, entry2) => entry2[1] - entry1[1]);
    const res = [];
    for (let i = 0; i < counter; i++) {
        res.push(sortedCountries[i][0]);
    }
    return res;
}
console.log(getMostPopulatedCountries(employees, 3));
// function getMostPopulatedCountryShort(employees) {
//     return (Object.entries(employees.reduce((acc, curr) => {
//         acc[curr.address.country] = (acc[curr.address.country] || 0) + 1;//if object already contains curr.address.country, it will be ++
//         return acc;                                                    //otherwise, field curr.address.country = 1 will be created in obj 
//     }, {})).sort((entry1, entry2) => entry2[1] - entry1[1]))[0][0];
// }
//                                           //number
function isAnagram(word, anagram) {
    if (word.length !== anagram.length) {
        return "Error: anagram should have the same length as word "
    }
    const letters = Array.from(word);
    const lettersOccurrences = getStringsOccurrences(letters)
    const anagramLetters = Array.from(anagram);
    //TODO
    //returns true if a given anagram is indeed anagram of a given word
    //anagram should have the same length as word
    //anagram must have only same letters as word
    //"hello" anagram examples: elolh,olleh,ohell,lehol
    //examples of non-anagrams : eloll 
}