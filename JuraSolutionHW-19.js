
function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country } }
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")
]

//displayStringOccurrences(strings);
//HW #19
function getMostPopulatedCountry(employees) {

    //returns country with most amount of employees
    const countries = getCountriesSortedByOccurrences(employees);
    return countries[0];
}
function getMostPupulatedCountries(employees, counter) {
    //returns a given number (conter) of countries with most amount of employees
    const countries = getCountriesSortedByOccurrences(employees);
    return countries.slice(0, counter);

}
function getCountriesSortedByOccurrences(employees) {
    const countries = employees.map(e => e.address.country);
    const countriesOccurrences = getStringsOccurrences(countries);
    const arrayOccurrences = Object.entries(countriesOccurrences);
    arrayOccurrences.sort(stringComp);
    return arrayOccurrences.map(entry => entry[0]);

}
function isAnagram(word, anagram) {
    //TODO 
    //returns true if a given anagram is indeed an angram of a given word
    //anagram must have  same length as word
    //anagram must have all letters from word
    //hello anagram examples: elolh, olleh, ohell, lehol
    //exampls non-anagrams: eloll (no h), ollehh(different length),
    // olaeh ("a" doesn't exist in word), oleh(different length)
    let res = false;
    if (word.length === anagram.length) {
        const letters = Array.from(word);
        const lettersOccurrences = getStringsOccurrences(letters);
        const anagramLetters = Array.from(anagram);
        res = anagramLetters.every(letter => {
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
    return res;
}


