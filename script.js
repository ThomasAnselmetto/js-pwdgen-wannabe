// forma con dichiarazione e assegnazione separate
// ho usato per sicurezza il console.log ed il console.log con il typeof per sicurezza

const client_name = prompt("Inserisci il tuo nome");
console.log(client_name);
console.log(typeof "client_name");

const client_surname = prompt("Inserisci il tuo cognome");
console.log(client_surname);
console.log(typeof "client_surname");

let favourite_color = prompt("Il tuo colore preferito?");
console.log(favourite_color);
console.log(typeof "favourite_color");

// non inserisco il parseInt in quanto non ho bisogno di fare calcoli ma ho solo stringhe

let client_age = prompt("Quanti anni hai?");
console.log(client_age);
console.log(typeof "client_age");

// forma con dichiarazione e assegnazione condensate

let welcome_msg = `Benvenuto/a ${client_name} ${client_surname} ${favourite_color} ${client_age}`;

console.log(welcome_msg);
console.log(typeof welcome_msg);

document.getElementById("welcome").innerHTML = welcome_msg