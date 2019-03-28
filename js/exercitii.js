//Exercitiul 1
let latura = 7;
console.log("Perimetrul este: " + 3 * latura);
console.log("Aria este: " + Math.pow(latura, 2) * Math.sqrt(3) / 4);

//Exercitiul 2
let latura1 = 9;
let latura2 = 6;
let latura3 = 9;
let latura4 = 6;

if (latura1 === latura2 && latura3 === latura4 && latura1 == latura3)
    console.log('Patrulaterul este patrat.');
else if (latura1 === latura3 && latura2 === latura4)
        console.log('Patrulaterul este dreptunghi.');
    else
        console.log('Patrulater necunoscut.');

//Exercitiul 3
let string1 = " Acesta e un string.";
let string2 = " Acesta e al doilea STRING. ";

console.log(string1 + string2);
console.log(string1.toUpperCase());
console.log(string2.toLowerCase());
console.log(string1.trim() + string2.trim());

//Exercitiul 4
const string = "Cursul Dungeon Explorer o sa devina mai fun dupa ce invatam JS Basics";
console.log(string.includes("fun")?"e fun":"nu e fun");
console.log(string.includes("boring")?"e boring":"nu e boring");
console.log("Lungimea stringului este: " + string.length);


//Exercitiul 5
const fructe = ['banane', 'mere', 'portocale', 'struguri'];
console.log(fructe[0]);
console.log(fructe[fructe.length - 1]);

fructe.shift();
fructe.unshift('portocale');
fructe.splice(2);
fructe.push('struguri');
fructe.push('banane');
console.log(fructe);