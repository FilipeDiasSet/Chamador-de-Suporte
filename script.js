var suporteElement = document.getElementById('suporte');
var suportesElement = document.getElementById('suportes');
var intervalId;
var contadorSuporte = 1;
var audio;

function gerarSuporte() {
  var suporte = "Suporte " + contadorSuporte; // Altera o suporte para "Suporte " + número
  suporteElement.innerText = suporte;
  intervalId = setInterval(toggleVisibility, 500); // Alterna a visibilidade a cada 500ms
  playSound();
  contadorSuporte++;
}

function toggleVisibility() {
  suporteElement.classList.toggle('blink');
}

function finalizar() {
  clearInterval(intervalId);
  suporteElement.classList.remove('blink');
  suportesElement.innerHTML += '<li>' + suporteElement.innerText + '</li>';
  suporteElement.innerText = '';
  stopSound();
}

function playSound() {
  audio = new Audio('beep.mp3'); // Substitua "beep.mp3" pelo caminho para o seu arquivo de som
  audio.loop = true;
  audio.play();
}

function stopSound() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}
