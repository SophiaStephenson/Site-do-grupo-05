function tocaSomClap (idElementoAudio) {
  document.querySelector(idElementoAudio).play();  
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let Contador = 0;

for ++ Contador < ListaDeTeclas.length {
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

//this is where we apply opacity to the arrow
$(window).scroll( function(){

  //get scroll position
  var topWindow = $(window).scrollTop();
  //multipl by 1.5 so the arrow will become transparent half-way up the page
  var topWindow = topWindow * 1.5;
  
  //get height of window
  var windowHeight = $(window).height();
      
  //set position as percentage of how far the user has scrolled 
  var position = topWindow / windowHeight;
  //invert the percentage
  position = 1 - position;

  //define arrow opacity as based on how far up the page the user has scrolled
  //no scrolling = 1, half-way up the page = 0
  $('.arrow-wrap').css('opacity', position);

});






//Code stolen from css-tricks for smooth scrolling:
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
