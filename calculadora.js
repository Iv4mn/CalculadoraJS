function calculadora() {
let x = 0;
let z = 0;

switch (prompt("Elige tu opción: \n 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir.")) {
  case "1": {
    x = Number(prompt("Primer valor a sumar"))
    z = Number(prompt("Segundo valor a sumar"))
    let resultadoSuma = x + z;
    alert("Tú resultado es " + resultadoSuma)
    break;
  }
  case "2": {
    x = Number(prompt("Primer valor a restar"))
    z = Number(prompt("Segundo valor a restar"))
    let resultadoResta = x - z;
    alert("Tú resultado es " + resultadoResta)
    break;
  }
  case "3": {
    x = Number(prompt("Primer valor a multiplicar"))
    z = Number(prompt("Segundo valor a multiplicar"))
    let resultadoMultiplicar = x * z;
    alert("Tú resultado es " + resultadoMultiplicar)
    break;
  }
  case "4": {
    x = Number(prompt("Primer valor a dividir"))
    z = Number(prompt("Segundo valor a dividir"))
    let resultadoDivision = x / z;
    alert("Tú resultado es " + resultadoDivision)
    break;
  }
  default: {
    alert("No has seleccionado una opción válida.")
  }
 }
}