let chiffre = prompt("De quel nombre veux-tu calculer la factorielle ?")

function factorial(chiffre) {
    if (chiffre === 0 || chiffre === 1) {
        return 1;
    }
    else {
        return factorial(chiffre - 1) * chiffre;
    }
}


