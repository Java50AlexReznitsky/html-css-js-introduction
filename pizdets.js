function getMostPopulatedCountry(employees) {
    return (Object.entries(employees.reduce((acc, curr) => {
        acc[curr.address.country] = (acc[curr.address.country] || 0) + 1;
        return acc;
    }, {})).sort((entry1, entry2) => entry2[1] - entry1[1]))[0][0];
}
