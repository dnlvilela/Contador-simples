let valor = document.getElementById('valor');
let contador = 0;

document.getElementById('aumentar').addEventListener('click', () => {
  contador++;
  atualizar();
});

document.getElementById('diminuir').addEventListener('click', () => {
  contador--;
  atualizar();
});

document.getElementById('resetar').addEventListener('click', () => {
  contador = 0;
  atualizar();
});

function atualizar() {
  valor.textContent = contador;

  if (contador > 0) valor.style.color = 'green';
  else if (contador < 0) valor.style.color = 'red';
  else valor.style.color = 'black';
}
