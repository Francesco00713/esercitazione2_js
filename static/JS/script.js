function generateRandomInteger(min = 0,  max = 100){
    let number = Math.random()
    number = number * (max - min + 1) + min
    return Math.floor(number)
}

let tentativi = 0;
let tentativo;
const n = generateRandomInteger(0, 100);

function handleClick(event){
    let userField = document.querySelector("#guess");

    if(userField === null || isNaN(userField.value) || userField.value === ""){
        console.log("Devi inserire un numero valido!");
    } else {
        let indovino = parseInt(userField.value);

        if (indovino < 0 || indovino > 100) {
            console.log("Devi inserire un numero tra 0 e 100!");
        } else {
            
            tentativi++;

            if(indovino === n){
                let vittoria = document.querySelector("#vittoria").innerHTML ="Complimenti hai vinto!";
            } else if (indovino < n){
                tentativo = document.querySelector("#tentativo").innerHTML = indovino + " E' un numero troppo piccolo, hai ancora " + (5-tentativi) + " tentativi. INSERISCI UN ALTRO NUMERO!";
            } else if(indovino > n){
                tentativo = document.querySelector("#tentativo").innerHTML = indovino + " E' un numero troppo grande, hai ancora " + (5-tentativi) + " tentativi. INSERISCI UN ALTRO NUMERO!";
        }
        if(tentativi >= 5){
            tentativo = document.querySelector("#tentativo").innerHTML = "Hai esaurito il numero di tentativi, hai perso! Il numero da indovinare era: " + n;
        }
        }
    }
    userField.value = "";
}

let guessBtn = document.querySelector("#guessBtn");
guessBtn.addEventListener("click", handleClick);