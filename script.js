

  // Exemplo de exibição dos dados do cliente
  alert(`
    Nome: ${nome}
    E-mail: ${email}
    Telefone: ${telefone}
    Endereço: ${endereco}
    Mensagem: ${mensagem}
  `);


const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach(icon => {
  icon.addEventListener('click', e => {
    e.preventDefault();
    window.open(icon.getAttribute('href'));
  });
});
/* banco de dados */

const mysql = require('mysql');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: ''
});

connection.connect((err) => {
if (err) {
  console.error('Erro ao conectar ao banco de dados: ' + err.stack);
  return;
}

console.log('Conexão estabelecida com sucesso.');
});

connection.query('SELECT * FROM tabela', (error, results, fields) => {
if (error) throw error;

console.log('Resultado da consulta:', results);
});







/*--------->LOGIN<--------------*/

// Obtém os elementos HTML do formulário de login
    const form = document.querySelector('form[data-component="login"]');
    const emailInput = document.querySelector('input[data-login-email]');
    const passwordInput = document.querySelector('input[data-login-password]');
    const submitButton = document.querySelector('button.o-social-form_submit');
  
    // Adiciona um listener para o evento "submit" do formulário
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Evita o envio padrão do formulário
  
      // Valida o e-mail e senha
      const email = emailInput.value;
      const password = passwordInput.value;
  
      if (!email || !password) {
        alert('Por favor, preencha todos os campos');
        return;
      }
  
      // Simula uma requisição para verificar as credenciais
      const fakeRequest = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'user@example.com' && password === 'password') {
            resolve();
          } else {
            reject();
          }
        }, 2000);
      });
  
      // Desativa o botão de enviar e exibe uma mensagem de aguarde
      submitButton.disabled = true;
      submitButton.textContent = 'Aguarde...';
  
      // Envia a requisição e trata o resultado
      fakeRequest.then(() => {
        alert('Login bem-sucedido!');
        submitButton.disabled = false;
        submitButton.textContent = 'Acessar';
      }).catch(() => {
        alert('Credenciais inválidas');
        submitButton.disabled = false;
        submitButton.textContent = 'Acessar';
      });
    });

    // Seleciona o elemento de formulário de login
const loginForm = document.querySelector('[data-component="login"]');

// Adiciona um evento de submissão ao formulário de login
loginForm.addEventListener('submit', (event) => {
  // Previne o comportamento padrão do formulário de enviar a requisição
  event.preventDefault();

  // Redireciona o usuário para a segunda página
  window.location.href = 'contato.html';
});
