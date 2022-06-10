// Calcola la somma e la media dei primi 10 numeri.

// variabile somma
let somma = 0;

// genero i primi 10 numeri
for(let i = 1; i <= 10; i++) {
    console.log(i);

    // somma
    somma += i;
}

// media
let media = somma / 10;

// output somma
console.log('La somma è: ' + somma);

// output media
console.log('La media è: ' + media);