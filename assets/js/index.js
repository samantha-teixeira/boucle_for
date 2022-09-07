let depenses = [
    ["Crédit auto : ",224.80],
    ["Assurance prêt immo : ",43.12],
    ["Eau : ",64.50],
    ["Cotisation banque : ",2.35],
    ["Internet : ",59.99],
    ["Electricité : ",273],
    ["Assurance autos : ",115.66],
    ["Prêt immo : ",1044.80],
    ["Assurance habitation : ",30.60]
];

let total = "";

for (let i=0; i<depenses.length; i++) {
    total += depenses[i];
    console.log(total);
}

document.getElementById("for").innerHTML += total;
