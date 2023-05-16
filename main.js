alert('Da click en el cuadro que esta dentro del circulo para jugar')

const numeroRandom = document.querySelector('.numero-random');
const listarNumero = document.querySelector('.lista-numeros');
const numeros = document.querySelectorAll('.numeros');
const numerosCpu = document.querySelectorAll('.numeros-cpu');

const numerosJugados = []
// creando un numero random con un evento click
numeroRandom.addEventListener('click',() => {
  let numero = Math.floor((Math.random() * (51 - 1)) + 1);
  
  if (!numerosJugados.includes(numero)) {
    numerosJugados.push(numero);
    registrarNumeroRandom(numero);
    numeroRandom.textContent = numero;
  }else{
    return;
  }

  compararNumerosCpu(numero, contadorCpu);
  compararNumerosPlayer(numero, contadorPlayer);

});

function registrarNumeroRandom(numero) {
  // creando un span para listar los numeros que ha arrojado el metodo random
  const span = document.createElement('span');
  span.classList.add('numeros-lista')
  span.textContent = numero;
  listarNumero.appendChild(span);
}

let contadorPlayer = 0;
function compararNumerosPlayer(numero, contador) {
  numeros.forEach( num => {
    num.addEventListener('click', (evento) => {
      let numeroCasilla = evento.target;
      if(numeroCasilla.textContent == numero && !numeroCasilla.classList.contains('seleccionado')){
        numeroCasilla.classList.add('seleccionado');
        contadorPlayer++;
      }
    })
  })
  if(contador == 15) {
    alert('Ganste !!!');
    window.location.reload()
  }
}

let contadorCpu = 0;
function compararNumerosCpu(numero) {

  numerosCpu.forEach(num => {
    if(num.textContent == numero && !num.classList.contains('seleccionado')) {
      num.classList.add('seleccionado');
      contadorCpu++;
    }
  })
  
  if(contadorCpu == 15)
  {
    alert('Ganó la cpu !!!');
    window.location.reload();
  }
}