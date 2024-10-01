function generateRandomInteger(max){
    n = Math.floor(Math.random() * max);
    return n; 
}

let n = 0, tentativi = 0, indovinare;
n = generateRandomInteger(100);

console.log("Benvenuto al gioco!");
while(tentativi < 5){
    do {
        indovinare = prompt("Inserisci il numero da indovinare: ");
    } while (indovinare === null || isNaN(indovinare)); 

    indovinare = parseInt(indovinare);
    tentativi++;
    
    if(indovinare === n){
        console.log("Complimenti hai vinto!");
    } else if (indovinare < n){
        console.log(indovinare + " E' un numero troppo piccolo, hai ancora " + (5-tentativi) + " tentativi.");
    } else if(indovinare > n){
        console.log(indovinare + " E' un numero troppo grande, hai ancora " + (5-tentativi) + " tentativi.");
    }
}
console.log("Hai esaurito il numero di tentativi, hai perso! Il numero da indovinare era: " + n);