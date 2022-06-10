// - Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// array lungo
let bigArray = [12, 2, 89, 56, 23, 45, 58, 99, 1]; 

// array corto
let smallArray = [10, 20, 30];

// aggiungo elementi casuali all'array corto finchè ne avrà tanti quanti l'array lungo
while(smallArray.length < bigArray.length) {
    
    // push di numeri random nell'array corto
    smallArray.push(Math.round(Math.random()*100)+1);

    console.log(smallArray);
}

