function calculadora() {
let x = 0;
let z = 0;

switch (prompt("Elige tu opción: \n 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir.")) {
  case "1": {
    x = Number(prompt("Escribe el primer sumando"));
    z = Number(prompt("Ahora escribe el segundo sumando"));
    let resultadoSuma = x + z;
    alert("Tú resultado es " + resultadoSuma);
    break;
  }
  case "2": {
    x = Number(prompt("Escribe el valor del minuendo"));
    z = Number(prompt("Ahora escribe el valor del sustraendo"));
    let resultadoResta = x - z;
    alert("Tú resultado es " + resultadoResta);
    break;
  }
  case "3": {
    x = Number(prompt("Especifica tu multiplicando"));
    z = Number(prompt("Ahora especifica tu multilpicador"));
    let resultadoMultiplicar = x * z;
    alert("Tú resultado es " + resultadoMultiplicar);
    break;
  }
  case "4": {
    x = Number(prompt("Especifica tu divisor"));
    z = Number(prompt("Ahora especifica tu dividendo"));
    let resultadoDivision = x / z;
    alert("Tú resultado es " + resultadoDivision);
    break;
  }
  default: {
    alert("No has seleccionado una opción válida.");
  }
 }
}
