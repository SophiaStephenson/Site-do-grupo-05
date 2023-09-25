function tocaSomClap (idElementoAudio) {
  document.querySelector(idElementoAudio).play();  
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < ListaDeTeclas.length) {
  const tecla= ListaDeTeclas [Contador]
  const vitorroque = ListaDeTeclas[Contador].classList[1];
const vitorroque2= `#som-${vitorroque}`;

console.log(vitorroque);
console.log(vitorroque2);

ListaDeTeclas[Contador].onclick = function () {
  tocaSomClap(vitorroque2);
}

Contador = Contador + 1;
console.log(Contador);

tecla.classList.add('ativa');
tecla.onkeydown= function () {

}
tecla.okeyup= function () {
tecla.classList.remove('ativa');
}

}