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
    const countryOccurrence = getCountryOccurrence(employees);
    const arrayOfCountriesByOccur = Object.entries(countryOccurrence);
    const sortedCountries = arrayOfCountriesByOccur.sort((a, b) => b[1] - a[1]);
    return sortedCountries[0][0];
}
// console.log(getMostPopulatedCountry(employees));
function getMostPopulatedCountries(employees, counter) {
    const countryOccurrence = getCountryOccurrence(employees);
    const arrayOfCountriesByOccur = Object.entries(countryOccurrence);
    const sortedCountries = arrayOfCountriesByOccur.sort((a, b) => b[1] - a[1]).slice(0, counter);
    const resCountries = [];
    for (let i = 0; i < sortedCountries.length; i++) {
        resCountries.push(sortedCountries[i][0]);
    }
    return resCountries;
}
// console.log(getMostPopulatedCountries(employees, 2));

function getCountryOccurrence(employees) {
    return employees.reduce((prev, empl) => {
        prev[empl.address.country] = (prev[empl.address.country] || 0) + 1;
        return prev
    }, {});
    // const res = {};
    // employees.forEach(str => {
    //     res[str.address.country] = (res[str.address.country] || 0) + 1;
    // });
    // employees.forEach(empl => {
    //     if (!res[empl.address.country]) {
    //         res[empl.address.country] = 1;
    //     } else {
    //         res[empl.address.country]++;
    //     }
    // })
    // return res;
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
function isAnagram(word, anagram) {
    let res = false;
    if (word.length === anagram.length) {
        const letters = Array.from(word);
        const lettersOccurrences = getStringOccurrences(letters);
        const anagramLetters = Array.from(anagram);

        return anagramLetters.every(letter => {
            let res = false;
            if (lettersOccurrences[letter]) {
                res = true;
                lettersOccurrences[letter]--;
                if (lettersOccurrences[letter] == 0) {
                    delete lettersOccurrences[letter];
                }
            }
            return res;
        })
    }
}
function isAnagram2(word, anagram) {
    let res = false
    if (word.length === anagram.length) {
        res = true;

        //     const wordLetters = {};
        //     const anagramLetters = {};
        //     for (const letter of word) {
        //         wordLetters[letter] = (wordLetters[letter] || 0) + 1;
        //     }
        //     for (const letter of anagram) {
        //         anagramLetters[letter] = (anagramLetters[letter] || 0) + 1;
        //     }
        //     for (const [key, value] of Object.entries(wordLetters)) {
        //         if (!(key in anagramLetters) || anagramLetters[key] !== value) {
        //             return false;
        //         }
        //     }
    }
    return res;
}
console.log(isAnagram("hello", "olleh"));