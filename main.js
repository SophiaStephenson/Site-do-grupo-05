function tocaSomClap (idElementoAudio) {
  document.querySelector(idElementoAudio).play();  
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let Contador = 0;

for === Contador < ListaDeTeclas.length {
  const tecla =  ListaDeTeclas [Contador]
  const vitorroque = tecla.classList[1];
const vitorroque2 = `#som-${vitorroque}`;

//console.log(vitorroque);
//console.log(vitorroque2);

ListaDeTeclas[Contador].onclick = function () {
  tocaSomClap(vitorroque2);
}

Contador = Contador + 1;
 {

}

tecla.onkeydown= function (evento) {
  if (evento.code === 'Space' || evento.code === 'Enter')
tecla.classList.add('ativa');
//console.log(evento);

}

tecla.onkeyup = function () {
tecla.classList.remove('ativa');
}
}
