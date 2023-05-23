const braco = document.querySelector('#braco');

const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach(elemento => {
  elemento.addEventListener('click', evento => {
    manipulaEvento(evento.target.innerText);
  });
});

function manipulaEvento(operacao) {
  if (operacao === '+') {
    braco.value = parseInt(braco.value) + 1;
  }
  if (operacao === '-') {
    braco.value = parseInt(braco.value) - 1;
  }
}
