function tocaSomClap (idElementoAudio) {
  document.querySelector(idElementoAudio).play();  
}


const ListaDeTeclas = document.querySelectorAll('.tecla');

let Contador = 0;
while (Contador < ListaDeTeclas.length) {
ListaDeTeclas[Contador].onclick = function () 
{
  tocaSomClap('#som-tecla-toim');
};

const vitorroque2= `som_${vitorroque}`;
const vitorroque = ListaDeTeclas[Contador].classList[1];
console.log(vitorroque);
console.log(vitorroque2);
Contador = Contador + 1;
console.log(Contador);
}

