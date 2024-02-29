let message = prompt("Écris ta phrase ici");

let response = function (question) {
    // Si c'est une question ou juste ?
    if (question.endsWith("?")) {
        return "Ouais ouais...";
    }
    // MAJ
    if (question === question.toUpperCase() && question.length > 0 ) {
        return "Pwa, calme-toi...";
    }
    // Inclus le mot fortnite
    if (question.includes("fortnite")) {
        return "on s'fait une partie soum-soum ?";
    }
    // Si on envoie un msg vide 
    if (question == null || question == "") {
        return "t'es en PLS ?";
    }
    else {
        return "balek.";
    }
};
console.log(response(message));