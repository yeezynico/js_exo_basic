let message = prompt("Écris ta phrase ici");

let response = function (question) {
    // Si c'est une question ou juste ?
    if (question.endsWith("?")) {
        return "Ouais ouais...";
      }
      // Si c'est une question
      else if (question === question.toUpperCase()) {
        return "Pwa, calme-toi...";
      }
    // Inclus le mot fornite
    else if (question.includes("fortnite")) {
        return "on s'fait une partie soum-soum ?";
    }
    // Si on envoie un msg vide
    else if (question == null || question == "") {
        return "t'es en PLS ?";
    }
    else {
        return "balek.";
    }
};
console.log(response(message));