const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2
  }
};
const controle = document.querySelectorAll('[data-controle]');
const estatistica = document.querySelectorAll('[data-estatistica]');

controle.forEach(elemento => {
  elemento.addEventListener('click', evento => {
    if (
      manipulaEvento(evento.target.dataset.controle, evento.target.parentNode)
    ) {
      atualizaEstatistica(
        evento.target.dataset.peca,
        evento.target.dataset.controle
      );
    }
  });
});

function manipulaEvento(operacao, controle) {
  const peca = controle.querySelector('[data-contador]');

  if (operacao === '+') {
    peca.value = parseInt(peca.value) + 1;
  } else {
    if (parseInt(peca.value) > 0) {
      peca.value = parseInt(peca.value) - 1;
    } else {
      return false;
    }
  }
  return true;
}

function atualizaEstatistica(peca, operacao) {
  console.log(pecas[peca]);
  estatistica.forEach(evento => {
    if (operacao === '+') {
      evento.innerText =
        parseInt(evento.innerText) + pecas[peca][evento.dataset.estatistica];
    } else {
      evento.innerText =
        parseInt(evento.innerText) - pecas[peca][evento.dataset.estatistica];
    }
  });
}
