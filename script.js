// Generar un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const numerosIngresados = [];


function validarNumero(numero) {
  if (isNaN(numero)) {
    return false;
  }
  return true;
}


function adivinarNumero() {
  let intento = prompt("Intenta adivinar el número secreto (1-100):");
  
  if (!validarNumero(intento)) {
    console.log("Ups, debes ingresar un número válido.");
    return adivinarNumero();
  }
  
  intento = Number(intento);
  
  numerosIngresados.push(intento);
  
  if (intento === numeroSecreto) {
    console.log("¡Felicidades, adivinaste el número secreto!");
    console.log("Lista de números ingresados: " + numerosIngresados.join(", "));
  } else {
    console.log("Ups, el número secreto es incorrecto. Vuelve a intentarlo.");
    adivinarNumero();
  }
}

// Iniciar el juego
adivinarNumero();
