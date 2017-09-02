var evento = document.body;

function iniciar (x) {
  if (x.keyCode == 13) {
   window.location = "lizzy.html";
 }
}

evento.addEventListener("keydown",iniciar);

//cambio uno
