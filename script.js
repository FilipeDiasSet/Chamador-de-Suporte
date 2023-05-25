var proximoSuporte = 1;
var suportesRealizados = [];

var audio = new Audio('/msc/Toque.mp3');

function chamarSuporte() {
  var suporteAtualElement = document.getElementById("suporte-atual");
  var suportesRealizadosElement = document.getElementById("suportes-realizados");

  if (proximoSuporte > 1) {
    suportesRealizados.push(proximoSuporte - 1);
  }

  suporteAtualElement.innerHTML = "Suporte " + proximoSuporte;
  proximoSuporte++;

  suportesRealizadosElement.innerHTML = suportesRealizados.join(", ");

  var contador = 0;
  var intervalo = setInterval(function () {
    suporteAtualElement.style.visibility = (suporteAtualElement.style.visibility === 'hidden') ? 'visible' : 'hidden';
    contador++;
    if (contador === 10) { // Piscar 5 vezes (10 intervalos de 500ms)
      clearInterval(intervalo);
    } else if (contador % 2 === 1) { // Tocar o som em todas as piscadas ímpares
      audio.play();
    }
  }, 500);
}

var chamarBtn = document.getElementById("chamar-btn");
chamarBtn.addEventListener("click", chamarSuporte);
