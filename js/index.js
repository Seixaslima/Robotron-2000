const Robotron = document.querySelector('.robotron');

Robotron.addEventListener('click', e => {
  console.log(e);
  console.log('fui clicado');
});

function dizOi(nome) {
  console.log('oi ' + nome);
  console.log('Bem-vindo ao Robotron 2000');
}

dizOi('Lucas');
