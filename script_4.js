const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];


//nés dans les années 70 
let années70 = entrepreneurs.filter(
    (e) => e.year > 1970 && e.year < 1980);
console.log(années70);

//prénom et le nom des entrepreneurs

let fullname = entrepreneurs.map(entrepreneur => `${entrepreneur.first} ${entrepreneur.last}`);

console.log(fullname);

//age
let age = entrepreneurs.map(e =>
    `${e.first} ${e.last} a ${2024 - e.year} ans`);
console.log(age);

//Trie les entrepreneurs par ordre alphabétique du nom de famille.

let trie = entrepreneurs.sort((a, b) => {
    if (a.last < b.last) {
        return -1;
    }
    if (a.last > b.last) {
        return 1;
    }
    return 0;
});

console.log(trie);


