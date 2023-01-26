function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country } }
}
const employees = [
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")
]
//Task #1
//returns country with most amount of employees
function getMostPopulatedCountry(employees) {
    const res = {};
    employees.forEach(str => {
        res[str.address.country] = (res[str.address.country] || 0) + 1;
    });
    const arrayCountry = Object.entries(res);
    arrayCountry.sort((entry1, entry2) => entry2[1] - entry1[1]);
    return arrayCountry[0][0];
}
console.log(getMostPopulatedCountry(employees))

//Task #2
//returns a given number (counter) of countries with most amount of employees
function getMostPopulatedCountries(employees, counter) {
    const res = {};
    employees.forEach(str => {
        res[str.address.country] = (res[str.address.country] || 0) + 1;
    });
    const arrayCountry = Object.entries(res);
    arrayCountry.sort((entry1, entry2) => entry2[1] - entry1[1]);
    const arrRes = [];
    counter = Math.min(counter, arrayCountry.length);
    for (let i = 0; i < counter; i++) {
        arrRes[i] = arrayCountry[i][0];
    }
    return arrRes;
}
console.log(getMostPopulatedCountries(employees, 10));

//Task #3
//returns true if a given anagram is indeed an anagram of a given word
//anagram must have  same length as word
//anagram must have all letters from word
//hello anagram examples: elolh, olleh, ohell, lehol
//examples non-anagrams: eloll (no h), ollehh(different length),
// olaeh ("a" doesn't exist in word), oleh(different length)
function isAnagram(word, anagram) {
    if (word.length !== anagram.length) {
        return false;
    }
    const wordLetters = {};
    const anagramLetters = {};
    for (const letter of word) {
        wordLetters[letter] = (wordLetters[letter] || 0) + 1;
    }
    for (const letter of anagram) {
        anagramLetters[letter] = (anagramLetters[letter] || 0) + 1;
    }
    for (const [key, value] of Object.entries(wordLetters)) {
        if (!(key in anagramLetters) || anagramLetters[key] !== value) {
            return false;
        }
    }
    return true;
}
console.log(isAnagram("hello", "ollrh"));



