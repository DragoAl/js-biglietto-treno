
/* CALCOLO DEL PREZZO DEL BIGLIETTO DEL TRENO
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

const priceTrainTicket = document.getElementById("train-ticket");

// CHIEDERE L'ETA' ALL'UTENTE
let userAge = parseInt(prompt ("Inserire la propria età"));

console.log( "età utente", userAge);

// CHIEDERE QUANTI KM DEVE PERCORRERE
let userTrip = parseInt(prompt ("Inserire i km da percorrere"));

console.log("km inseriti", userTrip);

// DEFINIRE PREZZO NORMALE
const priceKm = 0.21;
let normalPriceKm = priceKm * userTrip;

let normalPriceFixed = (normalPriceKm.toFixed(2));

console.log("Prezzo Normale €", normalPriceKm);


// DEFINIRE PREZZO U18
let underPriceDiscount = ((priceKm * 20) / 100 );
let underPriceKm = (priceKm - underPriceDiscount) * userTrip ;

let underPriceFixed = (underPriceKm.toFixed(2));

console.log("prezzo under18", underPriceKm);

// DEFINIRE PREZZO OVER65
let overPriceDiscount = ((priceKm * 40) / 100 );
let overPriceKm = (priceKm - overPriceDiscount) * userTrip ;

let overPriceFixed = (overPriceKm.toFixed(2));

console.log("prezzo over65", overPriceKm);

// CALCOLO COSTO DEL BIGLIETTO E LO STAMPO A VIDEO
if (userAge < 18){
    priceTrainTicket.innerHTML = ` Hai Uno sconto del 20% e il costo del tuo biglietto è €${underPriceFixed}`;
} else if (userAge >= 65){
    priceTrainTicket.innerHTML = ` Hai Uno sconto del 40% e il costo del tuo biglietto è €${overPriceFixed}`;

} else {
    priceTrainTicket.innerHTML = ` Il costo del tuo biglietto è €${normalPriceFixed}`;
 
}

