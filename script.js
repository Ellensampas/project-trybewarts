const formulario = document.getElementById('evaluation-form');
const botaoEntrar = document.getElementById('btn-entrar');
const login = document.getElementById('email-login');
const senha = document.getElementById('input-senha');
const confirmacao = document.getElementById('agreement');
const botaoEnviar = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const contador = document.getElementById('counter');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');
const familia = document.querySelectorAll('.family');
const tecnologias = document.querySelectorAll('.subject');
const avaliacao = document.querySelectorAll('.nota');
const comentario = document.getElementById('textarea');
const informacaoUsuario = document.getElementById('form-data');

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

textArea.addEventListener('input', () => {
  contador.innerHTML = 500 - textArea.value.length;
});

function nomeCompleto() {
  const paragrafo = document.createElement('p');
  paragrafo.innerHTML = `Nome: ${nome.value} ${sobrenome.value}`;
  return paragrafo;
}

function endedrecoEmail() {
  const paragrafo = document.createElement('p');
  paragrafo.innerHTML = `Email: ${email.value}`;
  return paragrafo;
}

function grupoCasa() {
  const paragrafo = document.createElement('p');
  paragrafo.innerHTML = `Casa: ${casa.value}`;
  return paragrafo;
}

function grupoFamilia() {
  const paragrafo = document.createElement('p');
  let escolhido = '';
  for (let index = 0; index < familia.length; index += 1) {
    if (familia[index].checked) {
      escolhido = familia[index].parentElement.innerText;
    }
  }
  paragrafo.innerHTML = `Família: ${escolhido}`;
  return paragrafo;
}

function grupoTecnologias() {
  const paragrafo = document.createElement('p');
  let escolhido = '';
  for (let index = 0; index < tecnologias.length; index += 1) {
    if (tecnologias[index].checked) {
      escolhido += `${tecnologias[index].parentElement.innerText}, `;
    }
  }
  paragrafo.innerHTML = `Matérias: ${escolhido}`;
  return paragrafo;
}

function avaliacaoUsuario() {
  const paragrafo = document.createElement('p');
  let escolhido = '';
  for (let index = 0; index < avaliacao.length; index += 1) {
    if (avaliacao[index].checked) {
      escolhido += ` ${avaliacao[index].parentElement.innerText}`;
    }
  }
  paragrafo.innerHTML = `Avaliação: ${escolhido}`;
  return paragrafo;
}

function comentarioUsuario() {
  const paragrafo = document.createElement('p');
  paragrafo.innerHTML = `Observações: ${comentario.value}`;
  return paragrafo;
}

botaoEnviar.addEventListener('click', (e) => {
  e.preventDefault();
  informacaoUsuario.innerHTML = '';
  formulario.style.display = 'none';
  // folhaAntiga.style.display = 'block';
  informacaoUsuario.appendChild(nomeCompleto());
  informacaoUsuario.appendChild(endedrecoEmail());
  informacaoUsuario.appendChild(grupoCasa());
  informacaoUsuario.appendChild(grupoFamilia());
  informacaoUsuario.appendChild(grupoTecnologias());
  informacaoUsuario.appendChild(avaliacaoUsuario());
  informacaoUsuario.appendChild(comentarioUsuario());
});
