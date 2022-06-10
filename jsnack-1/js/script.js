// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

// array vuoto
let numbers = [];

// variabile somma
let somma = 0
 
// esegui finchè la somma è minore di 50
while(somma < 50) {
    const userNumber = parseInt(prompt('Inserisci un numero'));

    // push del numero inserito dall'utente 
    numbers.push(userNumber);

    // somma
    somma += userNumber;

    // output somma
    console.log(somma)
}

