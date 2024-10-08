function generateRandomInteger(min = 0,  max = 100){
    let number = Math.random()
    number = number * (max - min) + min
    return Math.floor(number)
}

function handleClick(event){ 
    console.log("Benvenuto al gioco!");
    while(tentativi < 5){
        do {
            userField = document.querySelector("#guess");
            btn = document.querySelector("#guessBtn");
        } while (userField === null || isNaN(userField)); 

        userField = parseInt(userField);
        tentativi++;
    
        if(userField === n){
            console.log("Complimenti hai vinto!");
        } else if (userField < n){
            console.log(userField + " E' un numero troppo piccolo, hai ancora " + (5-tentativi) + " tentativi.");
        } else if(userField > n){
            console.log(userField + " E' un numero troppo grande, hai ancora " + (5-tentativi) + " tentativi.");
        }
    }
    console.log("Hai esaurito il numero di tentativi, hai perso! Il numero da indovinare era: " + n);
}

let n = 0, tentativi = 0, indovinare;
let userField, btn;
n = generateRandomInteger(100);

guessBtn.addEventListener("click", handleClick);