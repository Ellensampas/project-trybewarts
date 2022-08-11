const botaoEntrar = document.getElementById('btn-entrar');
const login = document.getElementById('input-email');
const senha = document.getElementById('input-senha');

botaoEntrar.addEventListener('click', () => {
  if (login.value !== 'tryber@teste.com' && senha.value !== 123456) {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
