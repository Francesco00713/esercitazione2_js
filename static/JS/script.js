function generateRandomInteger(min = 0,  max = 100){
    let number = Math.random()
    number = number * (max - min + 1) + min
    return Math.floor(number)
}

let tentativi = 0;
const n = generateRandomInteger(0, 100);

function handleClick(event){


    let userField = document.querySelector("#guess");

    if(userField === null || isNaN(userField.value) || userField.value === ""){
        console.log("Devi inserire un numero valido!");
        return;
    }

    let indovino = parseInt(userField.value);
    tentativi++;

    if(indovino === n){
        console.log("Complimenti hai vinto!");
        return;
    } else if (indovino < n){
        console.log(indovino + " E' un numero troppo piccolo, hai ancora " + (5-tentativi) + " tentativi. INSERISCI UN ALTRO NUMERO!");
    } else if(indovino > n){
        console.log(indovino + " E' un numero troppo grande, hai ancora " + (5-tentativi) + " tentativi. INSERISCI UN ALTRO NUMERO!");
    }

    if(tentativi >= 5){
        console.log("Hai esaurito il numero di tentativi, hai perso! Il numero da indovinare era: " + n);
    }

    userField.value = "";
}

let guessBtn = document.querySelector("#guessBtn");
guessBtn.addEventListener("click", handleClick);