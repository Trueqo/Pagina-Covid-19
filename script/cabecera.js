window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("abajo", window.scrollY>0);
})

//Funcion para el logo

// esta parte, permite que se ejecute el codigo cuando se halla cargado la pagina
$(function() {
    // esta parte es la que controla cuando se mueve el scroll y ejecuta una función
    $(document).scrollY(function() {
      // aca se pregunta si el scroll se movio de pa bajo.
      if ($(this).scrollTop() > 0) {
        // esta parte cambia el atributo "src" de la etiqueta "img" 
        $('#logoCovidMap').attr('src', '../img/logo.png');
      }
      if ($(this).scrollTop() < 0) {
        $('#logoCovidMap').attr('src', './img/logo-white.png');
      }
    });
});