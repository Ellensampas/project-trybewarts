const botaoEntrar = document.getElementById('btn-entrar');
const login = document.getElementById('input-email');
const senha = document.getElementById('input-senha');
const confirmacao = document.getElementById('agreement');
const botaoEnviar = document.getElementById('submit-btn');

botaoEntrar.addEventListener('click', () => {
  if (login.value !== 'tryber@teste.com' && senha.value !== 123456) {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

confirmacao.addEventListener('click', () => {
  if (confirmacao.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
});
