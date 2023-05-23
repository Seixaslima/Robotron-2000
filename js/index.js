const controle = document.querySelectorAll('[data-controle]');

controle.forEach(elemento => {
  elemento.addEventListener('click', evento => {
    manipulaEvento(evento.target.dataset.controle, evento.target.parentNode);
  });
});

function manipulaEvento(operacao, controle) {
  const peca = controle.querySelector('[data-contador]');

  if (operacao === '+') {
    peca.value = parseInt(peca.value) + 1;
  }
  if (operacao === '-') {
    peca.value = parseInt(peca.value) - 1;
  }
}
