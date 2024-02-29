let resultat = factorial(chiffre)
console.log("Le résultat est : " + resultat)

function halfPyramid() {
    let etage = parseInt(prompt("Salut, bienvenue dans ma super demi-pyramide ! Combien de lignes veux-tu ?"));
    for (let i = 1; i <= etage; i++) { //i++ 
        let str = ' '.repeat(etage - i); // ajoute les espaces avant les #
        let str2 = '#'.repeat(i); // ajoute les #
        console.log(str + str2);
    }
}

halfPyramid();