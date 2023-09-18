function tocaSomClap (idElementoAudio) {
  document.querySelector(idElementoAudio).play();  
}


const ListaDeTeclas = document.querySelectorAll('.tecla'):

let Contador = 0;

while (Contador < ListaDeTeclas.length) {
ListaDeTeclas[1].onclick = tocaSomClap;
Contador = Contador + 1;
console.log(Contador);
}

