function tocaSomClap (idElementoAudio) {
  document.querySelector(idElementoAudio).play();  
}


const ListaDeTeclas = document.querySelectorAll('.tecla');

let Contador = 0;
while (Contador < ListaDeTeclas.length) {
ListaDeTeclas[Contador].onclick = function () {
  tocaSomClap('#som-tecla-toim');
};
const vitorroque = ListaDeTeclas[Contador].classList[1];
console.log(vitorroque);
Contador = Contador + 1;
console.log(Contador);
}

