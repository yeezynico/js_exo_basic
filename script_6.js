function traduireARN(arn) {
    const codeGénétique = {
        UCU: "Sérine",
        UCC: "Sérine",
        UCA: "Sérine",
        UCG: "Sérine",
        AGU: "Sérine",
        AGC: "Sérine",
        CCU: "Proline",
        CCC: "Proline",
        CCA: "Proline",
        CCG: "Proline",
        UUA: "Leucine",
        UUG: "Leucine",
        UUU: "Phénylalanine",
        UUC: "Phénylalanine",
        CGU: "Arginine",
        CGC: "Arginine",
        CGA: "Arginine",
        CGG: "Arginine",
        AGA: "Arginine",
        AGG: "Arginine",
        UAU: "Tyrosine",
        UAC: "Tyrosine",
    };
    //(/.{1,3}/g) permet de diviser l'ARN en codons de trois lettres et le g permet de cherche toutes les occurences
    const codons = arn.match(/.{1,3}/g); // match permet de chercher expression régulière de (/.{1,3}/g) ( regex)
    const protéines = codons.map(codon => codeGénétique[codon]);
    return protéines;
}

// ARN  TRANSLATE
const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

// FUNCTION FOR THE ARN + CONSOLE.LOG
console.log("First ARN : " + traduireARN(arn1));
console.log("Second ARN : " + traduireARN(arn2));