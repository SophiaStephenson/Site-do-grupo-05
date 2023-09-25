function tocaSomClap (idElementoAudio) {
  document.querySelector(idElementoAudio).play();  
}


const ListaDeTeclas = document.querySelectorAll('.tecla');

let Contador = 0;
while (Contador < ListaDeTeclas.length) {
  const vitorroque = ListaDeTeclas[Contador].classList[1];
const vitorroque2= `som_${vitorroque}`;

console.log(vitorroque);
console.log(vitorroque2);

ListaDeTeclas[Contador].onclick = function () {
  tocaSomClap('#som-tecla-toim');
};

Contador = Contador + 1;
console.log(Contador);
}

