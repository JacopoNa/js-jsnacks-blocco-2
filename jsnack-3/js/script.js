// - Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// FOR

// // variabile somma 
// let sum = 0;

// // chiedo per 5 volte all'utente di inserire un numero ed eseguo la somma
// for (let i = 0; i < 5; i++) {
//     let number = parseInt(prompt('Inserisci un numero'));

//     sum += number;
// }

// console.log(sum)



// -----------------------------------



// WHILE    

// variabile somma 
let sum = 0;

// variabile i
let i = 0

// eseguo fino a quando i < 5 è vera
while(i < 5) {
    let number = parseInt(prompt('Inserisci un numero'));

    sum += number;

    i++;
}

console.log(sum);