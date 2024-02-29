const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
let rentedOnce = books.map(b => b.rented >= 1);
console.log(rentedOnce);

//Quel est le livre le plus emprunté ?
let mostRented = books.sort((a, b) => b.rented - a.rented)[0]; //[0] prend le premier élément du tableau trié

console.log("Le livre le plus emprunté est :", mostRented.title);

//Quel est le livre le moins emprunté ?
let lessRented = books.sort((a, b) => a.rented - b.rented)[0]; //[0] prend le premier élément du tableau trié

console.log("Le livre le moins emprunté est :", lessRented.title);

//Trouve le livre avec l'ID: 873495 ;

let bookID = books.find(book => book.id === 873495);
console.log(bookID)

//Supprime le livre avec l'ID: 133712 ;

console.log("Supprime le livre avec l'ID 133712");
let bookDeleted = books.filter(book => book.id !== 133712);
console.log(bookDeleted);

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

console.log("Trie les livres par ordre alphabétique sans celui supprimé");
let Order = bookDeleted.sort((a, b) => a.title < b.title ? -1 : 1);
console.log(Order);

