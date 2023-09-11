function tocaSomClap () {
  document.querySelector('#som-tecla-clap').play();  
}


const ListaDeTeclas = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < 9) {
ListaDeTeclas[1].onclick = tocaSomClap;
Contador = Contador + 1;
console.log(Contador);
}

