// Oppgave 1

/*
const tall = window.prompt('Skriv inn et tall.');

if (tall > 0) {
    console.log('Tallet er positivt.');
}
else {
    console.log('Tallet er negativt.');
}
*/

// Oppgave 2

/*
const tall1 = window.prompt("Skriv inn et tall.");

if (tall1 % 2) {
    console.log("Tallet er et oddetall.")
}
else {
    console.log("Tallet er et partall.")
}

// Oppgave 3

/*
var score = 50;

if (score >= 50) {
    console.log("Du har bestått");
}
else {
    console.log("Du har ikke bestått");
}
*/

// Oppgave 5 - fikset


let dagNummer = window.prompt("Hva er nummeret på dagen i dag?");
if (dagNummer == "1") {
    console.log("Det er Mandag.");
}
else if (dagNummer == "2") {
    console.log("Det er Tirsdag.");
}
else if (dagNummer == 3) {
    console.log("Det er Onsdag.");
}
else if (dagNummer == 4) {
    console.log("Det er Torsdag.");
}
else if (dagNummer == 5) {
    console.log("Det er Fredag");
}
else if (dagNummer == 6) {
    console.log("Det er Lørdag.");
}
else if (dagNummer == 7) {
    console.log("Det er Søndag.");
}
else {
    console.log("Ugyldig");
}


// Oppgave 6

/*
let dag = window.prompt("Hvilken dag er det?")
switch (dag) {
    case "1":
        console.log("Det er Mandag.");
        break;
    case "2":
        console.log("Det er Tirsdag.");
        break;
    case "3":
        console.log("Det er Onsdag.");
        break;
    case "4":
        console.log("Det er Torsdag.");
        break;
    case "5":
        console.log("Det er Fredag.");
        break;
    case "6":
        console.log("Det er Lørdag.");
        break;
    case "7":
        console.log("Det er Søndag.")
        break;
}
*/

// Oppgave 7

/*
let number1 = window.prompt("Number 1 will be...");
let number2 = window.prompt("Number 2 will be...");
let result1 = number1 + number2;
let result2 = number1 - number2;
let result3 = number1 * number2;
let result4 = number1 / number2;
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
*/

// Oppgave 8

/*
let tall1 = window.prompt("Tall 1 skal være...");
let tall2 = window.prompt("Tall 2 skal være...");

if (tall1 > tall2) {
    console.log('Tall 1(', tall1,')', 'er størst')
}
else if (tall2 > tall1) {
    console.log('Tall 2(',tall2,')', 'er størst')
}
else {
    console.log('Tallene er like')
}
*/

// Oppgave 9

/*
let k1 = Number(prompt("Karakter 1"));
let k2 = Number(prompt("Karakter 2"));
let g = k1 + k2;
let h = g / 2;

if (h >= 50) {
    console.log("Din karakter: Bestått")
} else {
    console.log("Din karakter: Ikke bestått")
}
*/

// Oppgave 10

/*
let number = Number(prompt("Velg et tall..."));
if (number % 3) {
    console.log("Det tallet kan ikke deles på 3");
} else {
    console.log("Det tallet kan deles på 3.");
};
*/

// Oppgave 11

/*
let number = Number(prompt("Velg et tall..."));
if (number % 5) {
    console.log("Det tallet kan ikke deles på 5");
} else {
    console.log("Det tallet kan deles på 5.");
};
*/

// Oppgave 12

/*
let number = Number(prompt("Velg et tall..."));
if (number % 3 && 5) {
    console.log("Det tallet kan ikke deles på 3 og 5");
} else {
    console.log("Det tallet kan deles på 3 og 5.");
};
*/

// Oppgave 13


// Oppgave 14

/*
let a = Number(prompt("Velg et tall..."))
let b = Number(prompt("Velg et tall til..."))
let c = Number(prompt("Velg et siste tall..."))

if (a<b && a<c) {
    console.log("Det minste tallet er tall 1. (", a, ")")
} else if (
    b<a && b<c) {
        console.log("Det minste tallet er tall 2. (", b, ")")
    } else if (
        c<a && c<b
    ) {
        console.log("Det minste tallet er tall 3. (", c, ")")
    }
*/

// Oppgave 15


// const bstv = prompt("Skriv inn en bokstav")

// if (bstv === "a" || bstv === "e" || bstv === "i" || bstv === "o" || bstv === "u" || bstv === "y" || bstv === "æ" || bstv === "ø" || bstv === "å") {
//     console.log("Det er en vokal")
// } else {
//     console.log("Det er en konsonant")
// }


// Oppgave 16


// let farge = prompt("Skriv inn en farge (red, blue, green, etc)")
// document.write("<div style=\"color: "+farge+"; font-size: 50px;\">Text in different colors</div>")