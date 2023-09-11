function tocaSomClap () {
  document.querySelector('#som-tecla-clap').play();  
}


const ListaDeTeclas = document.querySelectorAll('.tecla');
ListaDeTeclas[1].onclick = tocaSomclap;
