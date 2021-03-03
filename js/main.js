var kmPercorsi = prompt("kilometri da percorrere?");
var eta = prompt("età?");
var costo = kmPercorsi * 0.21;

console.log(costo + "€");

var young = eta < 18;
var senior = eta > 65;


var costoYoung = (costo * 80) / 100;
var costoYoungFix = costoYoung.toFixed(2);
var costoSenior = (costo * 60) / 100;
var costoSeniorFix = costoSenior.toFixed(2);


if (young) {
  console.log(costoYoung);
  document.getElementById('biglietto').innerHTML = "Costo Biglietto young: " + costoYoungFix + "€";
}else if (senior) {
  console.log(costoSenior);
  document.getElementById('biglietto').innerHTML = "Costo Biglietto senior: " + costoSeniorFix + "€";
}else {
  console.log(costo);
  document.getElementById('biglietto').innerHTML = "Costo Biglietto: " + costo + "€";
}
