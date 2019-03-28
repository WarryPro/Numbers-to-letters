function numbersToWords(number) {
    if(isNaN(number) || number < 0 || number > 999) {

        return "Il faut entrer un nombre entier compris entre 0 et 999";
    }
    const unitsToWords = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix",
                            "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"]
    
    // pour les suisses
    const tensToWords = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "septante", "huitante", "nonante"];

    // pour les Français 
    // const tensToWords = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixznte", "quatre-vingt", "quatre-vingt"];

    let units = number % 10, 
        tens = (number % 100 - units) / 10,
        hundreds = (number % 1000 - number % 100) / 100;

    let unitsOut, tensOut, hundredsOut;

    if(number === 0 ) {

        return "zéro";
    }
    else {
        // traitement des unités 
        unitsOut = (units === 1 && tens > 0 && tens !== 8 ? "et-" : "") + unitsToWords[units];

        // traitement des dizaines
        if(tens === 1 && units > 0) {

            tensOut = unitsToWords[10 + units];
            unitsOut = "";
        }
        /**
         * si les nombres en français France
         */
        // else if (tens === 7 || tens === 9) {
        //     tensOut = tensToWords[tens] + "-" + (tens === 7 && tens === 1 ? "et-" : "") + unitsToWords[10 + units];
        //     unitsOut;
        // }
        else {
            tensOut = tensToWords[tens];
        }
        tensOut += (units === 0 && tens === 8 ? "s" : "");

        // traitement des centaines 
        hundredsOut = (hundreds > 1 ? unitsToWords[hundreds] + "-" : "") + (hundreds > 0 ? "cent" : "") + (hundreds > 1 && tens === 0 && units === 0 ? "s" : "");

        // retour du total 
        return hundredsOut + (hundredsOut && tensOut ? "-" : "") + tensOut + (hundredsOut && unitsOut || tensOut && unitsOut ? "-" : "") + unitsOut;
    }
}


let userEntry;

while (userEntry = prompt("Indiquez le nombre à écrire en toutes lettres (entre 0 et 999) :")) {

    alert(numbersToWords(parseInt(userEntry, 10)));

}